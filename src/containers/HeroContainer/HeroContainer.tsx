import { useState } from 'react';
import { AddMovieBtn } from '../../components/AddMovieBtn/AddMovieBtn';
import { EditMovieFormik } from '../../components/EditMovieFormik/EditMovieFormik';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Logo } from '../../components/Logo/Logo';
import { Modal } from '../../components/Modal/Modal';
import { MovieCardSelected } from '../../components/MovieCardSelected/MovieCardSelected';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useMovies } from '../../hooks/useMovies';

export function HeroContainer() {
  const { selectedMovie } = useMovies();

  const [shouldShowAddMovieModal, setShouldShowAddMovieModal] = useState(false);

  const closeModal = () => setShouldShowAddMovieModal(false);

  const modal = shouldShowAddMovieModal ? (
    <Modal title="Add Movie" handleClose={closeModal}>
      <EditMovieFormik movie={null} handleClose={closeModal}  />
    </Modal>
  ) : null;

  const heroElement = !selectedMovie ? (
    <Hero>
      <Header>
        <Logo />
        <AddMovieBtn handleClick={() => setShouldShowAddMovieModal(true)} />
      </Header>
      <SearchForm />
      {modal}
    </Hero>
  ) : (
    <MovieCardSelected movie={selectedMovie} />
  );

  return heroElement;
}
