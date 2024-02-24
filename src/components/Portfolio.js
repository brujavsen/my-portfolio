import React, {useContext} from 'react'
import ListWorks from './ListWorks';
import { LangContext } from '../Routes/MainRoutes';

const Portfolio = () => {
    const [lang, setLang] = useContext(LangContext);
    return (
        <div className='page'>
            <h1 className='heading'>{lang ? "Portfolio" : "Portafolio"}</h1>

            <ListWorks/>
        </div>
    )
}

export default Portfolio