
import { useState, useEffect } from 'react';

import {
  TweetList,
  TweetItem,
  TweetLogo,
  TweetPic,
  TweetDiv,
  BorderAvatar,
  Avatar,
  TextContainer,
  TweetP,
  BoxForButton,
  TweetButton,
} from './TweetsList.styled';

import picture from '../../image/picture2.png';
import logo from '../../image/Logo.png';
import { updateFollowers } from '../../Service/API';

export const TweetsList = ({ tweets }) => {
  const [followingStatus, setFollowingStatus] = useState({});
  const [followersCount, setFollowersCount] = useState({});

  const saveFollowingStatusToLocalStorage = status => {
    localStorage.setItem('followingStatus', JSON.stringify(status));
  };

  const handleFollowClick = async (userId, isFollowing) => {
    try {
      const updatedUser = await updateFollowers(userId, isFollowing ? -1 : 1);
      setFollowingStatus(prevStatus => {
        const newStatus = { ...prevStatus };
        newStatus[userId] = !isFollowing;
        saveFollowingStatusToLocalStorage(newStatus);

        const newFollowersCount = { ...followersCount };
        newFollowersCount[userId] = updatedUser.followers;
        setFollowersCount(newFollowersCount);

        return newStatus;
      });
    } catch (error) {
      console.error(
        'Помилка при виконанні запиту на оновлення користувача:',
        error
      );
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem('followingStatus');
    if (storedData) {
      setFollowingStatus(JSON.parse(storedData));
    }
  }, []);

  return (
    <TweetList>
      {tweets.map(({ id, avatar, tweets, followers }) => {
        return (
          <TweetItem key={id}>
            <TweetLogo src={logo} />
            <TweetPic src={picture} />
            <TweetDiv>
              <BorderAvatar>
                <Avatar src={avatar} />
              </BorderAvatar>
              <TextContainer>
                <TweetP>{tweets} Tweets</TweetP>
                <TweetP>{followersCount[id] || followers} Followers</TweetP>
              </TextContainer>

              <BoxForButton>
                <TweetButton
                  type="button"
                  onClick={() => handleFollowClick(id, followingStatus[id])}
                  style={{
                    backgroundColor: followingStatus[id]
                      ? '#5CD3A8'
                      : '#EBD8FF',
                    color: followingStatus[id] ? '#373737' : '#373737',
                  }}
                >
                  {/* {buttonText} */}
                  {followingStatus[id] ? 'Following' : 'Follow'}
                </TweetButton>
              </BoxForButton>
            </TweetDiv>
          </TweetItem>
        );
      })}
    </TweetList>
  );
};
