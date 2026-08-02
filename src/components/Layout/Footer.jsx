import React from 'react'
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { useLang } from '../../context/LangContext';

const Footer = () => {
    const { t } = useLang();
    let year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p>Bruno Sena &copy; {year} &middot; {t('footer.role')}</p>
        </footer>
    )
}

export default Footer