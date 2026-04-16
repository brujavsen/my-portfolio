import React, { useContext } from 'react'
import { BiTrophy, BiRocket } from "react-icons/bi";
import { LangContext } from '../Routes/MainRoutes';

const Achievements = () => {
    const [lang] = useContext(LangContext);

    return (
        <section className='achievements'>
            <h2 className='achievements-heading'>{lang ? 'Achievements' : 'Logros'}</h2>
            <div className='achievements-grid'>
                <article className='achievement-card'>
                    <BiTrophy className='achievement-icon'/>
                    <div>
                        <h3>{lang ? 'Finalist — Fondos NODO 2025' : 'Finalista — Fondos NODO 2025'}</h3>
                        <p>{lang 
                            ? 'HandUbe was selected as a finalist in the NODO funding program, competing against multiple projects at a national level.' 
                            : 'HandUbe fue seleccionado como finalista en el programa de financiamiento NODO, compitiendo contra múltiples proyectos a nivel nacional.'}
                        </p>
                    </div>
                </article>
                <article className='achievement-card'>
                    <BiRocket className='achievement-icon'/>
                    <div>
                        <h3>{lang ? 'Building ClassBack — Fondos NODO 2026' : 'Desarrollando ClassBack — Fondos NODO 2026'}</h3>
                        <p>{lang 
                            ? 'Educational platform in active development. A social network for academic content where students share and discover study resources.' 
                            : 'Plataforma educativa en desarrollo activo. Red social de contenido académico donde estudiantes comparten y descubren recursos de estudio.'}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Achievements
