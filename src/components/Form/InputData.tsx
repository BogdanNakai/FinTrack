import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { IInput } from "./Form.type";

function InputData({ placeholder }: IInput) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={placeholder}
        format="DD MMMM YYYY"
        slotProps={{
          field: {
            openPickerButtonPosition: "start",
          },
          popper: {
            placement: "bottom-start",
            modifiers: [
              {
                name: "flip",
                enabled: false,
              },
            ],
          },
          textField: {
            sx: {
              borderRadius: 10,
              minWidth: 300,
            },
            fullWidth: true,
            size: "small",
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default InputData;
