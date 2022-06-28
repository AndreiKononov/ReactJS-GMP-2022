import { useState } from 'react';
import { Logo } from './components/Logo/Logo';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { MoviesListContainer } from './containers/MoviesListContainer/MoviesListContainer';
import { HeroContainer } from './containers/HeroContainer/HeroContainer';
import { MoviesListOptionsContainer } from './containers/MoviesListOptionsContainer/MoviesListOptionsContainer';
import { Movie } from './models/Movie';
import { SelectedMovieState, SelectedMovieContext } from './contexts/SelectedMovieContext';
import './App.scss';

export function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const selectedMovieContextValue: SelectedMovieState = { selectedMovie, setSelectedMovie };

  return (
    <div className="App">
      <SelectedMovieContext.Provider value={selectedMovieContextValue}>
        <HeroContainer />
        <Main>
          <MoviesListOptionsContainer />
          <MoviesListContainer />
        </Main>
      </SelectedMovieContext.Provider>
      <Footer>
        <Logo />
      </Footer>
    </div>
  );
}
