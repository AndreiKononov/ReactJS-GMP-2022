import React, { useEffect, useState } from 'react';
import { movies } from '../mocks/movies';
import { Movie } from '../models/Movie';

export type UseFetchMoviesResult = [
  { fetchedMovies: Movie[]; isLoading: boolean; isError: boolean; queryParams: { [key: string]: string } },
  React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
];

export const useFetchMovies = (): UseFetchMoviesResult => {
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);
  const [queryParams, setQueryParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      setFetchedMovies([]);

      try {
        console.log(queryParams);
        const result = await new Promise((resolve) =>
          setTimeout(() => {
            resolve(movies);
          }, 500)
        );

        setFetchedMovies(result as Movie[]);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [queryParams]);

  return [{ fetchedMovies, isLoading, isError, queryParams }, setQueryParams];
};
