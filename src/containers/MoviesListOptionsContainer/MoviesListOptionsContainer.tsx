import { useContext, useMemo, useState } from 'react';
import { FetchedMoviesContext } from '../../contexts/FetchedMoviesContext';
import { GenreTogglePanel as FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { MoviesFound } from '../../components/MoviesFound/MoviesFound';
import { SortPanel } from '../../components/SortPanel/SortPanel';
import { genres } from '../../mocks/genres';
import { sortOptions } from '../../mocks/sortOptions';
import { SelectValue } from '../../models/SelectValue';
import './MoviesListOptionsContainer.scss';

export function MoviesListOptionsContainer() {
  const [genresToFilter, setGenresToFilter] = useState(genres);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  const [optionsToSortBy, setSortOptions] = useState(sortOptions);
  const [sortBy, setSortBy] = useState<SelectValue | null>(null);

  const [{ fetchedMovies, queryParams: currentQueryParams }, setQueryParams] = useContext(FetchedMoviesContext);

  const handleGenreChange = (value: string) => {
    setSelectedGenre(value);
    setQueryParams({ ...currentQueryParams, genre: value });
  };

  const handleSortByChange = (selectValue: SelectValue) => {
    setSortBy(selectValue);
    setQueryParams({ ...currentQueryParams, sort: selectValue.value });
  };

  const memoizedFetchMoviesNumber = useMemo(() => fetchedMovies.length, [fetchedMovies]);

  return (
    <>
      <div className="options-panel">
        <FilterPanel genres={genresToFilter} selectedGenre={selectedGenre} handleSelect={handleGenreChange} />
        <SortPanel sortOptions={optionsToSortBy} sortByValue={sortBy} handleSelect={handleSortByChange} />
      </div>
      <MoviesFound numberOfMovies={memoizedFetchMoviesNumber} />
    </>
  );
}
