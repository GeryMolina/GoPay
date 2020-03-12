import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Logo from './Components/Main/Logo'
import Main from './Views/Main'
import Search from './Views/Search'
import Select from './Views/ViewSelect'
import Detail from './Views/Detail'
import Pay from './Views/Pay'

function App() {
  
  return (
    <div className="App">
      <Logo/>
      {/* <Main/> 
      <Select/>
      <Search/>
      <Detail/> */}
      <Pay/>
    </div>
  );
}

export default App;
