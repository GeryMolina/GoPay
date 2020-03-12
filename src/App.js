import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FilterWater from './Components/Search/filterWater';
import FilterLigth from './Components/Search/filterLight';

function App() {
  
  return (
    <div className="App">
      <FilterWater/>
      <FilterLigth/>
    </div>
  );
}

export default App;
