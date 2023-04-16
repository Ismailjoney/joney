import React from 'react';

const ServiceDetails = ({ servi }) => {
    const { image, heading } = servi
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body justify-center align-items-center">
                <h2 className='font-bold text-3xl text-white text-center'>{heading}</h2>
            </div>
        </div>
    );
};

export default ServiceDetails;