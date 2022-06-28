import React, { useId, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setSearch } from '../../store/moviesReducer';
import './SearchForm.scss';

export function SearchForm() {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();
  const inputIdPrefix = useId();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearch(searchValue));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="searchForm-wrapper">
      <h1 className="searchForm-title">Find your movie</h1>

      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          id={`${inputIdPrefix}_searchInput`}
          className="searchForm-input form-input"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="What do you want to watch?"
        />
        <button className="app-btn searchForm-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
