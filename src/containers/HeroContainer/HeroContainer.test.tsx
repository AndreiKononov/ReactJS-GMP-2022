import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import { movies } from '../../mocks/movies';
import * as useSelectedMovieModule from '../../hooks/useSelectedMovie';
import * as selectedMovieStore from '../../store/selectedMovieReducer';
import HeroContainer from './HeroContainer';

jest.mock('../../components/Modal/Modal', () => {
  return () => <div>Mocked Modal</div>;
});

jest.mock('../../components/EditMovieFormik/EditMovieFormik', () => {
  return () => <div>Mocked Edit Movie Form</div>;
});

jest.mock('../../components/MovieCardSelectedContainer/MovieCardSelectedContainer', () => {
  return () => <div>Mocked Selected Movie Container</div>;
});

jest.mock('../../components/SearchForm/SearchForm', () => {
  return () => <div>Mocked Search Form</div>;
});

xdescribe('HeroContainer', () => {
  it('', () => {});
  // const mockStore = configureStore([thunk]);
  // const store = mockStore({
  //   selectedMovie: {
  //     movie: null,
  //     isError: false,
  //     isLoading: false,
  //   },
  // });
  //
  // function renderInMemoryRouterAndMockedStoreProvider(initialEntries: string[] = ['/search'], initialIndex: number = 0) {
  //   return render(
  //     <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
  //       <Provider store={store}>
  //         <HeroContainer />
  //       </Provider>
  //     </MemoryRouter>
  //   );
  // }
  //
  // beforeEach(() => {
  //   jest.spyOn(store, 'dispatch').mockImplementation();
  // });
  //
  // it('should display search form when there is no selected movie in store', () => {
  //   jest.spyOn(useSelectedMovieModule, 'useSelectedMovie').mockReturnValue(store.getState().selectedMovie);
  //
  //   const { getByText, queryByText } = renderInMemoryRouterAndMockedStoreProvider();
  //
  //   expect(getByText('Mocked Search Form')).toBeInTheDocument();
  //   expect(queryByText('Mocked Selected Movie Container')).toBeNull();
  // });
  //
  // it('should display selected movie card when there is selected movie in store', () => {
  //   const spy = jest.spyOn(useSelectedMovieModule, 'useSelectedMovie').mockReturnValue({
  //     movie: movies[0],
  //     isError: false,
  //     isLoading: false,
  //   });
  //
  //   const { getByText, queryByText } = renderInMemoryRouterAndMockedStoreProvider([`/search?movie=123`], 0);
  //
  //   expect(spy).toHaveBeenCalledTimes(1);
  //   expect(getByText('Mocked Selected Movie Container')).toBeInTheDocument();
  //   expect(queryByText('Mocked Search Form')).toBeNull();
  // });
  //
  // it('should display add movie modal when add movie button is clicked', () => {
  //   jest.spyOn(useSelectedMovieModule, 'useSelectedMovie').mockReturnValue(store.getState().selectedMovie);
  //
  //   const { getByText, queryByText } = renderInMemoryRouterAndMockedStoreProvider();
  //
  //   expect(queryByText('Mocked Modal')).toBeNull();
  //
  //   const addMovieButton = getByText(/add movie/i);
  //
  //   userEvent.click(addMovieButton);
  //
  //   expect(getByText('Mocked Modal')).toBeInTheDocument();
  // });
  //
  // it('should dispatch resetSelectedMovie if there is NO movie=selectedMovieId in route queryParams', () => {
  //   jest.spyOn(useSelectedMovieModule, 'useSelectedMovie').mockReturnValue(store.getState().selectedMovie);
  //
  //   const spy = jest.spyOn(selectedMovieStore, 'resetSelectedMovie');
  //
  //   renderInMemoryRouterAndMockedStoreProvider(['/search'], 0);
  //
  //   expect(spy).toHaveBeenCalled();
  // });
  //
  // it('should dispatch fetchMovieById(selectedMovieId) if there is movie=selectedMovieId in route queryParams', () => {
  //   jest.spyOn(useSelectedMovieModule, 'useSelectedMovie').mockReturnValue(store.getState().selectedMovie);
  //   const mockMovieId = '12345';
  //   const spy = jest.spyOn(selectedMovieStore, 'fetchMovieById');
  //
  //   renderInMemoryRouterAndMockedStoreProvider([`/search?movie=${mockMovieId}`], 0);
  //
  //   expect(spy).toHaveBeenCalledWith(mockMovieId);
  // });
});
