import { Movie } from './Movie';

export interface MovieResponse {
  data: Movie[];
  total: number;
  offset: number;
  limit: number;
}
