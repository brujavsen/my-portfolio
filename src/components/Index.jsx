import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ListWorks from './ListWorks'
import Achievements from './Achievements'
import { BiAt, BiRightArrowAlt } from "react-icons/bi";
import { LangContext } from '../Routes/MainRoutes';

const Index = () => {
    const [lang] = useContext(LangContext);

    return (
        <div className='home'>
            <span className='tag'>{lang ? 'Open to work' : 'Disponible para trabajar'}</span>

            <h1>
                {lang ? 
                    <>
                        <strong>Bruno Sena</strong> — Frontend Developer from Uruguay. I build real web products with React.
                    </>
                    : 
                    <>
                        <strong>Bruno Sena</strong> — Desarrollador Frontend en Uruguay. Construyo productos web reales con React.
                    </>
                }
            </h1>

            <h2 className='title'>
                {lang ?
                    <>
                        Finalist at Fondos NODO 2025. Currently building ClassBack, an educational platform. Looking for my first role in a development team.
                    </>
                    :
                    <>
                        Finalista en Fondos NODO 2025. Actualmente desarrollando ClassBack, una plataforma educativa. Busco mi primer rol en un equipo de desarrollo.
                    </>
                }
            </h2>

            <div className='cta-group'>
                <Link to="/portfolio" className='contact-wm'><BiRightArrowAlt/> {lang ? "See my work" : "Ver proyectos"}</Link>
                <Link to="/contact" className='contact-wm secondary'><BiAt/> {lang ? "Get in touch" : "Contacto"}</Link>
            </div>

            <Achievements />

            <section className='lasts-works'>
                <h2 className='heading'>{lang ? "Featured Projects" : "Proyectos Destacados"}</h2>
                <p>{lang ? "Real products, not just exercises" : "Productos reales, no solo ejercicios"}</p>

                <ListWorks limit="4"/>
            </section>
        </div>
    )
}

export default Index