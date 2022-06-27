import { combineReducers } from 'redux';
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

const fetchedMovies = (state: FetchedMoviesState = initialState, action) => {
  switch (action.type) {
    case ACTIONS.START_FETCH_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
  }
};

const selectedMovie = (state: Movie | null = null, { type, payload }: Action) => (type === ACTIONS.SET_SELECTED_MOVIE ? payload : state);

export const rootReducers = combineReducers({ fetchedMovies, selectedMovie });

export { fetchedMovies, selectedMovie };
