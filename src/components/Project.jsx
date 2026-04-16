import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { works } from '../data/works';
import { LangContext } from '../Routes/MainRoutes';

const Project = () => {
    const [lang] = useContext(LangContext);
    const [project, setProject] = useState({});
    const params = useParams();

    useEffect(() => {
        let found = works.filter(work => work.id === params.id);
        setProject(found[0]);
    }, [params.id]);

    return (
        <div className='page page-work'>
            <div className='mask'>
                <picture>
                    <source srcSet={'/images/' + project.image + '.webp'} type='image/webp'/>
                    <img loading='lazy' src={'/images/' + project.image + '.png'} alt={lang ? project.nameEng : project.name}/>
                </picture>
            </div>
            {project.status && <span className='project-status'>{lang ? (project.statusEng || project.status) : project.status}</span>}
            <h1 className='heading'>{lang ? project.nameEng : project.name}</h1>
            <p className='tech'>{project.technology}</p>
            <p>{lang ? (project.descriptionEng || project.description) : project.description}</p>
            {project.url && <a href={project.url} target='_blank' rel='noreferrer'>{lang ? 'Visit project' : 'Ir al proyecto'}</a>}
        </div>
    )
}

export default Project