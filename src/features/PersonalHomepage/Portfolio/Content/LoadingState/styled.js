import styled, { keyframes } from "styled-components";
import { ReactComponent as Elipse } from "./Ellipse 1.svg";

export const StyledLoading = styled.div`
  margin-top: 88px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.warningInfo.text};
`;

export const StyledInfo = styled.span`
  font-size: 20px;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledElipse = styled(Elipse)`
margin-top: 48px;
color: ${({ theme }) => theme.colors.tile.header};
animation: ${spin} 1s linear infinite;

circle {
  color: ${({ theme }) => theme.colors.tile.border};
}
`;