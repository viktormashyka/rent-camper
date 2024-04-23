import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../components/Home/Home'));
const Catalog = lazy(() => import('../components/Catalog/Catalog'));
const Favorites = lazy(() => import('../components/Favorites/Favorites'));
const SharedLayout = lazy(() =>
  import('../components/SharedLayout/SharedLayout')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
