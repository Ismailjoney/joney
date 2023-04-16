import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Nav/Nav';
import { FaHome, FaUserAlt, FaServicestack } from "react-icons/fa";

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col px-4  lg:px-20">
                    <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-20  text-base-content">
                        <li><a><FaHome className='w-8 h-8 text-amber-400'/> </a></li>
                        <li><a><FaUserAlt className='w-8 h-8 text-amber-400'/> </a></li>
                        <li><a><FaServicestack className='w-8 h-8 text-amber-400'/> </a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default MainLayout;