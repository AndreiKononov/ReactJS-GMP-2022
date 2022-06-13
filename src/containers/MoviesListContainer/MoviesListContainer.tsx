import { useState } from 'react';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { movies } from '../../mocks/movies';

export function MoviesListContainer() {
  const [moviesToDisplay, setMovies] = useState(movies);

  return (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={moviesToDisplay}></MoviesList>
    </ErrorBoundary>
  );
}
