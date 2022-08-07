import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '../Dropdown/Dropdown';
import { Movie } from '../../models/Movie';
import DeleteMovieConfirm from '../DeleteMovieConfirm/DeleteMovieConfirm';
import EditMovieFormik from '../EditMovieFormik/EditMovieFormik';
import { getYear } from '../../utils/getYearFromDate';
import { joinGenres } from '../../utils/joinGenresWithComma';
import { NextImageCustom } from '../NextImageCustom/NextImageCustom';
import styles from './MovieListCard.module.scss';


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
  const router = useRouter();

  const handleEditClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToEdit(true);
  }, []);

  const handleDeleteClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToDelete(true);
  }, []);

  const handleMovieSelect = useCallback(() => {
    router.query.movie = movie.id.toString();
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { shallow: true, scroll: true }
    );
  }, [movie.id]);

  const closeEditMovieModal = () => setMovieToEdit(false);
  const closeDeleteMovieModal = () => setMovieToDelete(false);

  const Modal = dynamic(() => import('../../components/Modal/Modal'), { ssr: false });

  const deleteMovieModal = movieToDelete ? (
    <Modal title="Delete movie" handleClose={closeDeleteMovieModal}>
      <DeleteMovieConfirm movieId={movie.id} handleClose={closeDeleteMovieModal} />
    </Modal>
  ) : null;

  const editMovieModal = movieToEdit ? (
    <Modal title="Edit Movie" handleClose={closeEditMovieModal}>
      <EditMovieFormik movie={movie} handleClose={closeEditMovieModal} />
    </Modal>
  ) : null;

  return (
    <div className={styles.moviesListCard}>
      <NextImageCustom
        className={styles.moviesListCardImage}
        alt={`${title} poster`}
        src={poster_path}
        width={300}
        height={500}
        onClick={handleMovieSelect}
      />
      <div className={styles.moviesListCardHeader}>
        <span className={styles.moviesListCardTitle} onClick={handleMovieSelect}>
          {title}
        </span>
        <span className={styles.moviesListCardYear}>{getYear(release_date)}</span>
      </div>
      <div className={styles.moviesListCardGenres}>
        <span>{joinGenres(genres)}</span>
      </div>
      <button title="context-menu-button" onClick={() => setIsContextMenuOpen(true)} className={styles.contextMenuBtn}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>
      <div className={styles.moviesListCardDropdownWrapper}>
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

export default React.memo(MoviesListCardComponent);
