import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../components/Home/Home'));
const Catalog = lazy(() => import('../components/Catalog/Catalog'));
const Favorites = lazy(() => import('../components/Favorites/Favorites'));
const NotFound = lazy(() => import('../components/NotFound/NotFound'));
const SharedLayout = lazy(() =>
  import('../components/SharedLayout/SharedLayout')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} redirectTo="/" />
        <Route path="favorites" element={<Favorites />} redirectTo="/" />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
