import React, { useEffect, useState } from 'react';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from './../../Shared/Loading/Loading';


const Register = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
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
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const navigateLogin = () => {
        navigate('/login')
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


    const handleCOnfirmPasswordChange = (event) => {
        if (userInfo.password === event.target.value) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value })
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setUserInfo({ ...userInfo, confirmPassword: "" })
            setErrors({ ...errors, passwordError: "Password and confirm password does not match" })
        }
    }

    if (user) {
        navigate('/')
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);

    }
    useEffect(() => {
        if (hookError) {
            if (hookError?.code === 'auth/invalid-email') {
                toast("Invalid email provided, please provide a valid email");
            }
            else if (hookError.code === 'auth/missing-email') {
                toast("Missing Email.");
            }
            else if (hookError.code === 'auth/wrong-password') {
                toast("Wrong password.");
            }
            else if (hookError.code === 'auth/internal-error') {
                toast("Internal Error.");
            }

        }

    }, [hookError])

    if (loading || updating) {
        return <Loading></Loading>
    }
    return (
        <div className="login-container">
            <div className="login-title">Register</div>
            <form onSubmit={handleRegister} className="login-form" >
                <input type="text" name='name' placeholder="Name" />
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your email' required />

                {errors?.emailError && <p className='error-message'>{errors.emailError}</p>}

                <div className="relative">
                    <input onChange={handlePasswordChange} type='password' placeholder="password" required />

                </div>
                <input
                    onChange={handleCOnfirmPasswordChange}
                    type="password"
                    placeholder="confirm password" required />
                {errors?.passwordError && <p className='error-message'>{errors.passwordError}</p>}

                <ToastContainer />

                <button className='bg-color'>Register</button>
                <p>ALready have an account? <Link to='/login' onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;