import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '../Dropdown/Dropdown';
import { Movie } from '../../models/Movie';
import { Modal } from '../Modal/Modal';
import { DeleteMovieConfirm } from '../DeleteMovieConfirm/DeleteMovieConfirm';
import { EditMovieForm } from '../EditMovieForm/EditMovieForm';
import { getYear } from '../../utils/getYearFromDate';
import { joinGenres } from '../../utils/joinGenresWithComma';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { deleteMovieById, fetchMovies, setSelectedMovie } from '../../store/moviesReducer';
import { handleImgOnError } from '../../utils/handleImgOnError';
import { useMovies } from '../../hooks/useMovies';
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
  const [movieToDelete, setMovieToDelete] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(false);

  const { queryParams } = useMovies();
  const dispatch = useAppDispatch();

  const handleEditClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToEdit(true);
  }, []);

  const handleDeleteClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToDelete(true);
  }, []);

  const handleMovieSelect = useCallback(() => {
    dispatch(setSelectedMovie(movie));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [movie, dispatch]);

  const handleMovieDelete = useCallback(async () => {
    try {
      await dispatch(deleteMovieById(movie!.id)).unwrap();

      setMovieToDelete(false);
      dispatch(fetchMovies(queryParams));
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  }, [movieToDelete, dispatch, queryParams]);

  const closeEditMovieModal = () => setMovieToEdit(false);
  const closeDeleteMovieModal = () => setMovieToDelete(false);

  const deleteMovieModal = movieToDelete ? (
    <Modal title="Delete movie" handleClose={closeDeleteMovieModal}>
      <DeleteMovieConfirm handleConfirm={handleMovieDelete} />
    </Modal>
  ) : null;

  const editMovieModal = movieToEdit ? (
    <Modal title="Add Movie" handleClose={closeEditMovieModal}>
      <EditMovieForm movie={movie} handleClose={closeEditMovieModal} />
    </Modal>
  ) : null;

  return (
    <div className="movies-list-card">
      <img
        className="movies-list-card-image"
        alt={`${title} poster`}
        src={poster_path}
        onClick={handleMovieSelect}
        onError={handleImgOnError}
      />
      <div className="movies-list-card-header">
        <span className="movies-list-card-title" onClick={handleMovieSelect}>
          {title}
        </span>
        <span className="movies-list-card-year">{getYear(release_date)}</span>
      </div>
      <div className="movies-list-card-genres">
        <span>{joinGenres(genres)}</span>
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
