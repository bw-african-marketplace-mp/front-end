import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Register from './components/Register'
import AddItem from './components/AddItem'
import PrivateRoute from './components/PrivateRoute'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 className='title'>African Marketplace</h1>
      <img className='head-img' src="https://source.unsplash.com/fm9wqDNXyQ0"/>
      <Navigation />
      <Switch>
        
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <PrivateRoute exact path='/add-item' >
          <AddItem />
        </PrivateRoute>

        <PrivateRoute exact path='/'>
          <Home />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
