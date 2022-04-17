import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner'>
            <div className='container d-flex flex-column justify-content-center align-items-start h-100'>
                <h1 className='text-white display-3  w-50'>Discover Your Inner Strength</h1>
                <Link to='/blogs' className='btn text-white btn-outline-light rounded-pill px-5 get-started'>Get Started</Link>
            </div>
        </section>
    );
};

export default Banner;