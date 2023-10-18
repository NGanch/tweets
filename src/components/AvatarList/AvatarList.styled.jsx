import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';

export const StyledSelect = styled(Slide)`
  & .react-slideshow-container .default-nav {
    height: 30px;
    // background: rgba(255,255,255,0.6);
    background: red;
    width: 30px;
    border: 0;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
  `;
export const AvatarsList = styled.ul`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
`;

export const AvatarItem = styled.div`
  width: 380px;
  height: 500px;
  border-radius: 20px;

  background-color: #ebd8ff;
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
`;

export const Avatar = styled.img`
  margin: 0 auto;
  width: 380px;
  height: 400px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const TextContainer = styled.div`
  padding: 10px;
  text-align: center;
`;

export const AvatarTitle = styled.h3`
  margin-bottom: 10px;
  color: #8b8197;

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
`;

export const AvatarText = styled.p`
  overflow: auto;
  text-overflow: ellipsis;
  color: #8b8197;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
`;
