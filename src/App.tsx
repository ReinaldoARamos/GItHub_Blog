import { ThemeProvider } from "styled-components";
import { Header } from "./Componentes/Header/Header";
import { defaultTheme } from "./Styles/themes/default";
import { GlobalStyle } from "./Styles/global";

import { Blog } from "./Pages/Blog";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes/routes";
import { DefaultLayout } from "./Layout";
import { BlogProvider } from "./Context/context";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
      <BlogProvider>
        <Router />
        </BlogProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
