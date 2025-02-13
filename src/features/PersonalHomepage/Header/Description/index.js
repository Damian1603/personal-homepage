import {
  StyledDescription,
  StyledCaption,
  StyledFullName,
  StyledParagraphDescription,
  StyledButton,
  MailIcon
} from "./styled";
import icon from "../../../../images/Message.svg";
import { email } from "../../email";

export const Description = () => (
  <StyledDescription>
    <StyledCaption>THIS IS</StyledCaption>
    <StyledFullName>Damian Kuczyński</StyledFullName>
    <StyledParagraphDescription>
      👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.
    </StyledParagraphDescription>
    <StyledButton href={`mailto:${email}`} title={email}>
      <MailIcon src={icon} />
      Hire me
    </StyledButton>
  </StyledDescription>
);