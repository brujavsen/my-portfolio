import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { LangContext } from '../../Routes/MainRoutes';

const HeaderNav = () => {
    const [lang, setLang] = useContext(LangContext);
    return (
        <header className='header'>
            <div className='logo'>
                <NavLink to='/inicio' title={lang ? 'Back Home' : 'Volver al inicio'}>B</NavLink>
                <h3>Bruno Sena DEV</h3>
                <button className='eng-mode' onClick={()=> setLang(!lang)} title={lang ? 'Change Lang' : 'Cambiar Idioma'}>{lang ? 'ENG' : 'ESP'}</button>
            </div>
            <input type='checkbox' id='check'/>
            <label htmlFor='check' className='icon icons'>
                <HiOutlineMenu id='menu-icon'/>
                <HiOutlineX id='close-icon'/>
            </label>
            <nav className='nav' id='nav'>
                <NavLink style={{ '--i': 1 }} to='/inicio' className={({isActive}) => isActive ? "active" : ""}>{lang ? 'Home' : 'Inicio'}</NavLink>

                <NavLink style={{ '--i': 2 }}  to='/portfolio' className={({isActive}) => isActive ? "active" : ""}>{lang ? 'Portfolio' : 'Portafolio'}</NavLink>

                {/* <NavLink style={{ '--i': 3 }}  to='/services' className={({isActive}) => isActive ? "active" : ""}>Services</NavLink> */}

                {/* <NavLink style={{ '--i': 4 }}  to='/resources' className={({isActive}) => isActive ? "active" : ""}>Recursos</NavLink> */}

                <NavLink style={{ '--i': 5 }}  to='/resume' className={({isActive}) => isActive ? "active" : ""}>{lang ? 'Resume' : 'Curriculum'}</NavLink>

                <NavLink style={{ '--i': 6 }}  to='/contact' className={({isActive}) => isActive ? "active" : ""}>{lang ? 'Contact' : 'Contacto'}</NavLink>

            </nav>
        </header>
    )
}

export default HeaderNav