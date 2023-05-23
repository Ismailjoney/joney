import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Nav/Nav';
import { FaHome, FaUserAlt,   FaShoppingBag, FaPenAlt, FaProjectDiagram, FaMailBulk } from "react-icons/fa";

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
                        <li><a href='/'><FaHome className='w-8 h-8 text-amber-400'/> </a></li>
                        <li><a href='#contact'><FaUserAlt className='w-8 h-8 text-amber-400'/> </a></li>
                        <li><a href='#service'><FaShoppingBag className='w-8 h-8 text-amber-400'/> </a></li>
                        <li><a href='#skill'><FaPenAlt className='w-8 h-8 text-amber-400'/> </a></li>
                        <li><a href='#project'><FaProjectDiagram className='w-8 h-8 text-amber-400'/> </a></li>
                        <li><a href='#mail'><FaMailBulk className='w-8 h-8 text-amber-400'/> </a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;