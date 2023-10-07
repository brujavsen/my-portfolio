import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { BiMoon } from "react-icons/bi";

const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>B</span>
                <h3>Bruno Sena DEV</h3>
                <BiMoon className='dark-mode'/>
                <p className='eng-mode'>ENG (IN PROCESS)</p>
            </div>
            <input type='checkbox' id='check'/>
            <label htmlFor='check' id='icon' className='icons'>
                <HiOutlineMenu id='menu-icon'/>
                <HiOutlineX id='close-icon'/>
            </label>
            <nav className='nav' id='nav'>
                <NavLink style={{ '--i': 1 }} to='/inicio' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>

                <NavLink style={{ '--i': 2 }}  to='/portfolio' className={({isActive}) => isActive ? "active" : ""}>Portfolio</NavLink>

                <NavLink style={{ '--i': 3 }}  to='/services' className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>

                <NavLink style={{ '--i': 4 }}  to='/resources' className={({isActive}) => isActive ? "active" : ""}>Resources</NavLink>

                <NavLink style={{ '--i': 5 }}  to='/resume' className={({isActive}) => isActive ? "active" : ""}>My|Resume</NavLink>

                <NavLink style={{ '--i': 6 }}  to='/contact' className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>

            </nav>
        </header>
    )
}

export default HeaderNav