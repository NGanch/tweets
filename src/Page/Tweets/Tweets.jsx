import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';

import { fetchTweets } from '../../Service/API';
// import { useTweets } from '../../hooks/useTweets';

// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';

import { TweetsList } from '../../components/TweetsList/TweetsList';
import { Section } from '../../components/Section/Section';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import { BackLink } from '../../components/BackLink/BackLink';
import { Loader } from '../../components/Loader/Loader';

import { DIV } from './Tweets.styled';

export const Tweets = () => {
  const location = useLocation();
  const goBackLink = location?.state?.from ?? routes.HOME;

  const [page, setPage] = useState(1);
  const tweetsPerPage = 3;
  const [isShowButton, setIsShowButton] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [storiesToShow, setStoriesToShow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedTweets = await fetchTweets(page, tweetsPerPage);

        const toShow = fetchedTweets.slice(
          storiesToShow.length,
          storiesToShow.length + 3
        );
        setStoriesToShow([...storiesToShow, ...toShow]);

        setIsShowButton(page < Math.ceil(fetchedTweets.length / tweetsPerPage));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, storiesToShow]);


  const handleShowMorePosts = () => {
    setPage(prevState => prevState + 1);
  };

  //=============================================

  return (
    <Section>
      {/* {isLoading && <Loader />} */}
      {/* {error && <p style={{color: 'black'}}>Sorry. There are no muvies ... 😭</p>} */}

      <Container>
        <DIV>
          <BackLink to={goBackLink}>Back to Home</BackLink>
          <TweetsList tweets={storiesToShow} />
          {isShowButton && (
            <Button onClick={handleShowMorePosts}>Load more</Button>
          )}
        </DIV>
      </Container>
    </Section>
  );
};
