// Shared by regular fields, selects, and the accessible date picker fields.
export const fieldStyles = {
  minWidth: 0,
  maxWidth: "100%",
  "& .MuiInputLabel-root": {
    color: "#64748B",
    fontSize: "14px",
    "&.Mui-focused": { color: "#00B894" },
    "&.Mui-error": { color: "#d32f2f" },
  },
  "&:hover .MuiInputLabel-root:not(.Mui-error):not(.Mui-disabled)": {
    color: "#00B894",
  },
  "& .MuiOutlinedInput-root, & .MuiPickersOutlinedInput-root": {
    minHeight: 40,
    borderRadius: "4px",
    backgroundColor: "#fff",
    color: "#64748B",
    fontSize: "14px",
    transition: "background-color 0.2s ease-in-out",
    "& fieldset": {
      borderColor: "#cbd5e1",
      borderWidth: "1px",
      transition: "border-color 0.2s ease-in-out",
    },
    "& .MuiInputAdornment-root, & .MuiIconButton-root, & .MuiSelect-icon": {
      color: "#64748B",
      transition: "color 0.2s ease-in-out, transform 0.2s ease-in-out",
    },
    "& .MuiInputAdornment-root svg[fill]:not([fill='none'])": {
      fill: "currentColor",
    },
    "& .MuiInputAdornment-root svg[stroke]": { stroke: "currentColor" },
    "&:hover:not(.Mui-disabled)": {
      backgroundColor: "#f8fafc",
      "& fieldset": { borderColor: "#00B894" },
    },
    "&.Mui-focused": {
      backgroundColor: "#fff",
      "& fieldset": { borderColor: "#00B894", borderWidth: "2px" },
    },
    "&:hover:not(.Mui-disabled), &.Mui-focused": {
      "& .MuiInputAdornment-root, & .MuiIconButton-root, & .MuiSelect-icon": {
        color: "#00B894",
      },
    },
    "&.Mui-error, &.Mui-error:hover, &.Mui-error.Mui-focused": {
      "& fieldset": { borderColor: "#d32f2f" },
      "& .MuiInputAdornment-root, & .MuiIconButton-root, & .MuiSelect-icon": {
        color: "#d32f2f",
      },
    },
    "&.Mui-disabled": {
      backgroundColor: "#f8fafc",
      "& fieldset": { borderColor: "#e2e8f0" },
    },
  },
};
