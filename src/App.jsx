import DIV from "./styled_components/styled_div"
import {ThemeProvider} from 'styled-components';
import {Dark,Light} from './styles/Themes'
import { useState } from "react";
import { GlobalStyles} from './styles/Global.styles'
import Navbar from "./components/navbar";
import Main from "./components/main";

function App(){
  const [theme,setTheme] = useState(Light)

  function changeTheme(){
    if(theme.name == "dark"){
      setTheme(Light)
    }else{
      setTheme(Dark)
    }
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Navbar changeTheme={changeTheme}/>
      <Main/>
    </ThemeProvider>
    </>
  )
}

export default App         