import React from 'react';

import { Layout } from './components/Layout'; //
import { Movies } from 'pages/Movies';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './components/Cast';
import { Reviews } from './components/Reviews';
import { NotFound } from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
