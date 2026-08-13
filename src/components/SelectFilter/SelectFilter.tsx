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
        // === 1. СТИЛІ ЛЕЙБЛА ===
        "& .MuiInputLabel-root": {
          color: "#64748b",
          // При фокусі робимо лейбл зеленим
          "&.Mui-focused": {
            color: "#00B894 !important",
          },
        },
        // Зелений лейбл при наведенні (Hover)
        "&:hover .MuiInputLabel-root": {
          color: "#00B894 !important",
        },
        // Зелена стрілка при наведенні на FormControl
        "&:hover .MuiSelect-icon": {
          color: "#00B894 !important",
        },
      }}
    >
      <InputLabel id="custom-select-label">{NameSelect}</InputLabel>
      <Select
        labelId="custom-select-label"
        id="custom-select"
        value={category}
        label={NameSelect}
        onChange={handleChange}
        IconComponent={(props) => (
          <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{
              fill: "currentColor",
              position: "absolute",
              top: "8px",
              right: "5px",
              pointerEvents: "none",
            }}
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        )}
        sx={{
          backgroundColor: "#fff",

          // === 2. ТЕКСТ ОБРАНОГО ЗНАЧЕННЯ ===
          "& .MuiSelect-select": {
            color: "#64748B !important",
            fontSize: "14px",
          },

          // === 3. БАЗОВИЙ БОРДЕР ===
          "& .MuiOutlinedInput-notchedOutline, & fieldset": {
            borderColor: "#cbd5e1 !important",
            borderWidth: "1px !important",
            transition: "border-color 0.2s ease-in-out",
          },

          // === 4. HOVER СТАН ===
          "&:hover": {
            backgroundColor: "#f8fafc",
            "& .MuiOutlinedInput-notchedOutline, & fieldset": {
              borderColor: "#00B894 !important",
            },
          },

          // === 5. FOCUS / ACTIVE СТАН (Бордер та зелена іконка) ===
          "&.Mui-focused": {
            backgroundColor: "#fff",
            "& .MuiOutlinedInput-notchedOutline, & fieldset": {
              borderColor: "#00B894 !important",
              borderWidth: "1px !important",
            },
            "& .MuiSelect-icon": {
              color: "#00B894 !important", // Іконка залишається зеленою при фокусі
            },
          },

          // === 6. ІКОНКА СТРІЛКИ ===
          "& .MuiSelect-icon": {
            color: "#64748b",
            right: "10px",
            transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
          },
        }}
        // === 7. СТИЛІЗАЦІЯ ВИПАДАЮЧОГО СПИСКУ ===
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
                    color: "#fff",
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
