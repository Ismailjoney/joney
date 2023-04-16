import React from 'react';
import joney from '../../assets/joney.png'
import {  FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero min-h-screen  ">
            <div className="hero-content text-center">
                <div className="">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={joney} />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white">Mohammad Ismail Hossen Joney</h1>
                    <p className="py-2 text-2xl text-white">I'm a Front-end Developer</p>
                     <div>
                        <ul className='flex justify-center align-items-center  '>
                            <li><a href=""><FaFacebookF className='w-8 h-8 mx-2 text-amber-400 hover:border rounded'/></a></li>
                            <li><a href=""><FaLinkedinIn className='w-8 h-8 mx-2 text-amber-400 hover:border rounded'/></a></li>
                            <li><a href=""><FaInstagram className='w-8 h-8 mx-2 text-amber-400 hover:border rounded'/></a></li>
                            <li><a href=""><FaGithub className='w-8 h-8 mx-2 text-amber-400 hover:border rounded'/></a></li>
                        </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;