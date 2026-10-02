import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import type { IMoneyInput } from "./Form.type";
import type { FieldValues } from "react-hook-form";

const InputMoney = <T extends FieldValues>({
  name,
  placeholder,
  type,
  register,
  errors,
}: IMoneyInput<T>) => {

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

  const hasError = Boolean(errors);

  const registerProps = register(name, {
    validate: (value) => {
      if (type === "number" && value === '' ) {
        return "This field is required";
      }
      return true;
    }
  });
  return (
    <>
      <FormControl
        required={!!errors}
        size="small"
        variant="outlined"
        sx={getFormControlStyles(hasError)}
      >
        <InputLabel htmlFor={name}>
          {placeholder}
        </InputLabel>
        <OutlinedInput
          error={!!errors}
          {...registerProps}
          id={name}
          type={type}
          label={placeholder}
          endAdornment={<InputAdornment position="end">₹</InputAdornment>}
        />
      </FormControl>
    </>
  );
};

export default InputMoney;
