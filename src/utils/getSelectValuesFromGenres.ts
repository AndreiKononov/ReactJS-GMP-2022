import { SelectValue } from '../models/SelectValue';

export function getSelectValuesFromGenres(genres: string[]): SelectValue[] {
  return genres.map((genre) => ({ value: genre, label: genre }));
}
