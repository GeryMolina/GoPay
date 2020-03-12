import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from './views/LoginView'
import AccountsSelection from './views/AccountSelection';
import RegistrationPassword from './views/RegisterPassword';
import CreateNewPassword from './views/CreateNewPassword';
import ConfirmationNewPassword from './views/ConfirmationNewPassword';


// import logo from './logo.svg';
import './App.css';
import FilterWater from './Components/Search/filterWater';
import FilterLigth from './Components/Search/filterLight';


function App() {
  
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/2" component={AccountsSelection} />
        <Route exact path="/3" component={RegistrationPassword} />
        <Route exact path="/4" component={CreateNewPassword} />
        <Route exact path="/5" component={ConfirmationNewPassword} />

      </Switch>
    </BrowserRouter>

    <div className="App">
      <FilterWater/>
      <FilterLigth/>
    </div>

  );
}

export default App;
