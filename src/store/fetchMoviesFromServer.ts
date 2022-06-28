import axios, { AxiosResponse } from 'axios';
import { initialQueryParams } from './initialQueryParams';
import { MovieResponse } from '../models/MovieResponse';
import { QueryParams } from '../models/QueryParams';

export const fetchMoviesFromServer = async (queryParams: QueryParams = initialQueryParams) => {
  const apiUrl = 'http://localhost:4000/movies';
  const {
    data: { data: fetchedMovies },
  }: AxiosResponse<MovieResponse> = await axios(apiUrl, { method: 'GET', params: queryParams });

  return fetchedMovies;
};
