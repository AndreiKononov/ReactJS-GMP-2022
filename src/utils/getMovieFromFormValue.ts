import { EditMovieFormValue } from '../models/EditMovieFormValue';
import { Movie } from '../models/Movie';

export const getMovieFromFormValue = (movie: EditMovieFormValue): Partial<Movie> => {
  return {
    ...movie,
    genres: movie.genres.map((genre) => genre.value),
    runtime: +movie.runtime,
    vote_average: +movie.vote_average,
  };
};
