import {
  StyledFooterWrapper,
  StyledFooterEmail,
  StyledFooterDescription,
} from "./styled";
import { StyledCaption } from "../Header/Description/styled";
import { SocialIcon } from "./SocialIcon";
import { StyledLink } from "./styled";

export const Footer = ({ email }) => {

  return (
    <StyledFooterWrapper>
      <StyledCaption>
        LET'S TALK!
      </StyledCaption>
      <StyledFooterEmail>
        <StyledLink href={`mailto:${email}`}>
          kuczynski.damian1603@gmail.com
        </StyledLink>
      </StyledFooterEmail>
      <StyledFooterDescription>
        I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me
      </StyledFooterDescription>
      <SocialIcon />
    </StyledFooterWrapper>
  )
};