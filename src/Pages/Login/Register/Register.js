import React, { useState } from 'react';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        generalError: "",
    })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

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

    const handleRegister = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        navigate('/')
    }

    const handleCOnfirmPasswordChange = (event) => {
        if (userInfo.password === event.target.value) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value })
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setUserInfo({ ...userInfo, confirmPassword: '' })
            setErrors({ ...errors, passwordError: "Password and confirm password does not match" })
        }
    }
    return (
        <div className="login-container">
            <div className="login-title">Sign up</div>
            <form onSubmit={handleRegister} className="login-form" >
                <input type="text" placeholder="Name" />
                <input onChange={handleEmailChange} type="text" placeholder="Your Email" />
                <div className="relative">
                    <input onChange={handlePasswordChange} type='password' placeholder="password" />
                    {/* <p className="absolute top-3 right-5">🔥</p> */}
                </div>
                <input
                    onChange={handleCOnfirmPasswordChange}
                    type="password"
                    placeholder="confirm password" />

                <button>Sign up</button>
            </form>
        </div>
    );
};

export default Register;