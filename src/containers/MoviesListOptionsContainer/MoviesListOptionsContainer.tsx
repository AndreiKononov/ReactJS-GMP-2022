import { useMemo } from 'react';
import { GenreTogglePanel as FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { MoviesFound } from '../../components/MoviesFound/MoviesFound';
import { SortPanel } from '../../components/SortPanel/SortPanel';
import { genres } from './genres';
import { sortOptions } from './sortOptions';
import { SelectValue } from '../../models/SelectValue';
import { Genre } from '../../models/Genre';
import { RootState } from '../../store';
import { setFilter, setSortBy } from '../../store/moviesReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import './MoviesListOptionsContainer.scss';

export function MoviesListOptionsContainer() {
  const { fetchedMovies, queryParams } = useAppSelector((state: RootState) => state.movies);
  const dispatch = useAppDispatch();

  const handleGenreChange = (genre: Genre): void => {
    dispatch(setFilter(genre.value));
  };

  const handleSortByChange = (selectValue: SelectValue): void => {
    dispatch(setSortBy(selectValue.value));
  };

  const getSortByValue = (value: string): SelectValue => {
    return sortOptions.find((option) => option.value === value)!;
  };

  const memoizedFetchMoviesNumber = useMemo(() => fetchedMovies.length, [fetchedMovies]);

  return (
    <>
      <FilterPanel genres={genres} selectedGenre={queryParams.filter} handleSelect={handleGenreChange} />
      <SortPanel sortOptions={sortOptions} sortByValue={getSortByValue(queryParams.sortBy)} handleSelect={handleSortByChange} />
      <MoviesFound numberOfMovies={memoizedFetchMoviesNumber} />
    </>
  );
}
