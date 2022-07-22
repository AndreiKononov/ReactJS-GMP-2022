import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';
const dropdownItems = [
  {
    id: 1,
    title: 'Edit',
  },
  {
    id: 2,
    title: 'Delete',
  },
];

describe('Dropdown', () => {
  const handleClose = jest.fn();
  const handleSelect = jest.fn();

  it('should trigger handleClose on close button click', () => {
    render(<Dropdown items={dropdownItems} handleClose={handleClose} handleSelect={handleSelect} />);
    userEvent.click(screen.getByRole('button'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should trigger handleSelect with id 1 on Edit click', () => {
    render(<Dropdown items={dropdownItems} handleClose={handleClose} handleSelect={handleSelect} />);
    userEvent.click(screen.getByText('Edit'));

    expect(handleSelect).toHaveBeenCalledWith(1);
  });

  it('should trigger handleSelect with id 2 on Delete click', () => {
    render(<Dropdown items={dropdownItems} handleClose={handleClose} handleSelect={handleSelect} />);
    userEvent.click(screen.getByText('Delete'));

    expect(handleSelect).toHaveBeenCalledWith(2);
  });
});
