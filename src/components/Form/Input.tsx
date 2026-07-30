
import type { Iinput } from "./Form.type";
import { InputAdornment, TextField } from "@mui/material";

const Input = ({ type, placeholder, icon }: Iinput) => {

  return (
    <>
      <TextField
        label={placeholder}
        id={`${name}-input`}
        sx={{ m: 1, width: "25ch" }}
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
