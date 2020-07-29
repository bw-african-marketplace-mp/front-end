import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

function Navigation () {
    return (
        <div className='nav'>
            <NavLink to='/' className='link'>Home</NavLink>
            <NavLink to='/register' className='link'>Register</NavLink>
            <NavLink to='/login' className='link'>Log in</NavLink>
            
        </div>
    )

}
export default Navigation