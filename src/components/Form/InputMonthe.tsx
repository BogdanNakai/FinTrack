import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
// Імпортуємо іконку стрілки вниз
function InputMonthe({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={title}
        views={["month", "year"]}
        defaultValue={dayjs()}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        slots={{
          openPickerIcon: (props) => (
            <svg
              {...props}
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
              width: "50cqw",
              minWidth: "150px",

              // === ЗАГАЛЬНИЙ HOVER ДЛЯ ВСІХ ЕЛЕМЕНТІВ ІНПУТА ===
              "&:hover": {
                // Зелений лейбл при наведенні
                "& .MuiInputLabel-root": {
                  color: "#00B894 !important",
                },
                // ЗЕЛЕНА ІКОНКА СТРІЛКИ ПРИ НАВЕДЕННІ
                "& .MuiIconButton-root": {
                  color: "#00B894 !important",
                },
              },

              // 1. ЛЕЙБЛ
              "& .MuiInputLabel-root": {
                color: "#64748b",
                fontSize: "14px",
                "&.MuiInputLabel-shrink": {
                  backgroundColor: "#fff",
                  padding: "0 6px",
                },
              },

              // 2. ТЕКСТ МІСЯЦЯ ТА РОКУ В ІНПУТІ
              "& .MuiInputBase-input, & .MuiPickersSectionList-root, & .MuiPickersSection-root, & .MuiPickersSection-content":
                {
                  color: "#64748B !important",
                  WebkitTextFillColor: "#64748B !important",
                  cursor: "pointer",
                },

              // 3. ЗВИЧАЙНИЙ БОРДЕР
              "& .MuiOutlinedInput-notchedOutline, & fieldset": {
                borderColor: "#cbd5e1 !important",
                borderWidth: "1px !important",
                transition: "border-color 0.2s ease-in-out",
              },

              // 4. БОРДЕР ПРИ НАВЕДЕННІ (Hover)
              "&:hover .MuiOutlinedInput-notchedOutline, &:hover fieldset": {
                borderColor: "#00B894 !important",
              },

              // 5. БОРДЕР ПРИ ФОКУСІ / ВІДКРИТТІ
              "& .Mui-focused .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused fieldset":
                {
                  borderColor: "#00B894 !important",
                  borderWidth: "1px !important",
                },

              // 6. ІКОНКА СТРІЛКИ
              "& .MuiIconButton-root": {
                color: "#64748b",
                padding: "4px",
                // Додано плавну анімацію для зміни кольору
                transition:
                  "transform 0.2s ease-in-out, color 0.2s ease-in-out",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default InputMonthe;
