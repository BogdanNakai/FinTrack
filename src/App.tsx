import "@/css/index.css";
import type { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RoutesComponent from "./routes/Routes";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import { fieldStyles } from "./components/form/fieldStyles";

const theme = createTheme({
  palette: {
    primary: { main: "#00B894" },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    MuiFormControl: {
      defaultProps: { size: "small", fullWidth: true },
      styleOverrides: { root: fieldStyles },
    },
    MuiTextField: {
      defaultProps: { size: "small", fullWidth: true, variant: "outlined" },
    },
    MuiPickersTextField: {
      defaultProps: { size: "small", fullWidth: true },
      styleOverrides: { root: fieldStyles },
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RoutesComponent />
    </ThemeProvider>
  );
};

export default App;
