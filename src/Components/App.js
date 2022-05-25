import React from 'react';
import Header from './Header';
import Counter from './Counter';
import GenreToggler from './GenreToggler';
import '../App.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <GenreToggler />
      <Counter />
    </div>
  );
}

export default App;
