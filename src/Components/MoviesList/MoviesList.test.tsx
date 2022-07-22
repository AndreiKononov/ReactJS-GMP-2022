import { render } from '@testing-library/react';
import { movies } from '../../mocks/movies';
import MoviesList from './MoviesList';

jest.mock('../../components/MovieListCard/MovieListCard', () => {
  return () => <div>Mocked Movie Card</div>;
});

describe('MoviesList', () => {
  it('should render all provided movies', () => {
    const { getAllByRole } = render(<MoviesList movies={movies} />);

    expect(getAllByRole('listitem').length).toEqual(movies.length);
  });
});
