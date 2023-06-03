import React from 'react';
import ServiceDetails from './ServiceDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 

const Service = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite:  true,
         centerPadding: "0px",
        slidesToShow: 3,
        speed: 500
    };


    const services = [
        {
            "uId": 10,
            "heading": "Web Developer"
        },
        {
            "uId": 20,
            "heading": "Front End Developer"
        },
        {
            "uId": 30,
            "heading": "Full Stack Developer"
        },
        {
            "uId": 40,
            "heading": "MERN Stack Developer"
        }
    ]

    return (
        <div id="service">
            <h2 className='my-14 text-3xl font-bold text-amber-300'>Services</h2>
            <div className='grid grid-cols-1 align-center justify-iotems-center md:grid-cols-2 md:gap-4 lg:grid-cols-4 '>
            {
                services.map(service=> <ServiceDetails
                key={service.uId}
                service={service}
                ></ServiceDetails>)
            }
            </div>
        </div>
    );
};

export default Service;