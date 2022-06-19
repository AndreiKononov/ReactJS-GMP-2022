import React from 'react';
import { UseFetchMoviesResult } from '../hooks/useFetchMovies';

export const FetchedMoviesContext = React.createContext<UseFetchMoviesResult>([
  { fetchedMovies: [], isError: false, isLoading: false, queryParams: {} },
  () => {},
]);
