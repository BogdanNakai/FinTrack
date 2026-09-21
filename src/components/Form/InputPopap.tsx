import { TextField } from "@mui/material";
import type { IBaseInput } from "./Form.type";

const InputPopap = ({ type, name, placeholder }: IBaseInput ) => {
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
