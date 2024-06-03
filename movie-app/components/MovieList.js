import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from './MovieCard';
import { getPopularMovies, searchMovies, getGenres } from '../services/movieService';

const MovieList = ({ query, onAddFavorite, favorites }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then(data => setGenres(data.genres));
  }, []);

  useEffect(() => {
    if (query) {
      searchMovies(query, page).then(data => {
        setMovies(data.results);
        setHasMore(data.page < data.total_pages);
      });
    } else {
      getPopularMovies(page).then(data => {
        setMovies(prevMovies => [...prevMovies, ...data.results]);
        setHasMore(data.page < data.total_pages);
      });
    }
  }, [query, page]);

  const fetchMoreMovies = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchMoreMovies}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          genres={genres}
          onAddFavorite={onAddFavorite}
          isFavorite={favorites.some(fav => fav.id === movie.id)}
        />
      ))}
    </InfiniteScroll>
  );
};

export default MovieList;
