import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/api-services';

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
    <>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            {item.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt=""
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
