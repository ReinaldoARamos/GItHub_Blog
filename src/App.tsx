import { ThemeProvider } from "styled-components";
import { Header } from "./Componentes/Header/Header";
import { defaultTheme } from "./Styles/themes/default";
import { GlobalStyle } from "./Styles/global";

export function App() {
  
return (

  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <Header/>
  </ThemeProvider>



)
  
}

