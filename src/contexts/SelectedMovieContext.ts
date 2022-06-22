import React, { Dispatch, SetStateAction } from 'react';
import { Movie } from '../models/Movie';

export interface SelectedMovieState {
  selectedMovie: Movie | null;
  setSelectedMovie: Dispatch<SetStateAction<Movie | null>>;
}

export const SelectedMovieContext = React.createContext<SelectedMovieState>({ selectedMovie: null, setSelectedMovie: () => {} });
