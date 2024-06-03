import React from 'react';
import MovieCard from '../components/MovieCard';

const Favorites = ({ favorites, onAddFavorite }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          genres={movie.genres}
          onAddFavorite={onAddFavorite}
          isFavorite={true}
        />
      ))}
    </div>
  );
};

export default Favorites;
