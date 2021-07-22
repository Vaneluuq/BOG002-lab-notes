import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome'
import { Register } from './components/Register'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Welcome></Welcome>
        </Route>
        <Route path="/registro">
          <Register></Register>
      </Route>
      </Switch> 
    </Router>
  );
}

export default App;
