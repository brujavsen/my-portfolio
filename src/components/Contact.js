import React, { useState, useContext } from 'react'
import { HiMail } from "react-icons/hi";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { LangContext } from '../Routes/MainRoutes';

const Contact = () => {
  const [lang, setLang] = useContext(LangContext);
  const [message, setMessage] = useState({});

  const getInfoMessage = e => {

    let info = e.target;
    
    let infoMsg = {
      name: info.name.value,
      surname: info.surname.value,
      description: info.description.value 
    }

    setMessage(infoMsg);
  }

  return (
    <div className='page'>

      <h1 className='heading'>{lang ? 'Contact' : 'Contacto'}</h1>

      <form className='contact' action={`mailto:brudev97@gmail.com?subject=Hello, I'm ${message.name + ' ' + message.surname}&body=${message.description}`} onSubmit={getInfoMessage}>
          <input type='text' name='name' placeholder={lang ? 'Name' : 'Nombre'}/>
          <input type='text' name='surname' placeholder={lang ? 'Surname' : 'Apellido'}/>
          <textarea name='description' placeholder={lang ? 'Contact Reason...' : 'Motivo de Contacto...'} />
          <input type='submit' value={lang ? 'Send' : 'Enviar'}/>
      </form>
      {/* action='mailto:brudev97@gmail.com?subject=Asunto del correo&body=Cuerpo del mensaje'  */}
      <div className='contact-media'>
          <h2 style={{color:'white'}}>{lang ? 'Contact me' : 'Contáctame'}</h2>
          {/* <p><HiMail/> brudev97@gmail.com</p> */}
          <a href='https://www.linkedin.com/in/bruno-sena-webdev' target='_blank' rel='noreferrer'><BiLogoLinkedin/></a>
          <a href='https://github.com/brujavsen' target='_blank' rel='noreferrer'><BiLogoGithub/></a> 
      </div>
    </div>
  )
}

export default Contact