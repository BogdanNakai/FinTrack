import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { Iinput } from "./Form.type";


function InputMonthe({ placeholder }: Iinput) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={'"month" and "year"'}
        views={["month", "year"]}
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

export default InputMonthe;
