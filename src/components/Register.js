import React from 'react'

function Register (props) {
    console.log(props);
    const { username, email, password } = props
    const { form } = props
    return(
        <form> 
            <label> Username
                <input id='name' name='username' type='textbox'/>
            </label>
            <label> Email
                <input id='mail' name='email' type='textbox'/>
            </label>
            <label> Password
                <input id='pass' name='password' type='password'/>
            </label>
            <button>Register</button>
        </form>
    )
}
export default Register