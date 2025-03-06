import {
  StyledProjectsList,
  StyledProjectsListItem,
  StyledProjectsListItemDescription,
  StyledProjectsListItemTitle,
  StyledProjectsListLink,

} from "./styled"

export const Repositories = ({ repositories }) => (

  <StyledProjectsList>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
      <StyledProjectsListItem key={id} >
        <StyledProjectsListItemTitle>
          {name}
        </StyledProjectsListItemTitle>
        <StyledProjectsListItemDescription>
          {description}
        </StyledProjectsListItemDescription>
        {!!homepage && (
          <StyledProjectsListLink>
            <a target="_blank" rel="noreferrer" href={homepage}>{homepage}</a>
          </StyledProjectsListLink>
        )}
        <a target="_blank" rel="noreferrer" href={html_url}>{html_url}</a>
      </StyledProjectsListItem>
    ))
    }
  </StyledProjectsList>
)
