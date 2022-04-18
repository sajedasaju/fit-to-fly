import React, { useEffect, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

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

    const resetPassword = async () => {

        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast("Sent Email")
        }
        else {
            toast("Please enter your email")
        }

    }

    useEffect(() => {
        let error = hookError;
        if (error) {
            if (error?.code === 'auth/invalid-email') {
                toast("Invalid email provided, please provide a valid email");
            }
            else if (error?.code === 'auth/user-not-found') {
                toast("User Not Found");
            }
            else if (error?.code === 'auth/wrong-password') {
                toast("Wrong password.");
            }
            else {
                toast("Something went wrong");
            }

        }

    }, [hookError])
    return (
        <div className='container'>
            <div className='login-container'>
                <div className="login-title text-color">LogIn</div>
                <form onSubmit={handleSubmit} className="login-form">

                    <input onChange={handleEmailChange} type="text" name="email" id="email" placeholder='your email' required />
                    {errors?.emailError && <p className='error-message'>{errors.emailError}</p>}

                    <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder='password' required />
                    {errors?.passwordError && <p className='error-message'>{errors.passwordError}</p>}

                    <ToastContainer />

                    <button className='bg-color'>Login</button>
                    <p>New to Fit To Fly? <Link to='/register'>Please Register</Link></p>
                    <p>Forget password? <Link to='/login' onClick={resetPassword}>Reset Password</Link></p>


                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;