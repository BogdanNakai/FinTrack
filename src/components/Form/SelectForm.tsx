import { useId } from "react";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { Controller, type FieldValues } from "react-hook-form";

import type { SelectFilterProps } from "./Form.type";

const COLORS = {
  primary: "#00B894",
  error: "#d32f2f",
  text: "#64748B",
  border: "#cbd5e1",
  background: "#fff",
  hoverBackground: "#f8fafc",
} as const;

const getFormControlStyles = (hasError: boolean) => {
  const stateColor = hasError ? COLORS.error : COLORS.primary;

  return {
    "& .MuiInputLabel-root": {
      color: hasError ? COLORS.error : COLORS.text,
      "&.Mui-focused": {
        color: stateColor,
      },
    },
    "&:hover .MuiInputLabel-root": {
      color: stateColor,
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: COLORS.background,
      "& .MuiSelect-select": {
        color: COLORS.text,
        fontSize: "14px",
      },
      "& .MuiSelect-icon": {
        color: hasError ? COLORS.error : COLORS.text,
        transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: hasError ? COLORS.error : COLORS.border,
        borderWidth: "1px",
        transition: "border-color 0.2s ease-in-out",
      },
      "&:hover": {
        backgroundColor: COLORS.hoverBackground,
        "& .MuiSelect-select, & .MuiSelect-icon": {
          color: stateColor,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: stateColor,
        },
      },
      "&.Mui-focused": {
        backgroundColor: COLORS.background,
        "& .MuiSelect-select, & .MuiSelect-icon": {
          color: stateColor,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: stateColor,
          borderWidth: "2px",
        },
      },
    },
    "& .MuiInputLabel-root.Mui-error": {
      color: COLORS.error,
    },
    "& .MuiOutlinedInput-root.Mui-error": {
      "& .MuiSelect-icon": {
        color: COLORS.error,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: COLORS.error,
      },
    },
  };
};

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
      sx={getFormControlStyles(hasError)}
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
                          backgroundColor: COLORS.primary,
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
