// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from '../components/Layout/Layout';

import { Home } from '../Page/Home/Home';

import { Tweets } from '../Page/Tweets/Tweets';

import { NotFound } from '../Page/NotFound/NotFound';
// const Home = lazy(() => import('../Page/Home/Home'));
// const Tweets = lazy(() => import('../Page/Tweets/Tweets'));
// const NotFound = lazy(() => import('../Page/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}

