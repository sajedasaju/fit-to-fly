import React from 'react';
import notFound from '../../../images/404/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" className='img-fluid' />
        </div>
    );
};

export default NotFound;