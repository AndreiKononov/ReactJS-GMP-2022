import { RootState } from '../store';
import { useAppSelector } from './useAppSelector';

export const useMovies = () => {
  const moviesState = useAppSelector((state: RootState) => state.movies);
  return moviesState;
};
