import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Movie } from '../models/Movie';
import { QueryParams } from '../models/QueryParams';
import { initialQueryParams } from './initialQueryParams';

export type UseFetchMoviesResult = [
  { fetchedMovies: Movie[]; isLoading: boolean; isError: boolean; queryParams: QueryParams },
  React.Dispatch<React.SetStateAction<QueryParams>>
];

export const useFetchMovies = (initialData: Movie[] = []): UseFetchMoviesResult => {
  const apiUrl = 'http://localhost:4000/movies';

  const [fetchedMovies, setFetchedMovies] = useState(initialData);
  const [queryParams, setQueryParams] = useState<QueryParams>(initialQueryParams);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      setFetchedMovies([]);

      try {
        const result = await axios(apiUrl, { method: 'GET', params: queryParams });

        const {
          data: { data: fetchedMovies },
        } = result;

        setFetchedMovies(fetchedMovies as Movie[]);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [queryParams]);

  return [{ fetchedMovies, isLoading, isError, queryParams }, setQueryParams];
};
