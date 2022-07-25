import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useMovies } from '../../hooks/useMovies';

export function MoviesListContainer() {
  const { movies, isLoading, isError } = useMovies();

  const content = isError ? (
    <h1>Fetching Error!</h1>
  ) : (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={movies}></MoviesList>
    </ErrorBoundary>
  );

  return isLoading ? <h2>Loading...</h2> : content;
}
