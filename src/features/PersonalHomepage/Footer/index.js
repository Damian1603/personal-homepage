import {
  StyledFooterWrapper,
  StyledFooterEmail,
  StyledFooterDescription,
} from "./styled";
import { StyledCaption } from "../Header/Description/styled";
import { SocialIcons } from "./SocialIcons";
import { StyledLink } from "./styled";
import { email } from "../email";

export const Footer = () => {

  return (
    <StyledFooterWrapper>
      <StyledCaption>
        LET'S TALK!
      </StyledCaption>
      <StyledFooterEmail>
        <StyledLink href={`mailto:${email}`}>
          {email}
        </StyledLink>
      </StyledFooterEmail>
      <StyledFooterDescription>
        I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me
      </StyledFooterDescription>
      <SocialIcons />
    </StyledFooterWrapper>
  )
};