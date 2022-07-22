import { Logo } from './components/Logo/Logo';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { MoviesListContainer } from './containers/MoviesListContainer/MoviesListContainer';
import HeroContainer from './containers/HeroContainer/HeroContainer';
import { MoviesListOptionsContainer } from './containers/MoviesListOptionsContainer/MoviesListOptionsContainer';
import './App.scss';

export function App() {
  return (
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
  );
}
