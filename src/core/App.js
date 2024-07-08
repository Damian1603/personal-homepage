import { PersonalHomepage } from "../features/PersonalHomepage";
import { ThemeProvider } from "styled-components";
import { selectIsDarkTheme } from "../features/PersonalHomepage/Header/ThemeButton/themeSlice";
import { useSelector } from "react-redux";
import { themeDark, themeLight } from "../theme";
import { GlobalStyles } from "../GlobalStyles"
import { Normalize } from "styled-normalize";

function App() {

  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Normalize />
      <GlobalStyles />
      <PersonalHomepage />
    </ThemeProvider>
  )
};

export default App;