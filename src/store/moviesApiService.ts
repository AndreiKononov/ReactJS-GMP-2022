import axios, { AxiosResponse } from 'axios';
import { MovieResponse } from '../models/MovieResponse';
import { QueryParams } from '../models/QueryParams';
import { initialQueryParams } from './initialQueryParams';

const MOVIES_API_URL = 'http://localhost:4000/movies';

export class MoviesApiService {
  static async fetchMoviesFromServer(queryParams: QueryParams = initialQueryParams) {
    const url = MOVIES_API_URL;

    const {
      data: { data: fetchedMovies },
    }: AxiosResponse<MovieResponse> = await axios(url, { method: 'GET', params: queryParams });

    return fetchedMovies;
  }

  static async deleteMovieById(id: number) {
    const url = `${MOVIES_API_URL}/${id}`;

    const { data } = await axios(url, { method: 'DELETE' });

    return data;
  }
}
