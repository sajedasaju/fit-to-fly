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
        <div className="box">
            <img src={img} alt="" />
            <div className="info">
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={url}>
                    <Button className='purchase-btn'>Purchase program</Button>
                </Link>
            </div>
        </div>
    );
    // return (
    //     <div className='col-12 col-md-6 col-lg-4 '>
    //         <div className="service-box">
    //             <div class="service-icon mb-3">
    //                 <img src={img} className="img-fluid w-25" alt="" />
    //             </div>
    //             <div class="service-content">
    //                 <h3 class="mb-3">{name}</h3>
    //                 <p>{description}</p>
    //                 <h1 className="card-text">
    //                     ${price}
    //                 </h1>
    //                 <Link to={url}>
    //                     <Button className='btn btn-primary'>Purchase program</Button>
    //                 </Link>
    //             </div>

    //         </div>
    //     </div>
    // );
};

export default Service; 