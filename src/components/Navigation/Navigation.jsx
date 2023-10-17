
import { Header, HeaderList, HeaderLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Header>
      <HeaderList>
        <li>
          <HeaderLink to="/">Home</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/tweets">Tweets</HeaderLink>
        </li>
      </HeaderList>
    </Header>
  );
};
