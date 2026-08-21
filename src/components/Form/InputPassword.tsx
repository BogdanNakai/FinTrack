import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import type { IInput, IRegisterFormType } from "./Form.type";
import passwordVisible from "@/assets/icon_passwordVisible.svg";
import passwordVisibleOff from "@/assets/icon_passwordVisibleOff.svg";

const InputPassword = ({
  placeholder,
  icon,
  name,
  register,
  errors,
  type,
}: IInput<IRegisterFormType>) => {

  const outlinedPasswordId = React.useId();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { onChange, ...registerProps } = register(name, {
    required: `Please enter password`,

    validate: (value, formValues) => {
      if (type === "password" && name !== "confirmPassword") {
        const emailRegex =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return emailRegex.test(value) || "Please enter a valid password";
      }
      if (name === "confirmPassword") {
        return value === formValues.password || "Passwords do not match";
      }
      return true;
    },
    setValueAs: (value) => value.trim(),
  });
  

  return (
    <>
      <FormControl sx={{ width: "100%" }} variant="outlined">
        <TextField
          fullWidth
          id={`${outlinedPasswordId}-input`}
          type={showPassword ? "text" : "password"}
          label={placeholder}
          size="small"
          error={!!errors}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <img
                        src={passwordVisibleOff}
                        className="w-[20px] h-[20px]"
                        alt="Image"
                      />
                    ) : (
                      <img
                        src={passwordVisible}
                        className="w-[20px] h-[20px]"
                        alt="Image"
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
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
      </FormControl>
      <span className="text-[11px] text-red-500">{errors?.message}</span>
    </>
  );
};

export default InputPassword;
