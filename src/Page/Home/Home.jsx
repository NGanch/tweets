import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';
import { AvatarList } from '../../components/AvatarList/AvatarList';


import tweets from './popularTweets.json';

import { SectionTitle } from './Home.styled';

export const Home = () => {

  const total = tweets.length;
  console.log(tweets)



  return (
    <Section>
      <Container>
        <SectionTitle>Popular tweets</SectionTitle>
        {total > 0 && <AvatarList tweets={tweets} />}

      </Container>
    </Section>
  );
};
