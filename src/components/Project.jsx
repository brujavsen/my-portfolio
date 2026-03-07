import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { works } from '../data/works';

const Project = () => {

    const [project, setProject] = useState({});
    const params = useParams();

    useEffect(()=>{
        let project = works.filter(work => work.id === params.id);
        setProject(project[0]);
    }, []);

    return (
        <div className='page page-work'>
            <div className='mask'>
                <picture>
                    <source srcSet={'/images/' + project.image + '.webp'} type='image/webp'/>
                    <img loading='lazy' src={'/images/' + project.image + '.png'} alt={'work img' + project.id}/>
                </picture>
            </div>
            <h1 className='heading'>{project.name}</h1>
            <p>{project.technology}</p>
            <p>{project.description}</p>
            <a href={project.url} target='_blank' rel='noreferrer'>Ir al proyecto</a>
        </div>
    )
}

export default Project