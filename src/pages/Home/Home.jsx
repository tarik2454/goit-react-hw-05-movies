import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api-services';
import { StyledContainer, StyledSection } from 'styles/GlobalStyle';
import { StyledListItem, StyledList, StyledImage } from './Home';
import { StyledLink, StyledPageTitle } from '../../styles/GlobalStyle';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.warn(error.message);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <StyledSection>
      <StyledContainer>
        <StyledPageTitle>Trending movies</StyledPageTitle>
        <StyledList>
          {movies.map(movie => (
            <StyledListItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`}>
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

export default Home;
