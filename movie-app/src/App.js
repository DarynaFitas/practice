import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleAddFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some(fav => fav.id === movie.id)) {
        return prevFavorites.filter(fav => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home onAddFavorite={handleAddFavorite} favorites={favorites} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} onAddFavorite={handleAddFavorite} />} />
        <Route path="/movie/:id" element={<MovieDetail onAddFavorite={handleAddFavorite} favorites={favorites} />} />
      </Routes>
    </Router>
  );
};

export default App;
