import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to={'/'}>Homepage</NavLink>
                            <NavLink to={'/about'}>about</NavLink>
                            <NavLink to={'/contact'}>contact</NavLink>
                            <NavLink to={'/service'}>service</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className={'mx-2 font-bold text-xl'} to={'/'}>Homepage</NavLink>
                        <NavLink className={'mx-2 font-bold text-xl'} to={'/about'}>about</NavLink>
                        <NavLink className={'mx-2 font-bold text-xl'} to={'/contact'}>contact</NavLink>
                        <NavLink className={'mx-2 font-bold text-xl'} to={'/service'}>service</NavLink>
                        <NavLink className={'mx-2 font-bold text-xl'} to={'/users'}>users</NavLink>
                        <NavLink className={'mx-2 font-bold text-xl'} to={'/posts'}>posts</NavLink>
                        <NavLink className={'mx-2 font-bold text-xl'} to={'/todos'}>todos</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;