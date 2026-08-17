import type { FieldValues } from "react-hook-form";
import type { IInput, IRegisterFormType } from "./Form.type";
import { InputAdornment, TextField } from "@mui/material";

const Input = <T extends FieldValues>({
  type,
  name,
  placeholder,
  icon,
  register,
}: IInput<IRegisterFormType>) => {
  return (
    <>
      <TextField
        label={placeholder}
        id={`${name}-input`}
        sx={{ width: "100%" }}
        variant="outlined"
        size="small"
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <img
                  className="w-[20px] h-[20px]"
                  src={icon}
                  alt={`icon_${name}`}
                />
              </InputAdornment>
            ),
          },
        }}
        {...register(name, {
          required: "lorem",
        })}
      />
    </>
  );
};

export default Input;
