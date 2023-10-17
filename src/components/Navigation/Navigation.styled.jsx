import styled from 'styled-components';
import { NavLink } from "react-router-dom";



export const Header = styled.header`
height: 60px;

background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);

box-shadow: 0px 5px 4px rgba(46, 47, 66, 0.08),
0px 4px 4px rgba(46, 47, 66, 0.16), 0px 4px 10px rgba(46, 47, 66, 0.08),
0px 4px 10px rgba(46, 47, 66, 0.08);
`;

export const HeaderList = styled.ul`
display: flex;
gap: 20px;
padding: 20px;
`;

export const HeaderLink = styled(NavLink)`
// padding: 20px;
color: #EBD8FF;
text-decoration: none;
font-family: Montserrat;
font-size: 20px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

// &:active {
//     border: 1px solid red;
// }

padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: white;
font-weight: 500;

&.active {
  color: #373737;
  background-color:  #EBD8FF;
}
`;