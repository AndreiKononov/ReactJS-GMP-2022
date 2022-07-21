import { getYear } from './getYearFromDate';

describe('getYear', () => {
  it('should return year', () => {
    expect(getYear('2018-05-05')).toBe('2018');
  });
});
