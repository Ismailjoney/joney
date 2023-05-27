import React from 'react';
import joney from '../../assets/joney.png'
import {  FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero mt-20 lg:min-h-screen lg:mt-0 ">
            <div className="hero-content text-center">
                <div className="">
                    <div className="avatar">
                        <div className="w-48 rounded-full ">
                            <img src={joney} />
                        </div>
                    </div>
                    <h1 className="text-xl font-bold text-white gradient-text lg:text-4xl">Mohammad Ismail Hossen Joney</h1>
                    <p className="py-2 text-xl text-white gradient-text lg:text-4xl">  Front-end Developer</p>
                     <div>
                        <ul className='flex justify-center align-items-center mt-2'>
                            <li><a href="https://www.facebook.com/profile.php?id=100009195877064"><FaFacebookF className='w-8 h-8 mx-2   text-amber-400 hover:border rounded'/></a></li>
                            <li><a href="https://www.linkedin.com/in/mohammad-ismail-hossen-joney-2b8584259/"><FaLinkedinIn className='w-8 h-8 mx-2 text-amber-400 hover:border rounded'/></a></li>
                            <li><a href="https://www.instagram.com/ismail.joney/"><FaInstagram className='w-8 h-8 mx-2 text-amber-400 hover:border rounded'/></a></li>
                            <li><a href="https://github.com/Ismailjoney"><FaGithub className='w-8 h-8 mx-2 text-amber-400 hover:border rounded'/></a></li>
                        </ul>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;