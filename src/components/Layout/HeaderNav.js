import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <NavLink to='/inicio'>B</NavLink>
                <h3>Bruno Sena DEV</h3>
                <p className='eng-mode'>ENG (IN PROCESS)</p>
            </div>
            <input type='checkbox' id='check'/>
            <label htmlFor='check' className='icon icons'>
                <HiOutlineMenu id='menu-icon'/>
                <HiOutlineX id='close-icon'/>
            </label>
            <nav className='nav' id='nav'>
                <NavLink style={{ '--i': 1 }} to='/inicio' className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>

                <NavLink style={{ '--i': 2 }}  to='/portfolio' className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>

                {/* <NavLink style={{ '--i': 3 }}  to='/services' className={({isActive}) => isActive ? "active" : ""}>Services</NavLink> */}

                {/* <NavLink style={{ '--i': 4 }}  to='/resources' className={({isActive}) => isActive ? "active" : ""}>Recursos</NavLink> */}

                {/* <NavLink style={{ '--i': 5 }}  to='/resume' className={({isActive}) => isActive ? "active" : ""}>Curriculum</NavLink> */}

                <NavLink style={{ '--i': 6 }}  to='/contact' className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>

            </nav>
        </header>
    )
}

export default HeaderNav