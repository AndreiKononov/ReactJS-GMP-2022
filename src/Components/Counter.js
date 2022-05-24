import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="counter-container">
      <h1>Counter: {counter}</h1>
      <button className='btn btn-outline-success btn-sm' onClick={increment}>Increase</button>
      <button className='btn btn-outline-danger btn-sm' onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Counter;
