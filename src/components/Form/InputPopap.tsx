import { TextField } from "@mui/material";
import type { IPopapInput } from "./Form.type";
import type { FieldValues } from "react-hook-form";

const InputPopap = <T extends FieldValues>({
  type,
  name,
  placeholder,
  register,
}: IPopapInput<T>) => {
  const registerProps = register(name);
  return (
    <TextField
      {...registerProps}
      id={name}
      label={placeholder}
      variant="outlined"
      type={type}
      size="small"
    />
  );
};

export default InputPopap;
