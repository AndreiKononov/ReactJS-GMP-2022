import React, { Dispatch, SetStateAction, useState } from 'react';
import { Logo } from './components/Logo/Logo';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { MoviesListContainer } from './containers/MoviesListContainer/MoviesListContainer';
import { HeroContainer } from './containers/HeroContainer/HeroContainer';
import { MoviesListOptionsContainer } from './containers/MoviesListOptionsContainer/MoviesListOptionsContainer';
import { Movie } from './models/Movie';
import { useFetchMovies, UseFetchMoviesResult } from './hooks/useFetchMovies';
import './App.scss';

interface SelectedMovieState {
  selectedMovie: Movie | null;
  setSelectedMovie: Dispatch<SetStateAction<Movie | null>>;
}

export const SelectedMovieContext = React.createContext<SelectedMovieState>({ selectedMovie: null, setSelectedMovie: () => {} });
export const FetchedMoviesContext = React.createContext<UseFetchMoviesResult>([
  { fetchedMovies: [], isError: false, isLoading: false, queryParams: {} },
  () => {},
]);

export function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const selectedMovieContextValue: SelectedMovieState = { selectedMovie, setSelectedMovie };

  const fetchedMoviesContextValue: UseFetchMoviesResult = useFetchMovies([]);

  return (
    <div className="App">
      <SelectedMovieContext.Provider value={selectedMovieContextValue}>
        <HeroContainer />
        <FetchedMoviesContext.Provider value={fetchedMoviesContextValue}>
          <Main>
            <MoviesListOptionsContainer />
            <MoviesListContainer />
          </Main>
        </FetchedMoviesContext.Provider>
      </SelectedMovieContext.Provider>
      <Footer>
        <Logo />
      </Footer>
    </div>
  );
}
