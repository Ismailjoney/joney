import React from 'react';
import frontend from '../../assets/frontend.png'
import fullstack from '../../assets/fullstack.png'
import mern from '../../assets/mern.png'
import webdev from '../../assets/webdev.png'
import ServiceDetails from './ServiceDetails';

const Service = () => {

    const services = [
        {
            "uId": 10,
            "image": webdev,
            "heading" : "WebDeveloper"
        },
        {
            "uId": 20,
            "image": frontend,
            "heading" : " Front End Developer"
        },
        {
            "uId": 30,
            "image": fullstack,
            "heading" : "Full Stack Developer"
        },
        {
            "uId": 40,
            "image": mern,
            "heading" : "MERN Stack Developer"
        },

    ]


    return (
        <div>
            <h2 className='my-14 text-3xl font-bold text-amber-300'>Services</h2>
            <div className='grid grid-cols-1 gap-4 justify-items-center align-items-center lg:grid-cols-4'>
                {
                    services.map(servi => <ServiceDetails
                    key={servi.uId}
                    servi={servi}
                    ></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Service;