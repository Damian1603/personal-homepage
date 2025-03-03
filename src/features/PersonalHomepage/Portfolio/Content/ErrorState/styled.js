import styled from "styled-components";
import { ReactComponent as Warning } from "./Danger.svg"

export const StyledWrapper = styled.div`
margin-top: 88px;
display: grid;
place-items:center;
color: ${({ theme }) => theme.colors.warningInfo.text};
`;

export const StyledIcon = styled(Warning)`
  color: ${({ theme }) => theme.colors.warningInfo.text};
`;

export const StyledStatement = styled.h3`
font-size: 24px;
color: ${({ theme }) => theme.colors.warningInfo.text};
margin-top: 16px;
margin-bottom:0;
`;

export const StyledInfo = styled.span`
font-size: 20px;
text-align: center;
align-items: center;
margin-top: 32px;
`;

export const StyledButton = styled.button`
height: 49px;
width: 168px;
border: none;
margin-top: 32px;
cursor: pointer;
color: ${({ theme }) => theme.colors.buttonLink.text};
background: ${({ theme }) => theme.colors.primary};
gap: 16px;
border-radius: 4px;
border: 1px 0px 0px 0px;
opacity: 0px;
`;