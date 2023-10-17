// import { HiArrowLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  padding: 15px 30px;
  width: 200px;
  margin: 16px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  color: #ebd8ff;

  padding: 14px 28px;
  width: 196px;
  border-radius: 10.311px;
  border-color: transparent;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10.31px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      {/* <HiArrowLeft size="24" /> */}
      {children}
    </StyledLink>
  );
};
