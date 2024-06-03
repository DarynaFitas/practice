import axios from 'axios';

const API_KEY = '5020d2a7cd081c7f1e37e8a24e4e3ff3'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (endpoint, params = {}) => {
  const response = await axios.get(`${BASE_URL}${endpoint}`, {
    params: { api_key: API_KEY, ...params },
  });
  return response.data;
};

export const getPopularMovies = (page) => fetchMovies('/movie/popular', { page });
export const searchMovies = (query, page) => fetchMovies('/search/movie', { query, page });
export const getMovieDetails = (id) => fetchMovies(`/movie/${id}`);
export const getSimilarMovies = (id) => fetchMovies(`/movie/${id}/similar`);
export const getGenres = () => fetchMovies('/genre/movie/list');