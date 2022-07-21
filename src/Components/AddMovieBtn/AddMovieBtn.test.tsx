import { render } from '@testing-library/react';
import { AddMovieBtn } from './AddMovieBtn';

describe('AddMovieBtn', () => {
  it('should match AddMovieBtn snapshot', () => {
    const { asFragment } = render(<AddMovieBtn handleClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
