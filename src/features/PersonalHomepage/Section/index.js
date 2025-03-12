import {
  StyledSkills,
  StyledSkillsHeader,
  StyledSkillsList,
  StyledSkillsItem,
  Dot
} from "./styled";

export const Section = ({ title, skills }) => {

  return (
    <StyledSkills>
      <StyledSkillsHeader>
        {title}
      </StyledSkillsHeader>
      <StyledSkillsList>
        {skills.map(skill => (
          <StyledSkillsItem>
            <Dot />
            {skill}
          </StyledSkillsItem>
        ))}
      </StyledSkillsList>
    </StyledSkills>
  )
};