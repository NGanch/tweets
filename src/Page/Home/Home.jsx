import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';

import { HomeSection, SectionTitle } from './Home.styled';

export const Home = () => {
  return (
    <HomeSection>
      {/* <Section> */}

      <Container>
        <SectionTitle>Wellcome</SectionTitle>
      </Container>

      {/* </Section> */}
    </HomeSection>
  );
};
