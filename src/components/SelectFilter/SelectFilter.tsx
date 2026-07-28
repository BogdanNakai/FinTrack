import { useState } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import type { SelectFilterProps } from "./Select.types";

const SelectFilter = ({ SelectOptionsList, NameSelect }: SelectFilterProps) => {
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <FormControl fullWidth sx={{ minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">{NameSelect}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="All Category"
          onChange={handleChange}
        >
          {SelectOptionsList.map((e: any) => {
            return <MenuItem value={e.value}>{e.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectFilter;
