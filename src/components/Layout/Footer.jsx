import React, { useContext } from 'react'
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { LangContext } from '../../Routes/MainRoutes';

const Footer = () => {
    const [lang] = useContext(LangContext);
    let year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p>Bruno Sena &copy; {year} &middot; {lang ? 'Frontend Developer' : 'Desarrollador Frontend'}</p>
        </footer>
    )
}

export default Footer