import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Cast } from './components/Cast';
import { Reviews } from './components/Reviews';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Movies = lazy(() => import('./pages/Home/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
