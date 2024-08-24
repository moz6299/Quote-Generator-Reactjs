import React from 'react';
import './App.css';
import Quote from './components/Quote';

const App = () => {
  return (
    <div className='app'>
      <h1>Quote Generator</h1>
      <Quote />
    </div>
  );
};

export default App;
