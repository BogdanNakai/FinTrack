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
    <FormControl fullWidth sx={{ width: 1 }} size="small">
      <InputLabel id="demo-simple-select-label">{NameSelect}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="All Category"
        onChange={handleChange}
        IconComponent={() => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{
              fill: "currentColor",
              position: "absolute",
              right: "5px",
              pointerEvents: "none", // важно, чтобы клик проходил сквозь иконку в сам Select
            }}
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        )}
      >
        {SelectOptionsList.map((e: any) => {
          return <MenuItem value={e.value}>{e.label}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;
