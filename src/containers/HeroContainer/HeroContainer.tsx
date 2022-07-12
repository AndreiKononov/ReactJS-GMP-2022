import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AddMovieBtn } from '../../components/AddMovieBtn/AddMovieBtn';
import { EditMovieFormik } from '../../components/EditMovieFormik/EditMovieFormik';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Logo } from '../../components/Logo/Logo';
import { Modal } from '../../components/Modal/Modal';
import { MovieCardSelected } from '../../components/MovieCardSelected/MovieCardSelected';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Movie } from '../../models/Movie';
import { fetchMovieById } from '../../store/moviesReducer';

export function HeroContainer() {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const selectedMovieId = searchParams.get('movie');

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const fetchMovie = useCallback(async () => {
    try {
      if (!selectedMovieId) {
        setSelectedMovie(null);
        return;
      }

      const movie = await dispatch(fetchMovieById(selectedMovieId)).unwrap();
      setSelectedMovie(movie);
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  }, [selectedMovieId, dispatch]);

  useEffect(() => {
    fetchMovie();
  }, [selectedMovieId, fetchMovie]);

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
