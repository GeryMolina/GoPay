import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from './views/LoginView'
import AccountsSelection from './views/AccountSelection';
import RegistrationPassword from './views/RegisterPassword';
import CreateNewPassword from './views/CreateNewPassword';
import ConfirmationNewPassword from './views/ConfirmationNewPassword';
import Main from './views/Main'
import ViewSelect from './views/ViewSelect'
import SearchWater from './views/Search'
import Detail from './views/Detail'
import Pay from './views/Pay'


// import logo from './logo.svg';
import './App.css';

// import Logo from './components/Main/Logo'
// import Main from './views/Main'
// import Search from './views/Search'
// import Select from './views/ViewSelect'
// import Detail from './views/Detail'
// import Pay from './views/Pay'




function App() {
  
  return (

    <div className="App">
      {/* <Logo/> */}
      {/* <Main/> 
      <Select/>
      <Search/>
      <Detail/> */}
      {/* <Pay/> */}
   
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />  
        <Route exact path="/2" component={AccountsSelection} />
        <Route exact path="/3" component={RegistrationPassword} />
        <Route exact path="/4" component={CreateNewPassword} />
        <Route exact path="/5" component={ConfirmationNewPassword} />
        <Route exact path="/6" component={Main} />
        <Route exact path="/7" component={ViewSelect} />
        <Route exact path="/8" component={SearchWater} />
        <Route exact path="/9" component={Detail} />
        <Route exact path="/10" component={Pay} />

      </Switch>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
