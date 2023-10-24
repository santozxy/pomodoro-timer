import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme/dark";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
