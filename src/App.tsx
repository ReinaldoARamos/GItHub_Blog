import { ThemeProvider } from "styled-components";
import { Header } from "./Componentes/Header/Header";
import { defaultTheme } from "./Styles/themes/default";
import { GlobalStyle } from "./Styles/global";

import { Blog } from "./Pages/Blog";
import { BrowserRouter} from "react-router-dom";
import { Router } from "./Routes/routes";
import { DefaultLayout } from "./Layout";


export function App() {
  
return (

  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>

  <BrowserRouter>
 
  <Router />

  </BrowserRouter>
    
  </ThemeProvider>



)
  
}

