import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { MoviesListCard } from '../MovieListCard/MovieListCard';
import { Movie } from '../../models/Movie';
import './MoviesList.scss';

interface MoviesListProps {
  movies: Movie[];
}

export function MoviesList({ movies }: MoviesListProps) {
  return (
    <ul className="movies-list">
      {movies.map((movie: Movie) => (
        <li key={movie.id} className="movies-list-item">
          <ErrorBoundary componentName="MoviesListCard">
            <MoviesListCard movie={movie} />
          </ErrorBoundary>
        </li>
      ))}
    </ul>
  );
}
