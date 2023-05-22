import React from 'react';



const ServiceDetails = ({ service }) => {
    const { heading } = service


    return (
        // <div className='border'>
        //     <h1 className='text-4xl text-center p-4'>{heading}</h1>
        // </div>
        <div className="card w-84 bg-neutral text-neutral-content  h-36   bg-gradient-to-r from-indigo-500">
            <div className="card-body items-center text-center">
                <h2 className="text-3xl text-white font-bold">{heading}</h2>
            </div>
        </div>


    );
};

export default ServiceDetails;