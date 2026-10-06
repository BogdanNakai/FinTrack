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
  isExpense = false,
}: IMoneyInput<T>) => {
  const registerProps = register(name, {
    max: {
      value: 1_000_000,
      message: "Value exceeds the maximum limit",
    },
    min: {
      value: 0.01,
      message: "Value must be greater than or equal to 1",
    },
    valueAsNumber: true,
    validate: {
      validNumber: (value) =>
        Number.isFinite(value) || "Enter the correct number",

      precision: (value) =>
        Math.abs(value * 100 - Math.round(value * 100)) < 0.000001 ||
        "A maximum of two digits after the period is allowed",
    },
  });

  return (
    <>
      <FormControl
        error={!!errors}
        required={!!errors}
        size="small"
        variant="outlined"
      >
        <InputLabel htmlFor={name}>{placeholder}</InputLabel>
        <OutlinedInput
          inputProps={{ step: 0.01 }}
          error={!!errors}
          {...registerProps}
          id={name}
          type={type}
          label={placeholder}
          startAdornment={
            isExpense ? (
              <InputAdornment position="start">−</InputAdornment>
            ) : undefined
          }
          endAdornment={<InputAdornment position="end">₹</InputAdornment>}
        />
      </FormControl>
    </>
  );
};

export default InputMoney;
