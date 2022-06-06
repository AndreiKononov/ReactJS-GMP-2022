import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../Logo/Logo';
import { transformDuration } from '../../utils/transformDuration';
import { Movie } from '../../models/Movie';
import './MovieCardSelected.scss';

interface MovieCardSelectedProps {
  movie: Movie;
}

export function MovieCardSelected({ movie }: MovieCardSelectedProps) {
  function handleGoToSearch() {
    console.log('go to search');
  }

  function getYear(releaseDate: string): string {
    return releaseDate.slice(0, 4);
  }

  function joinGenres(genres: string[]): string {
    return genres.join(', ');
  }

  const { title, poster_path, vote_average, genres, release_date, runtime, overview } = movie;

  return (
    <div className="movie-card-selected">
      <div className="movie-card-selected-header">
        <Logo />

        <button onClick={handleGoToSearch} className="movie-card-selected-search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="movie-card-selected-body">
        <img className="movie-card-selected-image" alt={`${title} poster`} src={poster_path} />

        <div className="movie-card-selected-content">
          <div className="movie-card-selected-content-header">
            <span className="movie-card-selected-title">{title}</span>
            <span className="movie-card-selected-rating">{vote_average}</span>
          </div>
          <div className="movie-card-selected-genres">
            <span>{joinGenres(genres)}</span>
          </div>
          <div className="movie-card-selected-info">
            <span>{getYear(release_date)}</span>
            <span>{transformDuration(runtime)}</span>
          </div>
          <div className="movie-card-selected-overview">{overview}</div>
        </div>
      </div>
    </div>
  );
}
