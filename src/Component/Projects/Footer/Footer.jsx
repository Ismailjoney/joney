import React from 'react';
import { HiPhone } from "react-icons/hi2";
import {  HiMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-dark text-base-content pb-10">
            <div>

                <p className='text-base inline-block font-bold'><HiMail className="inline"/>  mohammadismailjoney@gmail.com</p>
                <p className='text-base inline-block font-bold'>
                        <HiPhone className='inline'/> 01880151811, 01580680940  
                </p>
                
                
                <p>Copyright © 2023 - All right reserved </p>
            </div>
        </footer>
    );
};

export default Footer;