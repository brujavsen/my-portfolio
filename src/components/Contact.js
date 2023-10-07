import React from 'react'
import { HiMail, HiOutlinePhone } from "react-icons/hi";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const Contact = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:brudev97@gmail.com'>
          <input type='text' placeholder='Nombre'/>
          <input type='text' placeholder='Apellido'/>
          <input type='email' placeholder='Email'/>
          <textarea placeholder='Motivo de contacto...' />
          <input type='submit' value="Enviar"/>
      </form>

      <div className='contact-media'>
          <p><HiMail/> brunojavsena@gmail.com</p>
          <p><HiOutlinePhone/> 095048957</p>
          <a href='https://www.linkedin.com/in/bruno-sena-webdev' target='_blank' rel='noreferrer'><BiLogoLinkedin/></a>
          <a href='https://github.com/brujavsen' target='_blank' rel='noreferrer'><BiLogoGithub/></a> 
      </div>
    </div>
  )
}

export default Contact