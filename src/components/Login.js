import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import loginSchema from "../LoginSchema"
import axios from 'axios'

const LogForm = {
    logusername: '',
    logpassword: ''
}

function Login (props) {
    const [form, setForm] = useState(LogForm)
    const [errors, setErrors] = useState([]); 
    const history = useHistory()
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
        loginSchema.validate(form, {abortEarly: false})
        .then(res => {
            console.log(res);
            setErrors([]);
        })
        .catch(err => {
            console.log(err);
            setErrors([...err.inner]);
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://jsonplaceholder.typicode.com/users', form)
        .then(res => {
            console.log(res);
            setForm(LogForm)
            history.push('/')
        })
        .catch(err => {
            console.dir(err)
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            {errors.map(error =>{
                return <p>{error.message}</p>
            })}  
            <label> Username
                <input id='logname' name='logusername' type='textbox' onChange={handleChange}/>
            </label>
            <label> Password
                <input id='logpass' name='logpassword' type='password' onChange={handleChange}/>
            </label>
            <button>Log in</button>
        </form>
    )
}
export default Login