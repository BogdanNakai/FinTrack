import { TextField } from "@mui/material";
import type { Iinput } from "./Form.type";

const InputPopap = ({type, name, placeholder }: Iinput) => {
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
