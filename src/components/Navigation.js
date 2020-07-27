import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation () {
    return (
        <div>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Log in</NavLink>
        </div>
    )

}
export default Navigation