import styled from "styled-components";

export const StyledDescription = styled.article`
  max-width: 633px;
  margin: 64px auto 73px 72px;
`;

export const StyledCaption = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15.6px;
  margin-bottom: 0;
`;

export const StyledFullName = styled.h1`
  font-size: 38px;
  margin-bottom: 0;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledParagraphDescription = styled.p`
  margin-top: 36px;
  margin-bottom: 0;
  line-height: 28px;
`;

export const StyledButton = styled.a`
  width: 154px;
  height: 49px;
  border: none;
  margin-top: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonLink.text};
  transition: box-shadow 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 0 2px  rgba(140, 194, 255, 1);
  }
`;

export const MailIcon = styled.img`
  margin: 12.5px 16px 12.5px 16px;
`;