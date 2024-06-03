import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MovieCard = ({ movie, genres, onAddFavorite, isFavorite }) => {
  const genreNames = genres.filter(genre => movie.genre_ids.includes(genre.id)).map(genre => genre.name).join(', ');

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h5">{movie.title}</Typography>
        <Typography variant="body2" color="textSecondary">{genreNames}</Typography>
        <IconButton onClick={() => onAddFavorite(movie)}>
          <FavoriteIcon color={isFavorite ? "secondary" : "default"} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
