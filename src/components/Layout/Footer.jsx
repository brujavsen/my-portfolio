import React, { useContext } from 'react'
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { LangContext } from '../../Routes/MainRoutes';

const Footer = () => {
    const [lang] = useContext(LangContext);
    let year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-links'>
                <a href='https://www.linkedin.com/in/bruno-sena-webdev' target='_blank' rel='noreferrer' title='LinkedIn'><BiLogoLinkedin/></a>
                <a href='https://github.com/brujavsen' target='_blank' rel='noreferrer' title='GitHub'><BiLogoGithub/></a>
            </div>
            <p>Bruno Sena &copy; {year} &middot; {lang ? 'Frontend Developer' : 'Desarrollador Frontend'}</p>
        </footer>
    )
}

export default Footer