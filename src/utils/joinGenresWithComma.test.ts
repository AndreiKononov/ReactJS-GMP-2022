import { joinGenres } from './joinGenresWithComma';

describe('joinGenresWithComma', () => {
  it('should join an array to a string of values separated with comma', () => {
    const genres = ['action', 'comedy', 'fantasy'];

    expect(joinGenres(genres)).toBe('action, comedy, fantasy');
  });
});
