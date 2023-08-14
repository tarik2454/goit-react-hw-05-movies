import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import {
  StyledButton,
  StyledContainer,
  StyledLink,
  StyledSection,
} from 'styles/GlobalStyle';
import { StyledForm, StyledInput, StyledList } from './Movies.styled';
// import { getSearchMovies } from 'services/api-services';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [value, setValue] = useState(query);
  const location = useLocation();

  useEffect(() => {
    async function fetchSearchMovies() {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=1013c52116bedf0103542a409c4e960e`
        );

        setMovies(data.results);
      } catch (error) {
        console.warn(error);
      }
    }

    fetchSearchMovies();
  }, [query]);

  const handleSearch = event => {
    event.preventDefault();
    setSearchParams(value ? { query: value } : {}); //
  };

  return (
    <StyledSection>
      <StyledContainer>
        <StyledForm onSubmit={handleSearch}>
          <StyledInput
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
            placeholder="Enter movie name..."
          />
          <StyledButton>Search</StyledButton>
        </StyledForm>
        <StyledList>
          {movies.map(movie => (
            <li key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </li>
          ))}
        </StyledList>
      </StyledContainer>
    </StyledSection>
  );
};

export default Movies;
