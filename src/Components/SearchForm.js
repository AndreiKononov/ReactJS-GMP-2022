import React from 'react';

class SearchForm extends React.PureComponent {
  render() {
    return (
      <div className="searchForm-container">
        <div className="searchForm-input-container">
          <label>What do you want to watch?</label>
          <input className="searchForm-input" />
        </div>
        <button className="searchForm-btn">
          <label>SEARCH</label>
        </button>
      </div>
    )
  }
}

export default SearchForm;
