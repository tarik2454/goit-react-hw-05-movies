import { useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'services/api-services';
import { StyledContainer, StyledSection } from 'styles/GlobalStyle';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.warn(error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const backLink = useRef(location.state?.from ?? '/');

  return (
    <StyledSection>
      <StyledContainer>
        <button onClick={() => navigate(backLink.current)}>Go back</button>
        {/* <Link to={backLink}>Go back</Link> */}
        <h1>{movie.title}</h1>
        <img src={imageUrl} alt="" />
        <div>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>
            {movie.genres ? movie.genres.map(item => item.name).join(', ') : ''}
          </p>

          <hr />

          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to={'cast'}>Cast</Link>
            </li>
            <li>
              <Link to={'reviews'}>Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </StyledContainer>
    </StyledSection>
  );
};

export default MovieDetails;
