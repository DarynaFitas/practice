import React, { useState } from 'react';
import MovieList from '../components/MovieList';

const Home = ({ onAddFavorite, favorites }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search for a movie..." value={query} onChange={handleSearch} />
      <MovieList query={query} onAddFavorite={onAddFavorite} favorites={favorites} />
    </div>
  );
};

export default Home;
