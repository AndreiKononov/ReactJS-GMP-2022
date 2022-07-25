import { movies } from '../mocks/movies';
import moviesReducer, { fetchMovies, moviesInitialState } from './moviesReducer';

describe('moviesReducer', () => {
  const reducer = moviesReducer;

  it('should set isLoading to true, isError to false, movies to null for fetchMovieById.pending action', () => {
    const state = reducer(moviesInitialState, fetchMovies.pending);

    expect(state).toEqual({
      movies: [],
      isError: false,
      isLoading: true,
    });
  });

  it('should set isLoading to false, isError to true, movies to null for fetchMovieById.rejected action', () => {
    const state = reducer(moviesInitialState, fetchMovies.rejected);

    expect(state).toEqual({
      movies: [],
      isError: true,
      isLoading: false,
    });
  });

  it('should set isLoading to false, isError to false, movies to provided value for fetchMovieById.fulfilled action', () => {
    const mockMovies = movies;
    const actionFulfilled = { type: fetchMovies.fulfilled.type, payload: mockMovies };

    const state = reducer(moviesInitialState, actionFulfilled);

    expect(state).toEqual({
      movies: mockMovies,
      isError: false,
      isLoading: false,
    });
  });
});
