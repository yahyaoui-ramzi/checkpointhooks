import React from 'react';
import Rating from 'react-rating';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />

      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <p><Rating value={movie.rating}/></p>
      <p>Genre : {movie.genre}</p>
      <button>
      <a href={movie.trailerURL} target="_blank" rel="noopener noreferrer">
        Watch
      </a>
      </button>
    </div>
  );
};

export default MovieCard;
