import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import registerSchema from "../RegisterSchema"
import axios from 'axios'
import '../App.css';

const initialForm = {
    username: '',
    email: '',
    password: ''
  }

function Register (props) {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState([]); 
    const history = useHistory()
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        registerSchema.validate(form, {abortEarly: false})
        .then(res => {
            axios.post('http://jsonplaceholder.typicode.com/users', form)
            .then(res => {
                console.log(res);
                setForm(initialForm)
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
        <div className='reg-container'>
            <form onSubmit={handleSubmit}>
                {errors.map(error =>{
                    return <p>{error.message}</p>
                })} 
                <label> Username: 
                    <input id='name' name='username' type='textbox' onChange={handleChange}/>
                </label>
                <label> Email: 
                    <input id='mail' name='email' type='textbox' onChange={handleChange}/>
                </label>
                <label> Password: 
                    <input id='pass' name='password' type='password' onChange={handleChange}/>
                </label>
                <button className='btn' id='regbtn'>Register</button>
            </form>
        </div>
    )
}
export default Register