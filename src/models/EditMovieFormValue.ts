import { Genre } from './Genre';

export type EditMovieFormValue = {
  title: string;
  vote_average: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: Genre[];
  runtime: string;
};
