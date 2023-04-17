import { ThemeProvider } from "styled-components";
import { Header } from "./Componentes/Header/Header";
import { defaultTheme } from "./Styles/themes/default";
import { GlobalStyle } from "./Styles/global";
import { Profile } from "./Pages/Blog/Profile";

export function App() {
  
return (

  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <Header/>
    <Profile />
  </ThemeProvider>



)
  
}

