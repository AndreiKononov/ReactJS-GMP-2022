import { Movie } from '../models/Movie';
import { Action } from './actionCreators';
import { ACTIONS } from './actionTypes';

interface FetchedMoviesState {
  fetchedMovies: Movie[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: FetchedMoviesState = {
  fetchedMovies: [],
  isLoading: false,
  isError: false,
};

export const fetchedMoviesReducer = (state: FetchedMoviesState = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.START_FETCH_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.START_FETCH_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.START_FETCH_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
