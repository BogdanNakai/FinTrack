
import type { Iinput } from "./Form.type";
import { InputAdornment, TextField } from "@mui/material";

const Input = ({ type, name, placeholder, icon }: Iinput) => {

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
      />
    </>
  );
};

export default Input;
