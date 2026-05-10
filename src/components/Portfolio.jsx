import React, { useContext, useState } from 'react'
import ListWorks from './ListWorks';
import { LangContext } from '../Routes/MainRoutes';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Portfolio = () => {
    const [lang] = useContext(LangContext);
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className='page'>
            <div className='section-header' onClick={() => setIsExpanded(!isExpanded)}>
                <h1 className='heading'>{lang ? "Projects" : "Proyectos"}</h1>
                {isExpanded ? <BiChevronUp className='toggle-icon'/> : <BiChevronDown className='toggle-icon'/>}
            </div>
            {isExpanded && (
                <>
                    <p className='portfolio-subtitle'>{lang ? "A selection of real projects I've built" : "Una selección de proyectos reales que he construido"}</p>
                    <ListWorks/>
                </>
            )}
        </div>
    )
}

export default Portfolio