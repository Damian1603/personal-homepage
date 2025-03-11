import styled from "styled-components";

export const StyledProjectsListLink = styled.p`
  margin-top: 24px;
  margin-bottom: 0;
`;

export const StyledProjectsList = styled.ul`
  max-width: 1216px;
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
`;

export const StyledProjectsListItem = styled.li`
  height: 322px;
  padding: 50px;
  max-width: 592px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: border-color 0.3s ease-in-out;
  border-radius: 4px;

&:hover{
  border-color: ${({ theme }) => theme.colors.tile.borderHover};
}
`;

export const StyledProjectsListItemTitle = styled.h3`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledProjectsListItemDescription = styled.p`
  font-size: 18px;
  margin-bottom: 0;
`;

export const LinksRow = styled.div`
display: grid;
grid-template-columns: 4em 1fr;
`;