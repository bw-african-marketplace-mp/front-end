import React from 'react'

function Login (props) {
    console.log(props);
    const { username, password } = props
    const { form } = props
    return(
        <form> 
            <label> Username
                <input id='logname' name='logusername' type='textbox'/>
            </label>
            <label> Password
                <input id='logpass' name='logpassword' type='password'/>
            </label>
            <button>Log in</button>
        </form>
    )
}
export default Login