import React from 'react';
import { Logo } from '../src/components/Logo/Logo';
import Footer from '../src/components/Footer/Footer';
import Main from '../src/components/Main/Main';
import { MoviesListContainer } from '../src/containers/MoviesListContainer/MoviesListContainer';
import HeroContainer from '../src/containers/HeroContainer/HeroContainer';
import { MoviesListOptionsContainer } from '../src/containers/MoviesListOptionsContainer/MoviesListOptionsContainer';
import { MemoryRouter } from 'react-router-dom';

export function App() {
  return (
    <React.StrictMode>
      <MemoryRouter>
        <div className="App">
          <HeroContainer />

          <Main>
            <MoviesListOptionsContainer />
            <MoviesListContainer />
          </Main>

          <Footer>
            <Logo />
          </Footer>
        </div>
      </MemoryRouter>
    </React.StrictMode>
  );
}
