import { render } from '@testing-library/react';
import { MoviesFound } from './MoviesFound';

describe('MoviesFound', () => {
  it('should match MoviesFound snapshot', () => {
    const { asFragment } = render(<MoviesFound numberOfMovies={5} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
