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
}: IMoneyInput<T>) => {
  const registerProps = register(name, {
    valueAsNumber: type === "number",
  });
  return (
    <>
      <FormControl size="small" variant="outlined">
        <InputLabel htmlFor={name}>{placeholder}</InputLabel>
        <OutlinedInput
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
