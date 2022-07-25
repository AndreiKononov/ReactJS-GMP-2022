import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}));

describe('SearchForm', () => {
  it('should match SearchForm snapshot', () => {
    const { asFragment } = render(
      <Router>
        <SearchForm />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should navigate to a search result on form submit', async () => {
    const { getByPlaceholderText, getByRole } = render(
      <MemoryRouter initialEntries={['/search?sortBy=release_date']}>
        <SearchForm />
      </MemoryRouter>
    );

    const searchInput = getByPlaceholderText('What do you want to watch?');
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'Moon');

    const searchButton = getByRole('button');
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);

    await waitFor(() => {
      expect(mockedUseNavigate).toBeCalledWith(
        {
          pathname: `/search/moon`,
          search: 'sortBy=release_date',
        },
        { replace: true }
      );
    });
  });
});
