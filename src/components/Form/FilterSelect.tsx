import { useId } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import type { ISelectOption } from "./Form.type";

interface FilterSelectProps {
  options: ReadonlyArray<ISelectOption>;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const FilterSelect = ({
  options,
  label,
  value,
  onChange,
}: FilterSelectProps) => {
  const selectId = useId();

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${selectId}-label`}>{label}</InputLabel>
      <Select
        labelId={`${selectId}-label`}
        id={selectId}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
