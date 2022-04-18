import React, { useEffect, useState } from 'react';
import Service from './../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <section className='services my-5'>
            <h1 className='services-title mb-3 font-bold w-75 mx-auto'>Our Services</h1>
            <div className="service-container">
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </section>

    );
};

export default Services;