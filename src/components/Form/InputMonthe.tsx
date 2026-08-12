import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
// Імпортуємо іконку стрілки вниз
function InputMonthe() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Mounth"
        views={["month", "year"]}
        defaultValue={dayjs()}
        slots={{
          openPickerIcon: () => (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                fill: "currentColor",
                position: "absolute",
                right: "7px",
                pointerEvents: "none", // важно, чтобы клик проходил сквозь иконку в сам Select
              }}
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          ),
        }}
        slotProps={{
          field: {
            openPickerButtonPosition: "end",
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
              width: "50cqw",
              minWidth: "150px",
            },
            size: "small",
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default InputMonthe;
