import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Register from './components/Register'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>African Marketplace</h1>
      <Navigation />
      <Switch>
        <Route path='/login'>
          <Login /> 
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
