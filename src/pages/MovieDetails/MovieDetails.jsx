import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api-services';
import {
  StyledButton,
  StyledContainer,
  StyledPageTitle,
  StyledSection,
} from 'styles/GlobalStyle';
import {
  StyledCard,
  StyledCardDescription,
  StyledCardTitle,
  StyledImage,
  StyledInfoItem,
  StyledInfoList,
  StyledInner,
  StyledNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.warn(error.message);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const backLink = useRef(location.state?.from ?? '/');

  return (
    <StyledSection>
      <StyledContainer>
        <StyledButton
          $padding="7px 10px"
          $margin="0 0 15px 0"
          onClick={() => navigate(backLink.current)}
        >
          Go back
        </StyledButton>
        {/* <Link to={backLink}>Go back</Link> */}

        <StyledPageTitle>{movie.title}</StyledPageTitle>
        <StyledCard>
          <StyledImage src={imageUrl} alt="" />
          <StyledInner>
            <StyledCardTitle>Overview</StyledCardTitle>
            <StyledCardDescription>{movie.overview}</StyledCardDescription>
            <StyledCardTitle>Genres</StyledCardTitle>
            <StyledCardDescription>
              {movie.genres
                ? movie.genres.map(item => item.name).join(', ')
                : ''}
            </StyledCardDescription>
          </StyledInner>
        </StyledCard>

        <hr />

        <StyledCardTitle>Additional information</StyledCardTitle>
        <StyledInfoList>
          <StyledInfoItem>
            <StyledNavLink to={'cast'}>Cast</StyledNavLink>
          </StyledInfoItem>
          <StyledInfoItem>
            <StyledNavLink to={'reviews'}>Reviews</StyledNavLink>
          </StyledInfoItem>
        </StyledInfoList>

        <Outlet />
      </StyledContainer>
    </StyledSection>
  );
};

export default MovieDetails;
