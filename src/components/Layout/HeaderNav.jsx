import React from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useLang } from '../../context/LangContext';

const HeaderNav = () => {
    const { lang, setLang, t } = useLang();

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
                <a href='#inicio' onClick={(e) => handleScroll(e, 'inicio')} title={t('nav.backHome')}>B</a>
                <h3>Bruno Sena DEV</h3>
                <button className='eng-mode' onClick={()=> setLang(!lang)} title={t('nav.changeLang')}>{t('nav.langButton')}</button>
            </div>
            <input type='checkbox' id='check'/>
            <label htmlFor='check' className='icon icons'>
                <HiOutlineMenu id='menu-icon'/>
                <HiOutlineX id='close-icon'/>
            </label>
            <nav className='nav' id='nav'>
                <a style={{ '--i': 1 }} href='#inicio' onClick={(e) => handleScroll(e, 'inicio')}>{t('nav.home')}</a>

                <a style={{ '--i': 2 }} href='#portfolio' onClick={(e) => handleScroll(e, 'portfolio')}>{t('nav.projects')}</a>

                <a style={{ '--i': 3 }} href='#resume' onClick={(e) => handleScroll(e, 'resume')}>{t('nav.resume')}</a>

                <a style={{ '--i': 4 }} href='#contact' onClick={(e) => handleScroll(e, 'contact')}>{t('nav.contact')}</a>

            </nav>
        </header>
    )
}

export default HeaderNav