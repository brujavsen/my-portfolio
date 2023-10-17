import React, { useState } from 'react'
import { HiMail, HiOutlinePhone } from "react-icons/hi";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const Contact = () => {

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

      <h1 className='heading'>Contacto</h1>

      <form className='contact' action={`mailto:brudev97@gmail.com?subject=Hello, I'm ${message.name + ' ' + message.surname}&body=${message.description}`} onSubmit={getInfoMessage}>
          <input type='text' name='name' placeholder='Nombre'/>
          <input type='text' name='surname' placeholder='Apellido'/>
          <textarea name='description' placeholder='Motivo de contacto...' />
          <input type='submit' value="Enviar"/>
      </form>
      {/* action='mailto:brudev97@gmail.com?subject=Asunto del correo&body=Cuerpo del mensaje'  */}
      <div className='contact-media'>
          <p><HiMail/> brudev97@gmail.com</p>
          <p><HiOutlinePhone/> 095048957</p>
          <a href='https://www.linkedin.com/in/bruno-sena-webdev' target='_blank' rel='noreferrer'><BiLogoLinkedin/></a>
          <a href='https://github.com/brujavsen' target='_blank' rel='noreferrer'><BiLogoGithub/></a> 
      </div>
    </div>
  )
}

export default Contact