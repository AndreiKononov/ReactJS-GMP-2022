import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '../Dropdown/Dropdown';
import { useState } from 'react';
import { Movie } from '../../models/Movie';
import { Modal } from '../Modal/Modal';
import { DeleteMovieConfirm } from '../DeleteMovieConfirm/DeleteMovieConfirm';
import { EditMovieForm } from '../EditMovieForm/EditMovieForm';
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
  const { title, poster_path, release_date, genres } = movie;
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState<Movie | null>(null);
  const [movieToEdit, setMovieToEdit] = useState<Movie | null>(null);

  function handleEditClicked() {
    setIsContextMenuOpen(false);
    setMovieToEdit(movie);
  }

  function handleDeleteClicked() {
    setIsContextMenuOpen(false);
    setMovieToDelete(movie);
  }

  function handleMovieSelect() {
    console.log('movie selected');
  }

  function handleMovieDelete() {
    setMovieToDelete(null);
    alert('Delete movie: ' + movieToDelete!.id);
  }

  function handleMovieEdit(formValue: Partial<Movie>) {
    console.log(formValue);
  }

  const deleteMovieModal = movieToDelete ? (
    <Modal title="Delete movie" handleClose={() => setMovieToDelete(null)}>
      <DeleteMovieConfirm handleConfirm={handleMovieDelete} />
    </Modal>
  ) : null;

  const editMovieModal = movieToEdit ? (
    <Modal title="Add Movie" handleClose={() => setMovieToEdit(null)}>
      <EditMovieForm movie={movieToEdit} onSubmit={handleMovieEdit} />
    </Modal>
  ) : null;

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
            handleSelect={(itemId) => (itemId === 1 ? handleEditClicked() : handleDeleteClicked())}
            handleClose={() => setIsContextMenuOpen(false)}
          />
        )}
      </div>

      {deleteMovieModal}
      {editMovieModal}
    </div>
  );
}
