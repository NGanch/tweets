import axios from 'axios';

const baseURL = 'https://6526d657917d673fd76d1389.mockapi.io';

//=========================Запит списку фільмів HOME=========================

export async function fetchTweets(page, tweetsPerPage ) {
  try {
    const results = await axios.get(`${baseURL}/tweets`, {
      params: {
        per_page: tweetsPerPage,
        page: page,
      },
    });
    const tweets = results.data;
  return tweets;
  } catch (error) {
    throw new Error(`Request error: ${error.message}`);
  }
}

//=========================Запит списку фільмів MOVIE=========================
export const updateFollowers = async (userId, increment) => {
  try {
    const response = await axios.get(`${baseURL}/tweets/${userId}`);
    if (response.status === 200) {
      const user = response.data;

      user.followers += increment;

      const updateResponse = await axios.put(
        `${baseURL}/tweets/${userId}`,
        user
      );

      if (updateResponse.status === 200) {
        return user;
      } else {
        throw new Error('Failed to update user data');
      }
    } else {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    throw new Error(`Request error: ${error.message}`);
  }
};
