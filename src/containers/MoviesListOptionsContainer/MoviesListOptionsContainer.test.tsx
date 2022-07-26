import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as fromUseMovies from '../../hooks/useMovies';
import { sortOptions } from './sortOptions';
import { genres } from './genres';
import { MoviesListOptionsContainer } from './MoviesListOptionsContainer';

xdescribe('MoviesListOptionsContainer', () => {
  it('', () => {});
  // const mockStore = configureStore([thunk]);
  // const store = mockStore({
  //   movies: {
  //     movies: [],
  //     isError: false,
  //     isLoading: false,
  //   },
  // });
  //
  // beforeEach(() => {
  //   jest.spyOn(fromUseMovies, 'useMovies').mockReturnValue(store.getState().movies);
  // });
  //
  // it('should render filter panel, sort panel and number of movies found', () => {
  //   const { getByText } = renderMoviesListOptionsContainerInProviderAndRouter();
  //
  //   const sortPanel = getByText(/sort by/i);
  //   const filterPanel = getByText(/fantasy/i);
  //   const moviesFound = getByText(/movies found/i);
  //
  //   expect(sortPanel).toBeInTheDocument();
  //   expect(filterPanel).toBeInTheDocument();
  //   expect(moviesFound).toBeInTheDocument();
  // });
  //
  // it('should set sortBy query parameter on sort panel option select', () => {
  //   const mockSetSearchParams = jest.fn();
  //   const mockInitialSearchParams = new URLSearchParams('?sortBy=release_date&genre=action');
  //   jest.spyOn(fromReactRouterDom, 'useSearchParams').mockReturnValue([mockInitialSearchParams, mockSetSearchParams]);
  //
  //   const selectedSortBy = sortOptions[1]; // value: 'vote_average', label: 'Rating'
  //
  //   const setQueryParamSpy = jest.spyOn(mockInitialSearchParams, 'set');
  //
  //   const { getByText } = renderMoviesListOptionsContainerInProviderAndRouter();
  //
  //   const sortPanel = getByText('Release Date');
  //   expect(sortPanel).toBeInTheDocument();
  //   userEvent.click(sortPanel);
  //
  //   const ratingOption = getByText(selectedSortBy.label);
  //   expect(ratingOption).toBeInTheDocument();
  //   userEvent.click(ratingOption);
  //
  //   const expectedQueryParams = new URLSearchParams('?sortBy=vote_average&genre=action');
  //
  //   expect(setQueryParamSpy).toHaveBeenCalledWith('sortBy', selectedSortBy.value);
  //   expect(mockInitialSearchParams.get('sortBy')).toBe(selectedSortBy.value);
  //   expect(mockSetSearchParams).toHaveBeenCalledWith(expectedQueryParams);
  // });
  //
  // it('should set genre query parameter on genre panel option select', () => {
  //   const mockSetSearchParams = jest.fn();
  //   const mockInitialSearchParams = new URLSearchParams('?sortBy=release_date&genre=action');
  //   jest.spyOn(fromReactRouterDom, 'useSearchParams').mockReturnValue([mockInitialSearchParams, mockSetSearchParams]);
  //
  //   const selectedGenre = genres[3]; // value: 'fantasy', label: 'Fantasy'
  //
  //   const setQueryParamSpy = jest.spyOn(mockInitialSearchParams, 'set');
  //
  //   const { getByText } = renderMoviesListOptionsContainerInProviderAndRouter();
  //
  //   const genrePanelButton = getByText(/fantasy/i);
  //   expect(genrePanelButton).toBeInTheDocument();
  //   userEvent.click(genrePanelButton);
  //
  //   const expectedQueryParams = new URLSearchParams('?sortBy=release_date&genre=fantasy');
  //
  //   expect(setQueryParamSpy).toHaveBeenCalledWith('genre', selectedGenre.value);
  //   expect(mockInitialSearchParams.get('genre')).toBe(selectedGenre.value);
  //   expect(mockSetSearchParams).toHaveBeenCalledWith(expectedQueryParams);
  // });
  //
  // it('should delete genre query parameter on "All" genre panel option select', () => {
  //   const mockSetSearchParams = jest.fn();
  //   const mockInitialSearchParams = new URLSearchParams('?sortBy=release_date&genre=action');
  //   jest.spyOn(fromReactRouterDom, 'useSearchParams').mockReturnValue([mockInitialSearchParams, mockSetSearchParams]);
  //
  //   const deleteQueryParamSpy = jest.spyOn(mockInitialSearchParams, 'delete');
  //
  //   const { getByText } = renderMoviesListOptionsContainerInProviderAndRouter();
  //
  //   const genrePanelButton = getByText(/all/i);
  //   expect(genrePanelButton).toBeInTheDocument();
  //   userEvent.click(genrePanelButton);
  //
  //   const expectedQueryParams = new URLSearchParams('?sortBy=release_date');
  //
  //   expect(deleteQueryParamSpy).toHaveBeenCalledWith('genre');
  //   expect(mockInitialSearchParams.get('genre')).toBeNull();
  //   expect(mockSetSearchParams).toHaveBeenCalledWith(expectedQueryParams);
  // });
  //
  // function renderMoviesListOptionsContainerInProviderAndRouter() {
  //   return render(
  //     <Provider store={store}>
  //       <fromReactRouterDom.BrowserRouter>
  //         <MoviesListOptionsContainer />
  //       </fromReactRouterDom.BrowserRouter>
  //     </Provider>
  //   );
  // }
});
