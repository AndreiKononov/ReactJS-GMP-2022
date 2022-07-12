import { RootState } from '../store';
import { useAppSelector } from './useAppSelector';

export const useSelectedMovie = () => {
  const selectedMovieState = useAppSelector((state: RootState) => state.selectedMovie);
  return selectedMovieState;
};
