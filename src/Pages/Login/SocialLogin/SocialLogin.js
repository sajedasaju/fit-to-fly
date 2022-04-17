import React, { useEffect } from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import auth from './../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    if (googleUser || gitUser) {
        navigate('/')
    }

    useEffect(() => {
        // let error = googleError || gitError;
        if (googleError || gitError) {
            toast.error(`${googleError?.message} ${gitError?.message}`)

        }

    }, [googleError, gitError])

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>


            <div>
                <button onClick={() => { signInWithGoogle() }} className='btn btn-info d-block w-100  mx-auto my-2 '>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button onClick={() => { signInWithGithub() }} className='btn btn-info d-block w-100  mx-auto my-2'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
                <ToastContainer></ToastContainer>
                {/* <p>{error ? error.message : ''}</p> */}
            </div>
        </div>
    );
};

export default SocialLogin;