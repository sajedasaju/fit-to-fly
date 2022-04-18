import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/checkout/${id}`)

    }


    const url = `/service/checkout/${id}`
    return (
        <div className="box">
            <img src={img} alt="" />
            <div className="info">
                <h3>{name}</h3>
                <p>{description}</p>

                <Button onClick={() => navigateToServiceDetail(id)} className='purchase-btn'>Purchase program</Button>
            </div>
        </div>
    );

};

export default Service; 