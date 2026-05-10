import React, { useContext } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { LangContext } from '../../Routes/MainRoutes';

const HeaderNav = () => {
    const [lang, setLang] = useContext(LangContext);
    
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='header'>
            <div className='logo'>
                <a href='#inicio' onClick={(e) => handleScroll(e, 'inicio')} title={lang ? 'Back Home' : 'Volver al inicio'}>B</a>
                <h3>Bruno Sena DEV</h3>
                <button className='eng-mode' onClick={()=> setLang(!lang)} title={lang ? 'Change Lang' : 'Cambiar Idioma'}>{lang ? 'ENG' : 'ESP'}</button>
            </div>
            <input type='checkbox' id='check'/>
            <label htmlFor='check' className='icon icons'>
                <HiOutlineMenu id='menu-icon'/>
                <HiOutlineX id='close-icon'/>
            </label>
            <nav className='nav' id='nav'>
                <a style={{ '--i': 1 }} href='#inicio' onClick={(e) => handleScroll(e, 'inicio')}>{lang ? 'Home' : 'Inicio'}</a>

                <a style={{ '--i': 2 }} href='#portfolio' onClick={(e) => handleScroll(e, 'portfolio')}>{lang ? 'Projects' : 'Proyectos'}</a>

                <a style={{ '--i': 3 }} href='#resume' onClick={(e) => handleScroll(e, 'resume')}>{lang ? 'Resume' : 'Curriculum'}</a>

                <a style={{ '--i': 4 }} href='#contact' onClick={(e) => handleScroll(e, 'contact')}>{lang ? 'Contact' : 'Contacto'}</a>

            </nav>
        </header>
    )
}

export default HeaderNav