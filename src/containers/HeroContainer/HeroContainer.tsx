import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AddMovieBtn } from '../../components/AddMovieBtn/AddMovieBtn';
import { EditMovieFormik } from '../../components/EditMovieFormik/EditMovieFormik';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Logo } from '../../components/Logo/Logo';
import { Modal } from '../../components/Modal/Modal';
import { MovieCardSelectedContainer } from '../../components/MovieCardSelectedContainer/MovieCardSelectedContainer';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useSelectedMovie } from '../../hooks/useSelectedMovie';
import { fetchMovieById, resetSelectedMovie } from '../../store/selectedMovieReducer';

export function HeroContainer() {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const selectedMovieId = searchParams.get('movie');

  const { movie: selectedMovie, isLoading: isSelectedMovieLoading, isError: isSelectedMovieError } = useSelectedMovie();

  useEffect(() => {
    if (selectedMovieId) {
      dispatch(fetchMovieById(selectedMovieId));
    } else {
      dispatch(resetSelectedMovie());
    }
  }, [selectedMovieId, dispatch]);

  const [shouldShowAddMovieModal, setShouldShowAddMovieModal] = useState(false);

  const closeModal = () => setShouldShowAddMovieModal(false);

  const modal = shouldShowAddMovieModal ? (
    <Modal title="Add Movie" handleClose={closeModal}>
      <EditMovieFormik movie={null} handleClose={closeModal}  />
    </Modal>
  ) : null;

  const shouldDisplaySelectedMovieCard = selectedMovie || isSelectedMovieLoading || isSelectedMovieError;

  const heroElement = !shouldDisplaySelectedMovieCard ? (
    <Hero>
      <Header>
        <Logo />
        <AddMovieBtn handleClick={() => setShouldShowAddMovieModal(true)} />
      </Header>
      <SearchForm />
      {modal}
    </Hero>
  ) : (
    <MovieCardSelectedContainer movie={selectedMovie} isLoading={isSelectedMovieLoading} isError={isSelectedMovieError} />
  );

  return heroElement;
}
