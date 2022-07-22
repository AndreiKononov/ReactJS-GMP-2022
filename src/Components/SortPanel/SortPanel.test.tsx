import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { sortOptions } from '../../containers/MoviesListOptionsContainer/sortOptions';
import { SortPanel } from './SortPanel';

describe('SortPanel', () => {
  it('should render collapsed sorting select', () => {
    const mockHandleSelect = jest.fn();

    const { getByText, getByRole } = render(
      <SortPanel sortOptions={sortOptions} sortByValue={sortOptions[0]} handleSelect={mockHandleSelect} />
    );

    const selectLabel = getByText(/sort by/i);
    expect(selectLabel).toBeInTheDocument();

    const combobox = getByRole('combobox', { expanded: false });
    expect(combobox).toBeInTheDocument();
  });

  it('should have release_date as the selected value', () => {
    const mockHandleSelect = jest.fn();

    const { getByText } = render(<SortPanel sortOptions={sortOptions} sortByValue={sortOptions[0]} handleSelect={mockHandleSelect} />);

    const selectedValue = getByText(/Release Date/i);

    expect(selectedValue).toBeInTheDocument();
  });

  it('should expand select on value click', () => {
    const mockHandleSelect = jest.fn();

    const { getByText, getByRole } = render(
      <SortPanel sortOptions={sortOptions} sortByValue={sortOptions[0]} handleSelect={mockHandleSelect} />
    );

    const selectedValue = getByText(/Release Date/i);

    userEvent.click(selectedValue);

    const combobox = getByRole('combobox', { expanded: true });
    expect(combobox).toBeInTheDocument();
  });

  it('should call handleSelect on option click', () => {
    const mockHandleSelect = jest.fn();

    const { getByText } = render(<SortPanel sortOptions={sortOptions} sortByValue={sortOptions[0]} handleSelect={mockHandleSelect} />);

    const selectedValue = getByText(/Release Date/i);
    userEvent.click(selectedValue);

    const durationOption = getByText('Duration');
    expect(durationOption).toBeInTheDocument();

    userEvent.click(durationOption);
    expect(mockHandleSelect).toHaveBeenCalled();
  });

  it('should collapse select popup on option click', () => {
    const mockHandleSelect = jest.fn();

    const { getByText, getByRole } = render(
      <SortPanel sortOptions={sortOptions} sortByValue={sortOptions[0]} handleSelect={mockHandleSelect} />
    );

    const selectedValue = getByText('Release Date');
    userEvent.click(selectedValue);

    const expandedCombobox = getByRole('combobox', { expanded: true });
    expect(expandedCombobox).toBeInTheDocument();

    const durationOption = getByText('Duration');
    expect(durationOption).toBeInTheDocument();
    userEvent.click(durationOption);

    expect(mockHandleSelect).toHaveBeenCalled();

    const collapsedCombobox = getByRole('combobox', { expanded: false });
    expect(collapsedCombobox).toBeInTheDocument();
  });
});
