import styled from 'styled-components';
import background from '../../image/backgroung.jpg';
export const HomeSection = styled.section`
  // width: 100%;
  margin: 0;
  // padding-top: 80px;
  // padding-bottom: 80px;

  background-image: url(${background});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const SectionTitle = styled.h1`
  padding-top: 320px;

  padding-left: 350px;
  color: #ebd8ff;

  font-family: Montserrat;
  font-size: 80px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
