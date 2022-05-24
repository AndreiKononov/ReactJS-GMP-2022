import React from 'react';
import Header from './Header';
import Counter from './Counter';
import GenreToggler from './GenreToggler';
import './../App.css';

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
