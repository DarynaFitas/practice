import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getSimilarMovies } from '../services/movieService';
import MovieCard from './MovieCard';

const MovieDetail = ({ onAddFavorite, favorites }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMovieDetails(id).then(data => {
      setMovie(data);
      setGenres(data.genres);
    });
    getSimilarMovies(id).then(data => setSimilarMovies(data.results));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <div>
        <h3>Similar Movies</h3>
        {similarMovies.map(similarMovie => (
          <MovieCard
            key={similarMovie.id}
            movie={similarMovie}
            genres={genres}
            onAddFavorite={onAddFavorite}
            isFavorite={favorites.some(fav => fav.id === similarMovie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
