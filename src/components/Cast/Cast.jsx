import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/api-services';
import {
  StyledCastImage,
  StyledCastItem,
  StyledCastList,
  StyledCastName,
} from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCastMovie() {
      try {
        const data = await getCastMovie(movieId);
        setCast(data);
      } catch (error) {
        console.warn(error.message);
      }
    }

    fetchCastMovie();
  }, [movieId]);

  return (
    <StyledCastList>
      {cast.map(item => (
        <StyledCastItem key={item.id}>
          {item.profile_path && (
            <StyledCastImage
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt=""
            />
          )}
          <StyledCastName>{item.name}</StyledCastName>
        </StyledCastItem>
      ))}
    </StyledCastList>
  );
};
