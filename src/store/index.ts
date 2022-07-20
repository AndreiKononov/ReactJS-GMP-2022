import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import moviesReducer from './moviesReducer';
import selectedMovieReducer from './selectedMovieReducer';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
