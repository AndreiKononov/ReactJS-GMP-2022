import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { GenreToggleButton } from './GenreToggleButton';

describe('GenreToggleButton', () => {
  it('should render a button with a provided title', () => {
    const handleSelect = jest.fn();

    const { getByText } = render(<GenreToggleButton genreTitle="test title" isSelected={false} handleSelect={handleSelect} />);

    expect(getByText('test title')).toBeInTheDocument();
  });

  it('should have selected class when selected is true', () => {
    const handleSelect = jest.fn();

    const { getByText } = render(<GenreToggleButton genreTitle="test title" isSelected={true} handleSelect={handleSelect} />);

    expect(getByText('test title')).toHaveClass('selected');
  });

  it('should call handleSelect on click', () => {
    const handleSelect = jest.fn();

    const { getByText } = render(<GenreToggleButton genreTitle="test title" isSelected={true} handleSelect={handleSelect} />);

    const genreButton = getByText('test title');

    expect(genreButton).toBeInTheDocument();

    userEvent.click(genreButton);

    expect(handleSelect).toHaveBeenCalled();
  });
});
