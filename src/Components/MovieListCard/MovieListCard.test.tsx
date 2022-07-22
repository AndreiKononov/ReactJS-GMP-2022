import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { movies } from '../../mocks/movies';
import MovieListCard from './MovieListCard';

function MockModal({ title }) {
  return <div>{title}</div>;
}

jest.mock('../../components/Modal/Modal', () => MockModal);

jest.mock('../../components/EditMovieFormik/EditMovieFormik', () => {
  return () => <div>Mocked Edit Movie Form</div>;
});

jest.mock('../../components/DeleteMovieConfirm/DeleteMovieConfirm', () => {
  return () => <div>Mocked Delete Movie Confirm Form</div>;
});

describe('MoviesListCard', () => {
  const movie = movies[0];

  it('should render a movie list card with provided movie title and image', () => {
    const { getByText, getByAltText } = renderMovieListCardInRouter();

    expect(getByText(movie.title)).toBeInTheDocument();
    expect(getByAltText(`${movie.title} poster`)).toBeInTheDocument();
  });

  it('should display dropdown on context menu button click', () => {
    const { getByTitle, getByRole } = renderMovieListCardInRouter();

    const contextMenuBtn = getByTitle('context-menu-button');
    expect(contextMenuBtn).toBeInTheDocument();

    userEvent.click(contextMenuBtn);

    const dropdown = getByRole('menu');
    expect(dropdown).toBeInTheDocument();
  });

  it('should display Edie Movie Modal on dropdown edit option select', () => {
    const { getByTitle, getByRole, getByText } = renderMovieListCardInRouter();

    const contextMenuBtn = getByTitle('context-menu-button');
    expect(contextMenuBtn).toBeInTheDocument();

    userEvent.click(contextMenuBtn);

    const dropdown = getByRole('menu');
    expect(dropdown).toBeInTheDocument();

    const editOption = getByText('Edit');
    expect(editOption).toBeInTheDocument();

    userEvent.click(editOption);

    const editModal = getByText(/Edit Movie/i);
    expect(editModal).toBeInTheDocument();
  });

  it('should display Delete Movie Modal on dropdown delete option select', () => {
    const { getByTitle, getByRole, getByText } = renderMovieListCardInRouter();

    const contextMenuBtn = getByTitle('context-menu-button');
    expect(contextMenuBtn).toBeInTheDocument();

    userEvent.click(contextMenuBtn);

    const dropdown = getByRole('menu');
    expect(dropdown).toBeInTheDocument();

    const deleteOption = getByText('Delete');
    expect(deleteOption).toBeInTheDocument();

    userEvent.click(deleteOption);

    const deleteModal = getByText(/Delete Movie/i);
    expect(deleteModal).toBeInTheDocument();
  });

  it('should set movie queryParam and scroll to top on movie select', () => {
    const scrollSpy = jest.spyOn(window, 'scrollTo').mockImplementation();

    const { getByAltText } = renderMovieListCardInRouter();

    const movieImg = getByAltText(`${movie.title} poster`);
    expect(movieImg).toBeInTheDocument();

    userEvent.click(movieImg);

    const movieQueryParam = new URLSearchParams(window.location.search).get('movie');
    expect(movieQueryParam).toBe(movie.id.toString());
    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'smooth' });
  });

  function renderMovieListCardInRouter() {
    return render(
      <BrowserRouter>
        <MovieListCard movie={movie} />
      </BrowserRouter>
    );
  }
});
