import { StyledFooterSocials } from "./styled";
import { socials } from "./socials";
import { StyledSocialItem } from "./styled";
import { StyledLink } from "../styled";

export const SocialIcon = () => (
  <StyledFooterSocials>
    {socials.map(({ name, url, Icon }) => (
      <StyledSocialItem key={name}>
        <StyledLink href={url} target="_blank" rel="noreferrer">
          <Icon />
        </StyledLink>
      </StyledSocialItem>
    ))}
  </StyledFooterSocials>
);