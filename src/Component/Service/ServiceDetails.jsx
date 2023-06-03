import React from 'react';



const ServiceDetails = ({ service }) => {
    const { heading } = service


    return (
        //from-orange-400
        <div className="card w-84 bg-neutral text-neutral-content  h-36 bg-dark  bg-gradient-to-r   from-amber-500 rounded-md   mt-6 ">
            <div className="card-body items-center text-center">
                <h2 className="text-2xl text-white font-bold">{heading}</h2>
            </div>
        </div>


    );
};

export default ServiceDetails;