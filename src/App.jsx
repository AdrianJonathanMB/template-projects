import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import GlobalStyles from "./styles/globalStyles";

import Router from "./router";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
