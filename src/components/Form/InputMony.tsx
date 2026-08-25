import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import type { IInput, IRegisterFormType } from "./Form.type";

const InputMony = ({ name, placeholder, type }: IInput<IRegisterFormType>) => {
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

export default InputMony;
