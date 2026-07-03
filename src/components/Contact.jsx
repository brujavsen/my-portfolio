import React, { useState, useContext } from 'react'
import { HiMail } from "react-icons/hi";
import { BiLogoLinkedin, BiLogoGithub, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { LangContext } from '../Routes/MainRoutes';

const Contact = () => {
  const [lang, setLang] = useContext(LangContext);
  const [message, setMessage] = useState({});
  const [error, setError] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);

  const getInfoMessage = e => {
    e.preventDefault();
    let info = e.target;
    
    const name = info.name.value.trim();
    const surname = info.surname.value.trim();
    const description = info.description.value.trim();

    // OWASP A4: Insecure Design / Input Validation
    if (!name || name.length > 50 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]*$/.test(name)) {
      setError(lang ? 'Invalid name format or length.' : 'Formato o longitud de nombre inválido.');
      return;
    }
    if (!surname || surname.length > 50 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]*$/.test(surname)) {
      setError(lang ? 'Invalid surname format or length.' : 'Formato o longitud de apellido inválido.');
      return;
    }
    if (!description || description.length > 500) {
      setError(lang ? 'Invalid description length.' : 'Longitud de descripción inválida.');
      return;
    }
    setError('');

    // Securely encode URI components to prevent parameter injection
    const safeSubject = encodeURIComponent(`Hello, I'm ${name} ${surname}`);
    const safeBody = encodeURIComponent(description);
    
    window.location.href = `mailto:brudev97@gmail.com?subject=${safeSubject}&body=${safeBody}`;
  }

  return (
    <div className='page'>
      <div className='section-header' onClick={() => setIsExpanded(!isExpanded)}>
        <h1 className='heading'>{lang ? 'Contact' : 'Contacto'}</h1>
        {isExpanded ? <BiChevronUp className='toggle-icon'/> : <BiChevronDown className='toggle-icon'/>}
      </div>
      {isExpanded && (
        <>
          <form className='contact' onSubmit={getInfoMessage}>
              {error && <div style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
              <input type='text' name='name' placeholder={lang ? 'Name' : 'Nombre'} required maxLength="50" />
              <input type='text' name='surname' placeholder={lang ? 'Surname' : 'Apellido'} required maxLength="50" />
              <textarea name='description' placeholder={lang ? 'Contact Reason...' : 'Motivo de Contacto...'} required maxLength="500" />
              <input type='submit' value={lang ? 'Send' : 'Enviar'}/>
          </form>
          <div className='contact-media'>
              <h2>{lang ? 'Contact me' : 'Contáctame'}</h2>
              <a href='https://www.linkedin.com/in/bruno-sena-webdev' target='_blank' rel='noreferrer'><BiLogoLinkedin/></a>
              <a href='https://github.com/brujavsen' target='_blank' rel='noreferrer'><BiLogoGithub/></a> 
          </div>
        </>
      )}
    </div>
  )
}

export default Contact