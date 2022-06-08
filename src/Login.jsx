import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './login.css';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from './firebase'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); //This stops the refresh
        // do login logic
        signInWithEmailAndPassword(email,password)
            .then((auth) => {
                // Logged In, Redirect to Homepage
                navigate('/');
            })
            .catch(e => alert(e.message));
    }

    const register = event => {
        event.preventDefault(); //This stops the refresh
        // do register logic
        createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created a user and Logged In, redirect to homepage
        })
        .catch((e) => alert(e.message));
    }

  return (
    <div className='login'>
        <Link to="/">
            <img 
                className='login__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                alt="amazon-logo" 
            />
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                <button onClick={login} type='submit' className='login__signIn'>Sign In</button>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </form>
            <button onClick={register} className='login__register'>Create Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
