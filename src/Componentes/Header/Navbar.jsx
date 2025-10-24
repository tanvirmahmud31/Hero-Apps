import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="shadow-sm bg-base-100">
            <div className="lg:w-11/12 lg:mx-auto flex items-center justify-between py-3 px-4">


                <div className="flex items-center gap-3">

                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow ">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/apps">Apps</NavLink></li>
                            <li><NavLink to="/installation">Installation</NavLink></li>

                            <li>
                                <a
                                    href="https://github.com/tanvirmahmud31"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ background: "linear-gradient(to right, #632EE3, #9F62F2)" }}
                                    className="btn text-white rounded-xl w-full flex justify-center gap-2 mt-2"
                                >
                                    <FaGithub /> Contribute
                                </a>
                            </li>
                        </ul>
                    </div>


                    <NavLink to="/" className="flex items-center gap-2">
                        <img className="w-10" src={logo} alt="Logo" />
                        <span className="text-xl text-blue-600 font-bold">HERO.IO</span>
                    </NavLink>
                </div>


                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="menu menu-horizontal gap-6 items-center">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-4 border-purple-600 pb-1 font-semibold"
                                        : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/apps"
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-4 border-purple-600 pb-1 font-semibold"
                                        : ""
                                }
                            >
                                Apps
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/installation"
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-4 border-purple-600 pb-1 font-semibold"
                                        : ""
                                }
                            >
                                Installation
                            </NavLink>
                        </li>
                    </ul>
                </div>


                <div className="hidden lg:block">
                    <a
                        href="https://github.com/tanvirmahmud31"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ background: "linear-gradient(to right, #632EE3, #9F62F2)" }}
                        className="btn text-white rounded-xl flex items-center gap-2"
                    >
                        <FaGithub /> Contribute
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
