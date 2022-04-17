import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    // const navigate = useNavigate();
    // const navigateToServiceCheckout = id => {
    //     navigate(`/service/${id}`)

    // }
    const url = `/service/checkout/${id}`
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
                    <Link to={url}>
                        <Button className='btn btn-primary'>Purchase program</Button>
                    </Link>
                    {/* <button onClick={() => { navigateToServiceCheckout(id) }} href="#" className="btn btn-primary">
                        Purchase program
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Service; 