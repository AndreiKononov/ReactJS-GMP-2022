import React from 'react';
import header from '../header.png';
import SearchForm from './SearchForm';

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <img src={header} className="header-img" alt="header"/>
        <SearchForm />
      </header>
    )
  }
}

export default Header;
