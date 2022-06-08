import React, { useState } from 'react';
import './SearchForm.scss';

export function SearchForm() {
  const [searchValue, setSearchValue] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert('SearchValue: ' + searchValue);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="searchForm-wrapper">
      <h1 className="searchForm-title">Find your movie</h1>

      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchForm-input"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="What do you want to watch?"
        />
        <button className="searchForm-btn" type="submit" disabled={!searchValue}>
          Search
        </button>
      </form>
    </div>
  );
}
