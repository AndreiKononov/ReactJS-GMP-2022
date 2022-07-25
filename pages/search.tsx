import React from 'react';
import { Provider } from 'react-redux';
import { Logo } from '../src/components/Logo/Logo';
import Footer from '../src/components/Footer/Footer';
import Main from '../src/components/Main/Main';
import { MoviesListContainer } from '../src/containers/MoviesListContainer/MoviesListContainer';
import HeroContainer from '../src/containers/HeroContainer/HeroContainer';
import { MoviesListOptionsContainer } from '../src/containers/MoviesListOptionsContainer/MoviesListOptionsContainer';
import { store } from '../src/store';
import { MemoryRouter } from 'react-router-dom';

export function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
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
      </Provider>
    </React.StrictMode>
  );
}
