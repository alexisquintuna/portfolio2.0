import React from 'react';
import Logo from "../../images/AQlogo.png"
import "./header.css"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='w-full fixed top-0 z-50 px-8 flex justify-between items-center h-24 md:h-36 overflow-hidden'>
            <NavLink to="/" className="w-1/3 logo-container">
                <img src={Logo} alt="AQ Logo" className='logo w-24 md:w-40 h-full md:h-40' />
            </NavLink>
            <div className="w-1/3 max-[770px]:hidden text-footer flex justify-center">
                <p>Based in Columbus, OH</p>
            </div>
            <div className=' w-1/3 flex justify-end'>
                <div className='text-whiteColor flex gap-4 text-navText'>
                    <Link className="header_projects line__across-header" to="/projects">Projects</Link>
                    <a className="header_contact line__across-header" href="/#contact">Contact</a>
                    <Link className="header_about line__across-header" to="/about">About</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;