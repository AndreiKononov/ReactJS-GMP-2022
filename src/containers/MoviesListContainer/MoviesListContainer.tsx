import { useEffect } from 'react';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMovies } from '../../store/moviesReducer';
import { useMovies } from '../../hooks/useMovies';

export function MoviesListContainer() {
  const { movies, isLoading, isError, queryParams } = useMovies();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies(queryParams));
  }, [queryParams, dispatch]);

  const content = isError ? (
    <h1>Fetching Error!</h1>
  ) : (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={movies}></MoviesList>
    </ErrorBoundary>
  );

  return isLoading ? <h2>Loading...</h2> : content;
}
