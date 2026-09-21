import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import type { IInput, IRegisterFormType, ILoginFormType } from "./Form.type";

const InputPassword = ({
  placeholder,
  name,
  register,
  errors,
  type,
}: IInput<IRegisterFormType | ILoginFormType>) => {
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
              "& .icon-visible": {
                stroke: "#00B894",
              },
              "& .icon-noVisible": {
                fill: "#00B894",
              },
              // Зелений лейбл при наведенні
              "& .MuiInputLabel-root": {
                color: "#00B894 !important",
              },
            },

            "& .Mui-focused": {
              color: "#00B894 !important",
              "& .icon-visible": {
                stroke: "#00B894",
              },
              "& .icon-noVisible": {
                fill: "#00B894",
              },
            },
          }}
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
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#64748B"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-noVisible"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.5299 4.53003C20.6624 4.38785 20.7345 4.19981 20.7311 4.00551C20.7277 3.81121 20.6489 3.62582 20.5115 3.48841C20.3741 3.35099 20.1887 3.27228 19.9944 3.26885C19.8001 3.26543 19.6121 3.33755 19.4699 3.47003L3.46991 19.47C3.39622 19.5387 3.33712 19.6215 3.29613 19.7135C3.25514 19.8055 3.23309 19.9048 3.23132 20.0055C3.22954 20.1062 3.24807 20.2062 3.28579 20.2996C3.32351 20.393 3.37965 20.4778 3.45087 20.5491C3.52209 20.6203 3.60692 20.6764 3.70031 20.7142C3.7937 20.7519 3.89373 20.7704 3.99443 20.7686C4.09513 20.7668 4.19445 20.7448 4.28645 20.7038C4.37845 20.6628 4.46125 20.6037 4.52991 20.53L7.37691 17.683C8.74391 18.327 10.3169 18.75 11.9999 18.75C14.6839 18.75 17.0899 17.673 18.8199 16.345C19.6869 15.68 20.4029 14.938 20.9089 14.209C21.4009 13.5 21.7499 12.723 21.7499 12C21.7499 11.277 21.3999 10.5 20.9089 9.79103C20.4029 9.06203 19.6869 8.32103 18.8209 7.65503C18.5582 7.45303 18.2809 7.2587 17.9889 7.07203L20.5299 4.53003ZM16.8999 8.16103L15.1289 9.93203C15.6064 10.6532 15.8199 11.5172 15.7333 12.3777C15.6467 13.2382 15.2654 14.0424 14.6538 14.6539C14.0423 15.2655 13.2381 15.6469 12.3776 15.7334C11.517 15.82 10.653 15.6065 9.93191 15.129L8.51491 16.545C9.62042 17.002 10.8037 17.2413 11.9999 17.25C14.2869 17.25 16.3799 16.327 17.9069 15.155C18.6689 14.57 19.2709 13.937 19.6769 13.354C20.0959 12.75 20.2499 12.277 20.2499 12C20.2499 11.723 20.0959 11.25 19.6769 10.646C19.2709 10.063 18.6689 9.43003 17.9069 8.84503C17.5936 8.60436 17.2586 8.37636 16.8999 8.16103ZM11.0289 14.031C11.4488 14.2316 11.9205 14.297 12.3791 14.2183C12.8376 14.1396 13.2606 13.9207 13.5896 13.5917C13.9186 13.2627 14.1375 12.8398 14.2162 12.3812C14.2949 11.9226 14.2294 11.4509 14.0289 11.031L11.0289 14.031Z"
                        />
                        <path d="M12 5.25C13.032 5.25 14.024 5.41 14.951 5.681C14.9916 5.69311 15.0283 5.71562 15.0575 5.74629C15.0867 5.77697 15.1074 5.81474 15.1175 5.85587C15.1276 5.89701 15.1268 5.94007 15.1151 5.98078C15.1035 6.0215 15.0814 6.05846 15.051 6.088L14.227 6.913C14.1966 6.94368 14.1589 6.96597 14.1173 6.97771C14.0758 6.98945 14.0319 6.99024 13.99 6.98C13.3373 6.82952 12.6698 6.75237 12 6.75C9.713 6.75 7.62 7.673 6.093 8.845C5.331 9.43 4.729 10.063 4.323 10.646C3.904 11.25 3.75 11.723 3.75 12C3.75 12.277 3.904 12.75 4.323 13.354C4.677 13.864 5.181 14.411 5.811 14.931C5.927 15.026 5.938 15.201 5.831 15.308L5.123 16.017C5.07964 16.061 5.02132 16.087 4.95962 16.09C4.89793 16.093 4.83738 16.0726 4.79 16.033C4.14601 15.5023 3.57476 14.889 3.091 14.209C2.6 13.5 2.25 12.723 2.25 12C2.25 11.277 2.6 10.5 3.091 9.791C3.597 9.062 4.313 8.321 5.179 7.655C6.91 6.327 9.316 5.25 12 5.25Z" />
                        <path d="M12 8.25C12.1186 8.25 12.2356 8.25533 12.351 8.266C12.548 8.285 12.619 8.52 12.48 8.66L11.267 9.872C10.9441 9.98393 10.6508 10.1676 10.4092 10.4092C10.1676 10.6509 9.98391 10.9441 9.87197 11.267L8.65997 12.48C8.51998 12.62 8.28497 12.548 8.26597 12.351C8.21711 11.8312 8.27732 11.3069 8.44275 10.8117C8.60819 10.3166 8.8752 9.86137 9.2267 9.47532C9.57819 9.08928 10.0064 8.78089 10.484 8.56989C10.9615 8.35889 11.4779 8.24994 12 8.25Z" />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#64748B"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-visible"
                      >
                        <path
                          d="M3.275 15.296C2.425 14.192 2 13.639 2 12C2 10.36 2.425 9.809 3.275 8.704C4.972 6.5 7.818 4 12 4C16.182 4 19.028 6.5 20.725 8.704C21.575 9.81 22 10.361 22 12C22 13.64 21.575 14.191 20.725 15.296C19.028 17.5 16.182 20 12 20C7.818 20 4.972 17.5 3.275 15.296Z"
                          stroke-width="1.5"
                        />
                        <path
                          d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
                          stroke-width="1.5"
                        />
                      </svg>
                    )}
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="#999999"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-noVisible"
                  >
                    <path d="M1.66667 17.5C1.20833 17.5 0.816111 17.3369 0.49 17.0108C0.163889 16.6847 0.000555556 16.2922 0 15.8333V7.5C0 7.04167 0.163333 6.64945 0.49 6.32333C0.816666 5.99722 1.20889 5.83389 1.66667 5.83333H2.5V4.16667C2.5 3.01389 2.90639 2.03139 3.71917 1.21917C4.53194 0.406945 5.51444 0.000556124 6.66667 5.68828e-07C7.81889 -0.000554987 8.80167 0.405834 9.615 1.21917C10.4283 2.0325 10.8344 3.015 10.8333 4.16667V5.83333H11.6667C12.125 5.83333 12.5175 5.99667 12.8442 6.32333C13.1708 6.65 13.3339 7.04222 13.3333 7.5V15.8333C13.3333 16.2917 13.1703 16.6842 12.8442 17.0108C12.5181 17.3375 12.1256 17.5006 11.6667 17.5H1.66667ZM1.66667 15.8333H11.6667V7.5H1.66667V15.8333ZM6.66667 13.3333C7.125 13.3333 7.5175 13.1703 7.84417 12.8442C8.17083 12.5181 8.33389 12.1256 8.33333 11.6667C8.33278 11.2078 8.16972 10.8156 7.84417 10.49C7.51861 10.1644 7.12611 10.0011 6.66667 10C6.20722 9.99889 5.815 10.1622 5.49 10.49C5.165 10.8178 5.00167 11.21 5 11.6667C4.99833 12.1233 5.16167 12.5158 5.49 12.8442C5.81833 13.1725 6.21056 13.3356 6.66667 13.3333ZM4.16667 5.83333H9.16667V4.16667C9.16667 3.47222 8.92361 2.88195 8.4375 2.39583C7.95139 1.90972 7.36111 1.66667 6.66667 1.66667C5.97222 1.66667 5.38194 1.90972 4.89583 2.39583C4.40972 2.88195 4.16667 3.47222 4.16667 4.16667V5.83333Z" />
                  </svg>
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
