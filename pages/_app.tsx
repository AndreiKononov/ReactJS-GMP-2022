import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import '../src/index.scss';
import '../src/App.scss';
import '../src/components/Logo/Logo.scss';
import '../src/components/Footer/Footer.scss';
import '../src/components/AddMovieBtn/AddMovieBtn.scss';
import '../src/components/DeleteMovieConfirm/DeleteMovieConfirm.scss';
import '../src/components/EditMovieFormik/EditMovie.scss';
import '../src/components/Header/Header.scss';
import '../src/components/Hero/Hero.scss';
import '../src/components/Modal/Modal.scss';
import '../src/components/MovieCardSelectedContainer/MovieCardSelectedContainer.scss';
import '../src/components/MovieCardSelected/MovieCardSelected.scss';
import '../src/components/SearchForm/SearchForm.scss';
import '../src/components/Dropdown/Dropdown.scss';
import '../src/components/ErrorBoundary/ErrorBoundary.scss';
import '../src/components/FilterPanel/FilterPanel.scss';
import '../src/components/GenreToggleButton/GenreToggleButton.scss';
import '../src/components/Main/Main.scss';
import '../src/components/MovieListCard/MovieListCard.scss';
import '../src/components/MoviesFound/MoviesFound.scss';
import '../src/components/MoviesList/MoviesList.scss';
import '../src/components/SortPanel/SortPanel.scss';
import '../src/containers/MoviesListOptionsContainer/MoviesListOptionsContainer.scss';
import { initialiseStore } from '../src/store';
import { fetchMovies } from '../src/store/moviesReducer';

function MyApp({ Component, pageProps }) {
  console.log('HERE!!');
  console.log(pageProps.initialState.movies.movies.length);
  const store = initialiseStore(pageProps.initialState);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Movie App</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const reduxStore = initialiseStore({});
  console.log(reduxStore.getState());
  // setupListeners(reduxStore.dispatch);
  const { dispatch } = reduxStore;
  const res = await dispatch(fetchMovies());

  // dispatch(setStars({ stars: json.stars }));

  appProps.pageProps = {
    ...appProps.pageProps,
    initialState: reduxStore.getState(),
  };

  return appProps;
};

export default MyApp;
