import React, { useContext } from 'react'
import ListWorks from './ListWorks';
import { LangContext } from '../Routes/MainRoutes';

const Portfolio = () => {
    const [lang] = useContext(LangContext);
    return (
        <div className='page'>
            <h1 className='heading'>{lang ? "Projects" : "Proyectos"}</h1>
            <p className='portfolio-subtitle'>{lang ? "A selection of real projects I've built" : "Una selección de proyectos reales que he construido"}</p>

            <ListWorks/>
        </div>
    )
}

export default Portfolio