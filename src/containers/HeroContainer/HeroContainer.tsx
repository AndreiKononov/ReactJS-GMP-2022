import { useState } from 'react';
import { AddMovieBtn } from '../../components/AddMovieBtn/AddMovieBtn';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Logo } from '../../components/Logo/Logo';
import { MovieCardSelected } from '../../components/MovieCardSelected/MovieCardSelected';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Movie } from '../../models/Movie';

export function HeroContainer() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const heroElement = !selectedMovie ? (
    <Hero>
      <Header>
        <Logo />
        <AddMovieBtn />
      </Header>
      <SearchForm />
    </Hero>
  ) : (
    <MovieCardSelected movie={selectedMovie} />
  );

  return heroElement;
}
