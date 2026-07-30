import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import type { Iinput } from "./Form.type";
import passwordVisible from "@/assets/icon_passwordVisible.svg";
import passwordVisibleOff from "@/assets/icon_passwordVisibleOff.svg";

const InputPassword = ({ type, placeholder, icon }: Iinput) => {
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

  return (
    <>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <TextField
          fullWidth
          id={`${outlinedPasswordId}-input`}
          type={showPassword ? "text" : "password"}
          label={placeholder}
          size="small"
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
        />
      </FormControl>
    </>
  );
};

export default InputPassword;

