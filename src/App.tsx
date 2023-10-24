import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme/dark";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
