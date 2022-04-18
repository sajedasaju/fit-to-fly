import React from 'react';
import "./Footer.css";
import logo from '../../../images/logo/logo2.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="py-5" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={logo} height='50' alt="" />
                            <h5 className='text-white mt-2 text-red mb-0'>NO PAIN NO GAIN</h5>
                            <p className="text-white mt-0">You have to work hard for achieve you goal.Be determined</p>
                        </div>
                        <div className="col-md-2" id="footer-content1">
                            <h4 className="text-white text-center">Explore</h4>
                            <ul className="mt-4">
                                <li><Link to='/' className='text-white'>Home</Link></li>
                                <li className="my-2"><Link to='/about' className='text-white'>About me</Link></li>
                                <li className="my-2"><Link to='/' className='text-white'>Services</Link></li>
                                <li className="my-2"><Link to='/blogs' className='text-white'>Blogs</Link></li>

                            </ul>
                        </div>
                        <div className="col-md-2" id="footer-content1">
                            <h4 className="text-white text-center">Resources</h4>
                            <ul className="mt-4">
                                <li><Link to='/' className='text-white'>Home</Link></li>
                                <li className="my-2"><Link to='/about' className='text-white'>About me</Link></li>
                                <li className="my-2"><Link to='/' className='text-white'>Services</Link></li>
                                <li className="my-2"><Link to='/blogs' className='text-white'>Blogs</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4" id="footer-content2">
                            <h4 className="text-white text-center">Address</h4>
                            <ul className="mt-4">
                                <li>
                                    <span><i className="fa fa-location-arrow"></i></span>
                                    <p>100,Mohammadpur,Dhaka</p>
                                </li>
                                <li className="my-2">
                                    <span><i className="fa fa-phone"></i></span>
                                    <p>+66021462134</p>
                                </li>
                                <li>
                                    <span><i className="fa fa-envelope"></i></span>
                                    <p>gittofly20@mail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right bg-dark py-2">
                <div className="container">
                    <p className="text-white text-center mt-2"><small>copyright @ {new Date().getFullYear()}</small></p>
                </div>
            </div>


        </footer>
    );
};

export default Footer;