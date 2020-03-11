import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from './views/Start'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Start} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
