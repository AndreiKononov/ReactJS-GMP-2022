import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { movies } from '../../mocks/movies';
import MovieCardSelectedContainer from './MovieCardSelectedContainer';

const mockSetSearchParams = jest.fn();
const mockInitialSearchParams = new URLSearchParams('?movie=337167&sortBy=release_date');

// jest.mock('react-router-dom', () => ({
//   ...(jest.requireActual('react-router-dom') as any),
//   useSearchParams: () => {
//     return [mockInitialSearchParams, mockSetSearchParams];
//   },
// }));

xdescribe('MovieCardSelectedContainer', () => {
  // it('should show loading indicator', () => {
  //   const { getByText } = render(
  //     <BrowserRouter>
  //       <MovieCardSelectedContainer movie={null} isLoading={true} isError={false} />
  //     </BrowserRouter>
  //   );
  //
  //   const loadingIndicator = getByText('Loading...');
  //   expect(loadingIndicator).toBeInTheDocument();
  // });
  //
  // it('should show error indicator', () => {
  //   const { getByText } = render(
  //     <BrowserRouter>
  //       <MovieCardSelectedContainer movie={null} isLoading={false} isError={true} />
  //     </BrowserRouter>
  //   );
  //
  //   const errorIndicator = getByText('Fetching Error!');
  //   expect(errorIndicator).toBeInTheDocument();
  // });
  //
  // it('should show selected movie', () => {
  //   const selectedMovie = movies[0];
  //
  //   const { getByAltText } = render(
  //     <BrowserRouter>
  //       <MovieCardSelectedContainer movie={selectedMovie} isLoading={false} isError={false} />
  //     </BrowserRouter>
  //   );
  //
  //   const selectedMovieImg = getByAltText(`${selectedMovie.title} poster`);
  //   expect(selectedMovieImg).toBeInTheDocument();
  // });
  //
  // it('should delete movie query parameter on search button clicked', () => {
  //   const deleteQueryParamSpy = jest.spyOn(mockInitialSearchParams, 'delete');
  //   const expectedQueryParams = new URLSearchParams('?sortBy=release_date');
  //
  //   const selectedMovie = movies[0];
  //
  //   const { getByRole } = render(
  //     <BrowserRouter>
  //       <MovieCardSelectedContainer movie={selectedMovie} isLoading={false} isError={false} />
  //     </BrowserRouter>
  //   );
  //
  //   const searchButton = getByRole('button');
  //   userEvent.click(searchButton);
  //
  //   expect(deleteQueryParamSpy).toBeCalledWith('movie');
  //   expect(mockSetSearchParams).toBeCalledWith(expectedQueryParams);
  // });
});
