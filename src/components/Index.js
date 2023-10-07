import React from 'react'
import { Link } from 'react-router-dom'
import ListWorks from './ListWorks'

const Index = () => {
    return (
        <div className='home'>
            <h1>
                Hola, me llamo <strong>Bruno Sena</strong>, soy de Uruguay. Soy desarrollador web con experiencia en la creación de sitios web dinámicos y funcionales. Ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en todo tipo de proyectos web.
            </h1>

            <h2 className='title'>
                Mi enfoque se centra en escribir código limpio y eficiente, la optimización de la experiencia del usuario y la resolución de problemas de manera creativa. <Link to="/contact">Contacta conmigo</Link>
            </h2>

            <section className='lasts-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Aquí verás algunos de mis proyectos como desarrollador web</p>

                <ListWorks limit="2"/>
            </section>
        </div>
    )
}

export default Index