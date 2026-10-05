import { FormControl, OutlinedInput, InputLabel } from "@mui/material";
import type { IPopapInput } from "./Form.type";
import type { FieldValues } from "react-hook-form";

const InputPopap = <T extends FieldValues>({
  type,
  name,
  placeholder,
  register,
  errors,
}: IPopapInput<T>) => {
  const registerProps = register(name, {
    validate: (value) => {
      if (type === "text" && value.trim() === "") {
        return "This field is required";
      }
      return true;
    },
    setValueAs: (value) => value.trim(),
  });

  return (
    <FormControl
      size="small"
      required={!!errors}
      error={!!errors}
      variant="outlined"
    >
      <InputLabel htmlFor={name}>{placeholder}</InputLabel>
      <OutlinedInput
        error={!!errors}
        {...registerProps}
        id={name}
        type={type}
        label={placeholder}
      />
    </FormControl>
  );
};

export default InputPopap;
