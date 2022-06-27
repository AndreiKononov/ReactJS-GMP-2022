import { ActionTypes } from './actionTypes';

export interface Action {
  type: ActionTypes;
  payload?: any;
  error?: Error;
  meta?: any;
}

const startFetchMovies = () => ({
  type: ActionTypes.START_FETCH_MOVIES,
});
