import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {
  const [value, setValue] = useState({
    username: '',
    password: ''
  })


  // make a post request to retrieve a token from the api
  const handleSubmit = e => {
    e.preventDefault()

    axiosWithAuth().post('localhost:5000/api/login', value)
    .then(res => {
      console.log(res.data.value)
      localStorage.setItem('token', res.value.token)
      props.history.push('/BubblePage')
      })
    .catch(err => console.log(err.response))
  }

    const handleChange = e => {
      setValue({
        ...value, 
        [e.target.name]: e.target.value
      })
    }

  // when you have handled the token, navigate to the BubblePage route
  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome to the Bubble App!</h1>
      <label>Username</label>
      <input type='username' name='username' placeholder='Username' value={value.username} onChange={handleChange}/>
      <label>Password</label>
      <input type='password' name='password' placeholder='Password' value={value.password} onChange={handleChange}/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
