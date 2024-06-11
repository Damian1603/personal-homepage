import { Header } from "./Header";
import { Section } from "./Section";
import { skillsLearned, skillsWantLearn } from "./skills";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { ThemeButton } from "./Header/ThemeButton";
import { Container } from "./Container";

export const PersonalHomepage = () => (
  <Container>
    <ThemeButton />
    <Header />
    <Section title={"My skillset includes 🛠️"} skills={skillsLearned} />
    <Section title={"What I want to learn next 🚀"} skills={skillsWantLearn} />
    <Portfolio title={"Portfolio"} />
    <Footer />
  </Container>
);