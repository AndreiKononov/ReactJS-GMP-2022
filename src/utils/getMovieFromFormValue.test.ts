import { EditMovieFormValue } from '../models/EditMovieFormValue';
import { Movie } from '../models/Movie';
import { getMovieFromFormValue } from './getMovieFromFormValue';

describe('getMovieFromFormValue', () => {
  it('should return Partial<Movie> data format', () => {
    const editMovieFormValue: EditMovieFormValue = {
      title: 'test title',
      vote_average: '9',
      release_date: '2018-05-05',
      poster_path: 'https://test.com',
      overview: 'test overview',
      genres: [
        { value: 'action', label: 'Action' },
        { value: 'comedy', label: 'Comedy' },
        { value: 'fantasy', label: 'Fantasy' },
      ],
      runtime: '90',
    };

    const expectedMovie: Partial<Movie> = {
      title: 'test title',
      release_date: '2018-05-05',
      poster_path: 'https://test.com',
      overview: 'test overview',
      genres: ['action', 'comedy', 'fantasy'],
      runtime: 90,
      vote_average: 9,
    };

    const movie = getMovieFromFormValue(editMovieFormValue);

    expect(movie).toEqual(expectedMovie);
  });
});
