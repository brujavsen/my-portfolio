import React, { useState } from 'react'
import { HiMail } from "react-icons/hi";
import { BiLogoLinkedin, BiLogoGithub, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useLang } from '../context/LangContext';

const Contact = () => {
  const { t } = useLang();
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
      setError(t('contact.errors.name'));
      return;
    }
    if (!surname || surname.length > 50 || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]*$/.test(surname)) {
      setError(t('contact.errors.surname'));
      return;
    }
    if (!description || description.length > 500) {
      setError(t('contact.errors.description'));
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
        <h1 className='heading'>{t('contact.heading')}</h1>
        {isExpanded ? <BiChevronUp className='toggle-icon'/> : <BiChevronDown className='toggle-icon'/>}
      </div>
      {isExpanded && (
        <>
          <form className='contact' onSubmit={getInfoMessage}>
              {error && <div style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
              <input type='text' name='name' placeholder={t('contact.name')} required maxLength="50" />
              <input type='text' name='surname' placeholder={t('contact.surname')} required maxLength="50" />
              <textarea name='description' placeholder={t('contact.reason')} required maxLength="500" />
              <input type='submit' value={t('contact.send')}/>
          </form>
          <div className='contact-media'>
              <h2>{t('contact.contactMe')}</h2>
              <a href='https://www.linkedin.com/in/bruno-sena-webdev' target='_blank' rel='noreferrer'><BiLogoLinkedin/></a>
              <a href='https://github.com/brujavsen' target='_blank' rel='noreferrer'><BiLogoGithub/></a> 
          </div>
        </>
      )}
    </div>
  )
}

export default Contact