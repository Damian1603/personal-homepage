import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./brightness 1.svg";

export const StyledThemeButton = styled.button`
  width: 55px;
  height: 26px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.themeSwitch.border};
  cursor: pointer;  
  background: ${({ theme }) => theme.colors.themeSwitch.background};
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items:baseline;
  margin-top: 100px;
`;

export const StyledSunIcon = styled(SunIcon)`
  align-self: center;
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color:${({ theme }) => theme.colors.themeSwitch.backgroundIcon};
  
  ${({ moveToRight }) =>
    moveToRight
      ? css`
      transform: translateX(20px) rotate(180deg);
      transition: transform 0.5s ease-in-out
    `
      : css`
          transform: translateX(0) rotate(0);
          transition: transform 0.5s ease-in-out;
        `}
  `;

export const StyledButtonText = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  margin-right: 12px;

  @media(max-width:${({ theme }) => theme.breakpoints.mobileMax}px){
    display: none;
  }
`;