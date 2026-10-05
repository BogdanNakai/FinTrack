import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useState } from "react";
import type { IMonthInput } from "./Form.type";
// Імпортуємо іконку стрілки вниз
function InputMonth({ placeholder }: IMonthInput) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={placeholder}
        views={["month", "year"]}
        defaultValue={dayjs()}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        slots={{
          openPickerIcon: () => (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "currentColor" }}
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          ),
        }}
        slotProps={{
          field: {
            openPickerButtonPosition: "end",
          },

          // 1. ВИПАДАЮЧИЙ КАЛЕНДАР (Month / Year Picker)
          popper: {
            placement: "bottom-start",
            modifiers: [
              {
                name: "flip",
                enabled: false,
              },
            ],
            sx: {
              "& .MuiPaper-root": {
                marginTop: "4px",
                borderRadius: "8px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",

                "& .MuiPickersMonth-monthButton, & .MuiPickersYear-yearButton":
                  {
                    fontSize: "14px",
                    borderRadius: "6px",
                    color: "#64748b",
                    "&:hover": {
                      backgroundColor: "#f1f5f9",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#8BD9C9 !important",
                      color: "#64748B !important",
                      fontWeight: 600,
                      "&, & *": {
                        color: "#64748B !important",
                      },
                      "&:hover": {
                        backgroundColor: "#00B894 !important",
                      },
                    },
                  },
              },
            },
          },

          // 2. ПОЛЕ ВВОДУ (TextField + Секції дати)
          textField: {
            onClick: () => setIsOpen(true),
            size: "small",
            sx: {
              "& .MuiIconButton-root": {
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default InputMonth;
