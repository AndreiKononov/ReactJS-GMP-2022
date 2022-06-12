import { useState} from 'react';
import { GenreTogglePanel as FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { MoviesFound } from '../../components/MoviesFound/MoviesFound';
import { SortPanel } from '../../components/SortPanel/SortPanel';
import { genres } from '../../mocks/genres';
import { sortOptions } from '../../mocks/sortOptions';
import { SelectValue } from '../../models/SelectValue';
import './MoviesListOptionsContainer.scss';

export function MoviesListOptionsContainer() {
  const [genresToFilter, setGenresToFilter] = useState(genres);
  const [selectedGenre, setSelectedGenre] = useState(genres[1]);
  const [optionsToSortBy, setSortOptions] = useState(sortOptions);
  const [sortBy, setSortBy] = useState({ value: 'release_date', label: 'Release Date' });

  const [numberOfMoviesFound, setNumberOfMoviesFound] = useState(39);

  function handleGenreChange(value: React.SetStateAction<string>) {
    setSelectedGenre(value);
  }

  function handleSortByChange(value: React.SetStateAction<SelectValue>) {
    setSortBy(value);
  }

  return (
    <>
      <div className="options-panel">
        <FilterPanel genres={genresToFilter} selectedGenre={selectedGenre} handleSelect={handleGenreChange} />
        <SortPanel sortOptions={optionsToSortBy} sortByValue={sortBy} handleSelect={handleSortByChange} />
      </div>
      <MoviesFound numberOfMovies={numberOfMoviesFound} />
    </>
  );
}
