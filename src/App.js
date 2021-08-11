import React, { Fragment } from 'react';
import './App.css';
import { Welcome } from './components/Welcome'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import About from './components/About';
import Register from './components/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
      <div className="container">
      <Switch>
        <Route path="/" exact>
           <Welcome></Welcome> 
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route path="/signup">
          <Register></Register>
        </Route>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/about">
            <About></About>
        </Route>
      </Switch> 
      </div>
    </Router>
    <ToastContainer></ToastContainer>
    </Fragment>
  );
}

export default App;


