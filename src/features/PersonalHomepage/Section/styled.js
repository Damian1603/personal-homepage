import styled from "styled-components";
import { ReactComponent as Ellipse } from "../../../images/Ellipse 31.svg";

export const StyledSkillsList = styled.ul`
  margin-top: 32px;;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  gap: 8px 32px;
  padding: 0;
  margin-bottom: 0;
`;

export const StyledSkillsItem = styled.li`
  color: ${({ theme }) => theme.colors.site.text};
  font-size: 18px;
`;

export const Dot = styled(Ellipse)`
  margin-right: 16px;
`;

export const StyledSkills = styled.section`
  margin-top: 73px;
  box-shadow: rgba(9, 10, 51, 0.02) 0px -2px 50px, rgba(9, 10, 51, 0.03) 0px 16px 58px;
  padding: 32px;
  max-width: 1216px;
  background: ${({ theme }) => theme.colors.boxBackground};
  transition: background 0.7s;
`;

export const StyledSkillsHeader = styled.h2`
  font-size: 30px;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
  padding-bottom: 13px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;