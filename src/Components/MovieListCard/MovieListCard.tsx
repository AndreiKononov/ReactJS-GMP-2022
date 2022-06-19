import React, { useCallback, useContext, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '../Dropdown/Dropdown';
import { Movie } from '../../models/Movie';
import { Modal } from '../Modal/Modal';
import { DeleteMovieConfirm } from '../DeleteMovieConfirm/DeleteMovieConfirm';
import { EditMovieForm } from '../EditMovieForm/EditMovieForm';
import { SelectedMovieContext } from '../../contexts/SelectedMovieContext';
import { getYear } from '../../utils/getYearFromDate';
import { joinGenres } from '../../utils/joinGenresWithComma';
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

export function MoviesListCardComponent({ movie }: MoviesListCardProps) {
  const { title, poster_path, release_date, genres } = movie;
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState<Movie | null>(null);
  const [movieToEdit, setMovieToEdit] = useState<Movie | null>(null);

  const { setSelectedMovie } = useContext(SelectedMovieContext);

  const handleEditClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToEdit(movie);
  }, [movie]);

  const handleDeleteClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToDelete(movie);
  }, [movie]);

  const handleMovieSelect = useCallback(() => {
    setSelectedMovie(movie);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [movie, setSelectedMovie]);

  const handleMovieDelete = useCallback(() => {
    alert('Delete movie: ' + movieToDelete!.id);
    setMovieToDelete(null);
  }, [movieToDelete]);

  const handleMovieEdit = useCallback((formValue: Partial<Movie>) => {
    console.log(formValue);
  }, []);

  const closeEditMovieModal = () => setMovieToEdit(null);
  const closeDeleteMovieModal = () => setMovieToDelete(null);

  const memoizedYear = useMemo(() => getYear(release_date), [release_date]);
  const memoizedGenres = useMemo(() => joinGenres(genres), [genres]);

  const deleteMovieModal = movieToDelete ? (
    <Modal title="Delete movie" handleClose={closeDeleteMovieModal}>
      <DeleteMovieConfirm handleConfirm={handleMovieDelete} />
    </Modal>
  ) : null;

  const editMovieModal = movieToEdit ? (
    <Modal title="Add Movie" handleClose={closeEditMovieModal}>
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
        <span className="movies-list-card-year">{memoizedYear}</span>
      </div>
      <div className="movies-list-card-genres">
        <span>{memoizedGenres}</span>
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

export const MoviesListCard = React.memo(MoviesListCardComponent);
