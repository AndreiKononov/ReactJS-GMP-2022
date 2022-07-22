import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { genres } from '../../containers/MoviesListOptionsContainer/genres';
import { GenreTogglePanel } from './FilterPanel';

describe('GenreTogglePanel', () => {
  it('should render provided genres', () => {
    const mockHandleSelect = jest.fn();

    const { getAllByRole } = render(<GenreTogglePanel genres={genres} selectedGenre={'action'} handleSelect={mockHandleSelect} />);

    const genreButtons = getAllByRole('button');

    expect(genreButtons.length).toBe(genres.length);
  });

  it('should call handleSelect callback with selected genre on genre button click', () => {
    const mockHandleSelect = jest.fn();

    const { getAllByRole } = render(<GenreTogglePanel genres={genres} selectedGenre={'action'} handleSelect={mockHandleSelect} />);

    const genreButtons = getAllByRole('button');

    userEvent.click(genreButtons[3]);

    expect(mockHandleSelect).toHaveBeenCalledWith(genres[3]);
  });

  it('should pass the "action" genre button as selected', () => {
    const mockHandleSelect = jest.fn();

    const { getByText } = render(<GenreTogglePanel genres={genres} selectedGenre={'action'} handleSelect={mockHandleSelect} />);

    const actionGenreButton = getByText(/action/i);

    expect(actionGenreButton).toBeInTheDocument();
    expect(actionGenreButton).toHaveClass('selected');
  });

  it('should pass the "all" genre button as selected', () => {
    const mockHandleSelect = jest.fn();

    const { getByText } = render(<GenreTogglePanel genres={genres} selectedGenre={null} handleSelect={mockHandleSelect} />);

    const actionGenreButton = getByText(/all/i);

    expect(actionGenreButton).toBeInTheDocument();
    expect(actionGenreButton).toHaveClass('selected');
  });
});
