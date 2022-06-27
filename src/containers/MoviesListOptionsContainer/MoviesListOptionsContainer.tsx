import { useContext, useMemo, useState } from 'react';
import { FetchedMoviesContext } from '../../contexts/FetchedMoviesContext';
import { GenreTogglePanel as FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { MoviesFound } from '../../components/MoviesFound/MoviesFound';
import { SortPanel } from '../../components/SortPanel/SortPanel';
import { genres } from './genres';
import { sortOptions } from './sortOptions';
import { SelectValue } from '../../models/SelectValue';
import { Genre } from '../../models/Genre';
import './MoviesListOptionsContainer.scss';

export function MoviesListOptionsContainer() {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [sortBy, setSortBy] = useState<SelectValue | null>(sortOptions[0]);

  const [{ fetchedMovies, queryParams: currentQueryParams }, setQueryParams] = useContext(FetchedMoviesContext);

  const handleGenreChange = (genre: Genre) => {
    setSelectedGenre(genre);
    setQueryParams({ ...currentQueryParams, filter: genre.value });
  };

  const handleSortByChange = (selectValue: SelectValue) => {
    setSortBy(selectValue);
    setQueryParams({ ...currentQueryParams, sortBy: selectValue.value });
  };

  const memoizedFetchMoviesNumber = useMemo(() => fetchedMovies.length, [fetchedMovies]);

  return (
    <>
      <div className="options-panel">
        <FilterPanel genres={genres} selectedGenre={selectedGenre.value} handleSelect={handleGenreChange} />
        <SortPanel sortOptions={sortOptions} sortByValue={sortBy} handleSelect={handleSortByChange} />
      </div>
      <MoviesFound numberOfMovies={memoizedFetchMoviesNumber} />
    </>
  );
}
