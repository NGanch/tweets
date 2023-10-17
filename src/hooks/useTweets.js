
import {useState, useEffect} from 'react';
import {fetchTweets} from '../Service/API';

export const useTweets = () => {
    const [tweets, setTweets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const fetchedTweets = await fetchTweets();
                console.log(fetchedTweets);
                setTweets(fetchedTweets);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData()
    }, []);
    return {tweets, isLoading, error};
};