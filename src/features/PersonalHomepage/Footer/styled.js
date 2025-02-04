import styled from "styled-components";

export const StyledFooterWrapper = styled.footer`
  margin-top: 113px;
  max-width: 691px;
  height: 282px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px; 
  }
`;

export const StyledFooterEmail = styled.h2`
  margin-top: 24px;
  font-size: 32px;
  margin-bottom: 0;
`;

export const StyledFooterDescription = styled.p`
  margin-top: 24px;
  font-size: 18px;
  margin-bottom: 0;
`;
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.primary}
  }
`;