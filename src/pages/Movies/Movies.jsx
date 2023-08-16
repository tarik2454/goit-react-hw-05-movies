import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import {
  StyledButton,
  StyledContainer,
  StyledLink,
  StyledSection,
} from 'styles/GlobalStyle';
import {
  StyledForm,
  StyledInput,
  StyledList,
  StyledListItem,
} from './Movies.styled';
import { StyledImage } from 'pages/Movies/Movies.styled';
import { getMovieByName } from 'services/api-services';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [value, setValue] = useState(query);
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    async function fetchMovieByName() {
      try {
        const data = await getMovieByName(query);
        setMovies(data);
      } catch (error) {
        console.warn(error.message);
      }
    }

    fetchMovieByName();
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
            <StyledListItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <StyledImage
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
                <h2>{movie.title}</h2>
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledContainer>
    </StyledSection>
  );
};

export default Movies;
