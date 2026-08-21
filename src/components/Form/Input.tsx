import type { FieldValues } from "react-hook-form";
import type { IInput, IRegisterFormType } from "./Form.type";
import { InputAdornment, TextField } from "@mui/material";

const Input = <T extends FieldValues>({
  type,
  name,
  placeholder,
  icon,
  register,
  errors,
}: IInput<IRegisterFormType>) => {

  const { onChange, ...registerProps } = register(name, {
          required: `Please enter ${name} `,
          validate: (value) => {
            if (type === "email") {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return (
                emailRegex.test(value) || "Please enter a valid email address"
              );
            }
            return true;
          },
          setValueAs: (value) => value.trim(),
        })

  return (
    <>
      <TextField
        label={placeholder}
        id={`${name}-input`}
        sx={{ width: "100%" }}
        variant="outlined"
        size="small"
        fullWidth
        error={!!errors}
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
        {...registerProps}
        onChange={(e) => {
          e.target.value = e.target.value.trim();
          onChange(e);
        }}
      />
      <span className="text-[11px] text-red-500">{errors?.message}</span>
    </>
  );
};

export default Input;
