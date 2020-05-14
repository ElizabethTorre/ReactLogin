import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Signup } from './views/welcome';
//import { Waiter } from './views/waiter';
import { Login } from './views/login';
import './css/App.css';

export const App = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/welcome">
          <Signup />
        </Route>
        {/*<Route path="/waiter">
          <Waiter />
        </Route>*/}
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

//import React from 'react';
//import logo from './logo.svg';
//import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

//export default App;
