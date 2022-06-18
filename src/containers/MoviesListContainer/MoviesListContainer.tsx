import { useContext } from 'react';
import { FetchedMoviesContext } from '../../App';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export function MoviesListContainer() {
  const [{ fetchedMovies, isError, isLoading }] = useContext(FetchedMoviesContext);

  const content = isError ? (
    <h1>Fetching Error!</h1>
  ) : (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={fetchedMovies}></MoviesList>
    </ErrorBoundary>
  );

  return isLoading ? <h2>Loading...</h2> : content;
}
