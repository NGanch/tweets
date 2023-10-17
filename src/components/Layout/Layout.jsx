import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from '../Loader/Loader';

import { Header, HeaderList, HeaderLink } from './Layout.styled';

export const Layout = () => {
  return (
    <main>
      <Header>
        <HeaderList>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/tweets">Tweets</HeaderLink>
          </li>
        </HeaderList>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Header>
    </main>
  );
};
