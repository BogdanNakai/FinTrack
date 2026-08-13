import { useState } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import type { SelectFilterProps } from "./Select.types";

const SelectFilter = ({ SelectOptionsList, NameSelect }: SelectFilterProps) => {
  const [category, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  return (
    <FormControl
      fullWidth
      size="small"
      sx={{
        "& .MuiInputLabel-root": {
          color: "#64748b",
          "&.Mui-focused": {
            color: "#00B894",
          },
        },
      }}
    >
      <InputLabel id="custom-select-label">{NameSelect}</InputLabel>
      <Select
        labelId="custom-select-label"
        id="custom-select"
        value={category}
        label={NameSelect} // має відповідати NameSelect для коректного вирізу рамки
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
        sx={{
          backgroundColor: "#fff",
          color: "#64748B",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#cbd5e1",
            borderWidth: "1px",
          },
          "&:hover": {
            backgroundColor: "#f8fafc",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00B894",
            },
          },
          "&.Mui-focused": {
            backgroundColor: "#fff",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00B894",
              borderWidth: "1px",
            },
          },
          "& .MuiSelect-icon": {
            color: "#64748b",
            right: "10px",
            transition: "transform 0.2s ease-in-out", // плавний поворот стрілки
          },
        }}
        // Стилізація самого випадаючого списку (Paper & MenuItem)
        MenuProps={{
          slotProps: {
            paper: {
              sx: {
                marginTop: "4px",
                borderRadius: "8px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                "& .MuiMenuItem-root": {
                  fontSize: "14px",
                  padding: "10px 16px",
                  "&:hover": {
                    backgroundColor: "#f1f5f9",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#8BD9C9",
                    "&:hover": {
                      backgroundColor: "#00B894",
                    },
                  },
                },
              },
            },
          },
        }}
      >
        {SelectOptionsList.map((item: any) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;
