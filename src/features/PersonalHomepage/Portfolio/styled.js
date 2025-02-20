import styled from "styled-components";
import { ReactComponent as Github } from "../../../images/github.svg"

export const GithubIcon = styled(Github)`
  margin: 0 auto;
`;

export const StyledPortfolioWrapper = styled.div`
  margin-top: 72px;
`;

export const StyledPortfolioHeader = styled.div`
  display: grid;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledTitle = styled.h2`
  font-size: 30px;
  margin:12px auto 0 auto;
`;

export const StyledSubject = styled.p`
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 0;
`;