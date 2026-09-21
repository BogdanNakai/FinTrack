import type { IInput, IRegisterFormType, ILoginFormType } from "./Form.type";
import { InputAdornment, TextField } from "@mui/material";

const Input = ({
  type,
  name,
  placeholder,
  register,
  errors,
}: IInput<IRegisterFormType | ILoginFormType>) => {
  
  const { onChange, ...registerProps } = register(name, {
    required: `Please enter ${name} `,
    validate: (value) => {
      if (type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) || "Please enter a valid email address";
      }
      return true;
    },
    setValueAs: (value) => value.trim(),
  });

  return (
    <>
      <TextField
        label={placeholder}
        id={`${name}-input`}
        variant="outlined"
        size="small"
        fullWidth
        error={!!errors}
        sx={{
          width: "100%", // або "300px", "50%" тощо
          minWidth: "100px",
          maxWidth: "100%", // якщо потрібно о

          // 1. ЛЕЙБЛ
          "& .MuiInputLabel-root": {
            color: "#64748b",
            fontSize: "14px",
            "&.MuiInputLabel-shrink": {
              backgroundColor: "#fff",
              padding: "0 6px",
            },
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

          // === ЗАГАЛЬНИЙ HOVER ДЛЯ ВСІХ ЕЛЕМЕНТІВ ІНПУТА ===
          "&:hover": {
            // Зелений лейбл при наведенні
            "& .MuiInputLabel-root": {
              color: "#00B894 !important",
            },
            // ЗЕЛЕНА ІКОНКА СТРІЛКИ ПРИ НАВЕДЕННІ
            "& .MuiInputAdornment-root svg": {
              fill: "#00B894",
            },
          },

          "& .Mui-focused": {
            color: "#00B894 !important",
            "& .MuiInputAdornment-root svg": {
              fill: "#00B894",
            },
          },
        }}
        {...registerProps}
        onChange={onChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="#999999"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.6667 1.66667C16.6667 0.75 15.9167 0 15 0H1.66667C0.75 0 0 0.75 0 1.66667V11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333H15C15.9167 13.3333 16.6667 12.5833 16.6667 11.6667V1.66667ZM15 1.66667L8.33333 5.83333L1.66667 1.66667H15ZM15 11.6667H1.66667V3.33333L8.33333 7.5L15 3.33333V11.6667Z" />
                </svg>
              </InputAdornment>
            ),
          },
        }}
      />
      <span className="text-[11px] text-red-500">{errors?.message}</span>
    </>
  );
};

export default Input;
