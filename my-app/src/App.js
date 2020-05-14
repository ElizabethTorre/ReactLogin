import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { Welcome } from './views/welcome';
import { Login } from './views/login';
import './css/App.css';

export const App = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/welcome">
          <Login />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};