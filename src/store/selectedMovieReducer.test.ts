import selectedMovieReducer, { fetchMovieById, resetSelectedMovie, selectedMovieInitialState } from './selectedMovieReducer';
import { movies } from '../mocks/movies';

describe('selectedMovieReducer', () => {
  const reducer = selectedMovieReducer;

  it('should return initial state for resetSelectedMovie action', () => {
    const state = reducer(selectedMovieInitialState, resetSelectedMovie());

    expect(state).toBe(selectedMovieInitialState);
  });

  it('should set isLoading to true, isError to false, movie to null for fetchMovieById.pending action', () => {
    const state = reducer(selectedMovieInitialState, fetchMovieById.pending);

    expect(state).toEqual({
      movie: null,
      isError: false,
      isLoading: true,
    });
  });

  it('should set isLoading to false, isError to true, movie to null for fetchMovieById.rejected action', () => {
    const state = reducer(selectedMovieInitialState, fetchMovieById.rejected);

    expect(state).toEqual({
      movie: null,
      isError: true,
      isLoading: false,
    });
  });

  it('should set isLoading to false, isError to false, movie to provided value for fetchMovieById.fulfilled action', () => {
    const mockMovie = movies[0];
    const actionFulfilled = { type: fetchMovieById.fulfilled.type, payload: mockMovie };

    const state = reducer(selectedMovieInitialState, actionFulfilled);

    expect(state).toEqual({
      movie: mockMovie,
      isError: false,
      isLoading: false,
    });
  });
});
