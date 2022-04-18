import React from 'react';
import './About.css'
import me from '../../images/about/me.png'
import github from '../../images/social/github.png'
import linkedin from '../../images/social/linkedin.png'
import facebook from '../../images/social/facebook.png'

const About = () => {
    // className = ' mb-3 font-bold custom-header services-title mb-3 font-bold w-75 mx-auto text-left'
    return (
        <div className='container about-container mt-5 font-bold'>
            <h1 className='d-block  about-title'>About Me</h1>
            <div className='row mt-5 align-items-center'>
                <div className='col-lg-6 col-md-6 img-area'>
                    <img src={me} alt="" />
                </div>
                <div className='col-lg-6 col-md-6'>
                    <h3 className='fw-bold mb-3'>Work harder & rech your goal</h3>
                    <p className='fs-5 '><strong>Hey!</strong> its me <strong>Sajeda Akhter.</strong>Currently i am student of CSE and trying hard to achive my goal as a web developer.For increasing my web developing skill i joined batch 5 of <strong>Programming Hero</strong>, which help me so much to reach my dream goal.I am trying hard to develop my skill by give extra time on my work</p>
                    <div>
                        <div>
                            <h6>Contact me : sajedasaju85@gmail.com</h6>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div style={{ height: '1px' }} className='bg-red w-50'></div>
                            <p className='mt-2 px-2'>or</p>
                            <div style={{ height: '1px' }} className='bg-red w-50'></div>
                        </div>
                        <div>
                            <a href="https://github.com/sajedasaju" target="_blank">
                                <img style={{ width: '30px', margin: '3px' }} src={github} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/sajeda-akhter-9965a71a3/" target="_blank">
                                <img style={{ width: '31px', margin: '3px' }} src={linkedin} alt="" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100010466556130" target="_blank">
                                <img style={{ width: '28px', margin: '3px' }} src={facebook} alt="" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;