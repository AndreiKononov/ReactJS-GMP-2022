import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as fromUseMovies from '../../hooks/useMovies';
import { movies } from '../../mocks/movies';
import { Movie } from '../../models/Movie';
import { MoviesListContainer } from './MoviesListContainer';

describe('MoviesListContainer', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    selectedMovie: {
      movies: [],
      isError: false,
      isLoading: false,
    },
  });

  beforeEach(() => {
    jest.spyOn(store, 'dispatch').mockImplementation();
  });

  it('should show loading indicator', () => {
    jest.spyOn(fromUseMovies, 'useMovies').mockReturnValue({
      movies: [],
      isError: false,
      isLoading: true,
    });

    const { getByText } = renderMoviesListContainerInProviderAndRouter();

    const loadingIndicator = getByText('Loading...');
    expect(loadingIndicator).toBeInTheDocument();
  });

  it('should show error indicator', () => {
    jest.spyOn(fromUseMovies, 'useMovies').mockReturnValue({
      movies: [],
      isError: true,
      isLoading: false,
    });

    const { getByText } = renderMoviesListContainerInProviderAndRouter();

    const errorIndicator = getByText('Fetching Error!');
    expect(errorIndicator).toBeInTheDocument();
  });

  it('should show movies list', () => {
    jest.spyOn(fromUseMovies, 'useMovies').mockReturnValue({
      movies: movies,
      isError: false,
      isLoading: false,
    });

    const { getAllByRole } = renderMoviesListContainerInProviderAndRouter();

    const moviesList = getAllByRole('listitem');
    expect(moviesList.length).toBe(movies.length);
  });

/**
 * Uncomment to test error boundary: commented out as it throws errors to test console
 *
 it('should activate error boundary on movies list error', () => {
     jest.spyOn(fromUseMovies, 'useMovies').mockReturnValue({
       movies: [...movies, null] as Movie[],
       isError: false,
       isLoading: false,
     });

     const { getByText } = renderMoviesListContainerInProviderAndRouter();

     const errorBoundary = getByText(`Something went wrong with MoviesListContainer!`);
     expect(errorBoundary).toBeInTheDocument();
   });
*/

  function renderMoviesListContainerInProviderAndRouter() {
    return render(
      <Provider store={store}>
        <MemoryRouter>
          <MoviesListContainer />
        </MemoryRouter>
      </Provider>
    );
  }
});
