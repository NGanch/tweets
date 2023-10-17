import styled from 'styled-components';

export const TweetList = styled.ul`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TweetItem = styled.li`
  width: 380px;
  border-radius: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
`;
export const TweetLogo = styled.img`
  padding-top: 20px;
  padding-left: 20px;
  width: 76px;
  height: 22px;
`;
export const TweetPic = styled.img`
  width: 308px;
  margin-left: 36px;
  margin-right: 36px;
  margin-bottom: 18px;
`;
export const TweetDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

export const BorderAvatar = styled.div`
  width: 62px;
  margin: 0 auto;
  background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 50%;
  border: solid 8px #ebd8ff;
`;

export const Avatar = styled.img`
  width: 62px;
  border-radius: 50%;
  margin: 0 auto;
`;
export const TextContainer = styled.div`
  text-align: center;
`;

export const TweetP = styled.p`
  // margin-bottom: 16px;
  color: #ebd8ff;

  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BoxForButton = styled.div`
  margin-top: 10px;
  text-align: center;
  margin-bottom: 36px;
`;

export const TweetButton = styled.button`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  color: #373737;

  padding: 14px 28px;
  width: 196px;
  border-radius: 10.311px;
  border-color: transparent;
  background-color: #ebd8ff;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10.31px;
`;
