import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '../Dropdown/Dropdown';
import { useState } from 'react';
import { Movie } from '../../models/Movie';
import './MovieListCard.scss';


interface MoviesListCardProps {
  movie: Movie;
}

const dropdownItems = [
  {
    id: 1,
    title: 'Edit',
  },
  {
    id: 2,
    title: 'Delete',
  },
];

export function MoviesListCard({ movie }: MoviesListCardProps) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  function handleEdit() {
    setIsContextMenuOpen(false);

    console.log('edit selected');
  }

  function handleDelete() {
    setIsContextMenuOpen(false);

    console.log('delete selected');
  }

  function handleMovieSelect() {
    console.log('movie selected');
  }

  const { title, poster_path, release_date, genres } = movie;

  return (
    <div className="movies-list-card">
      <img className="movies-list-card-image" alt={`${title} poster`} src={poster_path} onClick={handleMovieSelect} />
      <div className="movies-list-card-header">
        <span className="movies-list-card-title" onClick={handleMovieSelect}>
          {title}
        </span>
        <span className="movies-list-card-year">{release_date.slice(0, 4)}</span>
      </div>
      <div className="movies-list-card-genres">
        <span>{genres.join(', ')}</span>
      </div>

      <button onClick={() => setIsContextMenuOpen(true)} className="context-menu-btn">
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>

      <div className="movies-list-card-dropdown-wrapper">
        {isContextMenuOpen && (
          <Dropdown
            items={dropdownItems}
            handleSelect={(itemId) => (itemId === 1 ? handleEdit() : handleDelete())}
            handleClose={() => setIsContextMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
