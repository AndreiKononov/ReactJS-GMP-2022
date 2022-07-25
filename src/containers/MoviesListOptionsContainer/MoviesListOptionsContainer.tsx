import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GenreTogglePanel as FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { MoviesFound } from '../../components/MoviesFound/MoviesFound';
import { SortPanel } from '../../components/SortPanel/SortPanel';
import { genres } from './genres';
import { sortOptions } from './sortOptions';
import { SelectValue } from '../../models/SelectValue';
import { Genre } from '../../models/Genre';
import { useMovies } from '../../hooks/useMovies';
// import './MoviesListOptionsContainer.scss';

export function MoviesListOptionsContainer() {
  const { movies } = useMovies();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQueryParamChange = (selectedItem: SelectValue | Genre, paramName: 'genre' | 'sortBy'): void => {
    const selectedValue: string = selectedItem.value;

    if (selectedValue) {
      searchParams.set(paramName, selectedValue);
    } else {
      searchParams.delete(paramName);
    }

    setSearchParams(searchParams);
  };

  const getSortByValue = (value: string | null): SelectValue | null => {
    if (!value) {
      return null;
    }

    return sortOptions.find((option) => option.value === value)!;
  };

  return (
    <>
      <div className="options-panel">
        <FilterPanel
          genres={genres}
          selectedGenre={searchParams.get('genre')}
          handleSelect={(selectedItem) => handleQueryParamChange(selectedItem, 'genre')}
        />
        <SortPanel
          sortOptions={sortOptions}
          sortByValue={getSortByValue(searchParams.get('sortBy'))}
          handleSelect={(selectedItem) => handleQueryParamChange(selectedItem, 'sortBy')}
        />
      </div>
      <MoviesFound numberOfMovies={movies.length} />
    </>
  );
}
