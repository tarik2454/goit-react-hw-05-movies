import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'services/api-services';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviewsMovie() {
      try {
        const data = await getReviewsMovie(movieId);
        setReviews(data);
      } catch (error) {
        console.warn(error.message);
      }
    }

    fetchReviewsMovie();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.length === 0 && <p>No reviews</p>}
        {reviews.map(item => (
          <li key={item.id}>
            <p>Author: {item.author}</p>
            <p>Author: {item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
