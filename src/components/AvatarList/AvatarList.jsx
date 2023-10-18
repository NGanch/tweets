
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import {
//   StyledSelect,
//   AvatarsList,
  AvatarItem,
  Avatar,
  TextContainer,
  AvatarTitle,
  AvatarText,
} from './AvatarList.styled';

export const AvatarList = ({ tweets }) => {
  const spanStyle = {
    margin: '0',
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px',
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    vertical: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ ...spanStyle }}>
      <Slide {...settings}>
        {tweets.map(({ id, image, title, text }) => (
          <div style={{ ...divStyle }}>
            <AvatarItem key={id}>
              <Avatar src={image} alt={title} />
              <TextContainer>
                <AvatarTitle>{title}</AvatarTitle>

                <AvatarText>{text}</AvatarText>
              </TextContainer>
            </AvatarItem>
          </div>
        ))}
      </Slide>
    </div>
  );
};
