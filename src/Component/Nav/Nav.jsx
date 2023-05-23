import React from 'react';
import {  FaServer } from "react-icons/fa";

const Nav = () => {
    return (
        <div className="navbar ">
             
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label> */}
                     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><FaServer/></label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content  rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;