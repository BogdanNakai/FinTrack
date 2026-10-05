import { useId } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { Controller, type FieldValues } from "react-hook-form";

import type { SelectFilterProps } from "./Form.type";

const SelectForm = <T extends FieldValues>({
  options,
  name,
  control,
  label,
  errors,
}: SelectFilterProps<T>) => {
  const selectId = useId();
  const hasError = Boolean(errors);

  return (
    <FormControl
      fullWidth
      required={!!errors}
      error={hasError}
      size="small"
    >
      <InputLabel id={`${selectId}-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        rules={{
          required: "This field is required",
          pattern: {
            value: /^[\s\S]+$/,
            message: "Please select an option",
          },
        }}
        render={({ field }) => (
          <Select
            {...field}
            labelId={`${selectId}-label`}
            id={selectId}
            value={field.value ?? ""}
            label={label}
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
            MenuProps={{
              slotProps: {
                paper: {
                  sx: {
                    marginTop: "4px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 20px rgba(0, 0,0,0.08)",
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
                          backgroundColor: "primary.main",
                        },
                      },
                    },
                  },
                },
              },
            }}
          >
            {options.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default SelectForm;
