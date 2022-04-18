import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import './Checkout.css'

const Checkout = () => {
    const { serviceId } = useParams();
    const [agree, setAgree] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        swal("thank you for the booking");

    }
    return (
        <div className='form-container container  shadow-lg mb-5 rounded mt-5'>
            <h2 className='text-center'>Checkout for program no :{serviceId}</h2>
            <div className="w-75 mx-auto border border-3 p-4 mt-4">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email :</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name :</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="name" required />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Phone Number :</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="" required />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Address :</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <div>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor='terms'>Accept all terms and condition</label>

                    <input
                        onClick={handleSubmit}
                        disabled={!agree}
                        className='w-50 mx-auto btn btn-primary d-block mt-2 bg-color border-0 py-2'
                        type="submit"
                        value="Checkout" />
                </div>
            </div>
        </div>
    );
};

export default Checkout;