import "@/css/index.css";
import type { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RoutesComponent from "./routes/Routes";

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
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
