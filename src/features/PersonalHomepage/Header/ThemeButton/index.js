import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";
import { StyledSunIcon, StyledThemeButton, StyledButtonText, StyledButtonWrapper, StyledIconWrapper } from "./styled";

export const ThemeButton = () => {

  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <StyledButtonWrapper>
      <StyledButtonText>
        DARK MODE {isDarkTheme ? "ON" : "OFF"}
      </StyledButtonText>
      <StyledThemeButton
        onClick={() => dispatch(toggleTheme())}>
        <StyledIconWrapper moveToRight={isDarkTheme}>
          <StyledSunIcon />
        </StyledIconWrapper>
      </StyledThemeButton>
    </StyledButtonWrapper>
  )
};