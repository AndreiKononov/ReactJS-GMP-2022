import { Genre } from './Genre';
import { Movie } from './Movie';

export type EditMovieFormValue = Omit<Partial<Movie>, 'genres'> & { genres: Genre[] };
