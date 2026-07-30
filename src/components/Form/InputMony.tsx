import { FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import type { Iinput } from "./Form.type";

const InputMony = ({ name, placeholder, type }: Iinput) => {
  return (
    <>
      <FormControl size="small" variant="outlined">
        <InputLabel htmlFor={name}>{placeholder}</InputLabel>
        <OutlinedInput
          id={name}
          type={type}
          label={placeholder}
          endAdornment={<InputAdornment position="end">$</InputAdornment>}
         />
      </FormControl>
    </>
  );
};

export default InputMony