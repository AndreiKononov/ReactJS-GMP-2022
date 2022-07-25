import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddMovieBtn } from './AddMovieBtn';

describe('AddMovieBtn', () => {
  it('should match AddMovieBtn snapshot', () => {
    const { asFragment } = render(<AddMovieBtn handleClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should trigger handleClick on button click', () => {
    const handleClick = jest.fn();

    render(<AddMovieBtn handleClick={handleClick} />);
    userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
