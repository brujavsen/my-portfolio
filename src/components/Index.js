import React from 'react'
import { Link } from 'react-router-dom'
import ListWorks from './ListWorks'
import swal from 'sweetalert'
import { BiAt, BiBookOpen } from "react-icons/bi";

const Index = () => {

    const resumeLink = 'https://mnf.red/a8236207-13c1-4cc7-a9ee-63ada1240ecb';
    const handleClick = (e, url) => {
        e.preventDefault();
        swal({
            title: "¿Deseas continuar?",
            text: "Vas a ser redireccionado a otro sitio web",
            icon: "warning",
            buttons: true,
        }).then((willRedirect) => {
            if (willRedirect) {
                window.location.href = url;
            } else {
                swal("Cancelaste la acción");
            }
        });
    };
    return (
        <div className='home'>
            <h1>
                Hola, me llamo <strong>Bruno Sena</strong>, soy de Uruguay. Soy desarrollador web con experiencia en la creación de sitios web dinámicos y funcionales. Ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en todo tipo de proyectos web.
            </h1>

            <h2 className='title'>
                Mi enfoque se centra en escribir código limpio y eficiente, la optimización de la experiencia del usuario y la resolución de problemas de manera creativa. 
            </h2>
            
            <Link to="/contact" className='contact-wm'><BiAt/> Contacta conmigo</Link>

            <a className='resume-link' href={resumeLink} onClick={e => handleClick(e, resumeLink)}><BiBookOpen/> CV</a>

            <section className='lasts-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Aquí verás algunos de mis proyectos como desarrollador web</p>

                <ListWorks limit="2"/>
            </section>
        </div>
    )
}

export default Index