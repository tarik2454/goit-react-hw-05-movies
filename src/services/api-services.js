import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: '1013c52116bedf0103542a409c4e960e',
  language: 'en-US',
  include_adult: false,
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?${searchParams}`);

  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?${searchParams}`);

  return data;
};

export const getCastMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits?${searchParams}`);

  return data.cast;
};

export const getReviewsMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews?${searchParams}`);

  return data.results;
};
