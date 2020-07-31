import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

function Navigation (props) {
    const logout = function(){
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        props.setLoggedIn(false);
    }
    return (
        <>
        {props.loggedIn 
        ? (<div className='nav'>
                <NavLink to='/' className='link'>Home</NavLink> 
                <NavLink to='/login' className='link' onClick={logout}>Log Out</NavLink>
            </div>)
        : (<div className='nav'> 
                <NavLink to='/register' className='link'>Register</NavLink> 
                <NavLink to='/login' className='link'>Log In</NavLink>
            </div>)
        }
        </>
    )

}
export default Navigation