import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceCheckout = id => {
        navigate(`/service/${id}`)

    }

    return (
        <div className='col-12 col-md-6 col-lg-4 res-margin '>
            <div className="card bottom-border" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <h1 className="card-text">
                        ${price}
                    </h1>
                    <button onClick={() => { navigateToServiceCheckout(id) }} href="#" className="btn btn-primary">
                        Purchase program
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service; 