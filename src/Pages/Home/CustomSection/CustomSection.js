import React from 'react';
import './CustomSection.css'

const CustomSection = () => {
    return (
        <section className=' container-fluid p-0 custom-section mb-5'>
            <h1 className=' mb-3 font-bold custom-header services-title mb-3 font-bold w-75 mx-auto text-left'>Features</h1>
            <div className="backgroud">
                <div className="content text-center">
                    <h1>Special Features that made us unique</h1>
                    <p>We have contain some special features,which are custome,as my client want their workout routine.</p>
                </div>
            </div>
            <div className="container-fluid text-center">
                <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
                    <div className="rectangle">
                        <h1>123</h1>
                        <p>Happy Client</p>
                    </div>
                    <div className="rectangle">
                        <h1>233</h1>
                        <p>Members</p>
                    </div>
                    <div className="rectangle">
                        <h1>783</h1>
                        <p>Free Services</p>
                    </div>
                    <div className="rectangle">
                        <h1>158</h1>
                        <p>Programs</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CustomSection;