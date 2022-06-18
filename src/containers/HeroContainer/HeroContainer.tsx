import { useContext, useState } from 'react';
import { SelectedMovieContext } from '../../App';
import { AddMovieBtn } from '../../components/AddMovieBtn/AddMovieBtn';
import { EditMovieForm } from '../../components/EditMovieForm/EditMovieForm';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Logo } from '../../components/Logo/Logo';
import { Modal } from '../../components/Modal/Modal';
import { MovieCardSelected } from '../../components/MovieCardSelected/MovieCardSelected';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Movie } from '../../models/Movie';

export function HeroContainer() {
  const { selectedMovie } = useContext(SelectedMovieContext);

  const [shouldShowAddMovieModal, setShouldShowAddMovieModal] = useState(false);

  function handleMovieFormSubmit(formValue: Partial<Movie>) {
    console.log(formValue);
  }

  const modal = shouldShowAddMovieModal ? (
    <Modal title="Add Movie" handleClose={() => setShouldShowAddMovieModal(false)}>
      <EditMovieForm movie={null} onSubmit={handleMovieFormSubmit} />
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
