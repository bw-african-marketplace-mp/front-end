import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import formSchema from "../LoginSchema"
import axios from 'axios'

const LogForm = {
    username: '',
    password: ''
}

function Login (props) {
    const [form, setForm] = useState()
    const [errors, setErrors] = useState([]); 
    const history = useHistory()
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        formSchema.validate(form, {abortEarly: false})
        .then(res => {
            axios.post('https://reqres.in/api/login', form)
            .then(res => {
                console.log(res);
                setForm(LogForm)
                history.push('/')
            })
            .catch(err => {
                console.dir(err)
            })
        })
        .catch(err => {
            console.dir(err);
            setErrors([...err.inner])
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