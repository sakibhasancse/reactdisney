import React from 'react';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Details from './components/Details';
import Login from './components/Auth/Login';
import SingUp from './components/Auth/SingUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SingUp />
          </Route>
          <Route path="/detail/:id" >
            <Details />
          </Route>
          <Route path="/">

            <Home />
          </Route>
        </Switch>

      </Router>
    </div>

  );
}

export default App;
