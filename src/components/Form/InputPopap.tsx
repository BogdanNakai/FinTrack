import { TextField } from "@mui/material";
import type { IInput, IRegisterFormType } from "./Form.type";

const InputPopap = ({ type, name, placeholder }: IInput<IRegisterFormType>) => {
  return (
    <TextField
      id={name}
      label={placeholder}
      variant="outlined"
      type={type}
      size="small"
    />
  );
};

export default InputPopap;
