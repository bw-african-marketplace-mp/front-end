import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Register from './components/Register'
import AddItem from './components/AddItem'
import ModifyItem from './components/ModifyItem'
import PrivateRoute from './components/PrivateRoute'
import './App.css';

export const UserContext = React.createContext()

function App() {
  const [user, setUser] = useState({
    username: '',
    id: ''
  })

const [ loggedIn, setLoggedIn ] = useState(!!localStorage.getItem('token'));

return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <h1 className='title'>African Marketplace</h1>
        <img className='head-img' alt='African Marketplace' src="https://source.unsplash.com/fm9wqDNXyQ0"/>
        <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          
          <Route path='/login'>
            <Login setLoggedIn={setLoggedIn}/>
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <PrivateRoute path='/add-item' >
            <AddItem />
          </PrivateRoute>

          <PrivateRoute path='/modify-item/:itemId' >
            <ModifyItem />
          </PrivateRoute>

          <PrivateRoute path='/'>
            <Home />
          </PrivateRoute>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
