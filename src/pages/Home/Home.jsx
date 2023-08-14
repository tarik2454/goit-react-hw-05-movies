import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api-services';
import { StyledContainer, StyledSection } from 'styles/GlobalStyle';
import { StyledListItem, StyledTitle, StyledList } from './Home';
import { StyledLink } from '../../styles/GlobalStyle';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.warn('Error fetching data:', error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>Trending movies</StyledTitle>
        <StyledList>
          {movies.map(movie => (
            <StyledListItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledContainer>
    </StyledSection>
  );
};

export default Home;
