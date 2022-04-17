import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        generalError: "",
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleEmailChange = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, emailError: "" });
        }
        else {
            setErrors({ ...errors, emailError: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePasswordChange = (event) => {
        const passwordRegex = /.{6,}/
        const validPassword = passwordRegex.test(event.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "Password must be up to 6 length" })
            setUserInfo({ ...userInfo, password: "" })

        }
    }
    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    return (
        <div className='login-container'>
            <div className="login-title">LogIn</div>
            <form onSubmit={handleSubmit} className="login-form">

                <input onChange={handleEmailChange} type="text" name="email" id="email" placeholder='your email' />
                {errors?.emailError && <p className='error-message'>{errors.emailError}</p>}

                <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder='password' />
                {errors?.passwordError && <p className='error-message'>{errors.passwordError}</p>}

                <button>Login</button>
                <p>Dont have an account? <Link to='/register'>Sign up first</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;