import React, { useContext } from 'react'
import { works } from '../data/works'
import { Link } from 'react-router-dom';
import { LangContext } from '../Routes/MainRoutes';

const ListWorks = ({limit}) => {
    const [lang] = useContext(LangContext);

    return (
        <section className='works'>
            {
                works.slice(0, limit).map(work => 
                    (
                        <article key={work.id} className='work-item'>
                            <div className='mask'>
                                <picture>
                                    <source srcSet={'/images/' + work.image + '.webp'} type='image/webp'/>
                                    <img loading='lazy' src={'/images/' + work.image + '.png'} alt={lang ? work.nameEng : work.name}/>
                                </picture>
                            </div>
                            <div className='info'>
                                <span>{lang ? (work.categoryEng || work.category) : work.category}</span>
                                {work.status && <span className='status-badge'>{lang ? (work.statusEng || work.status) : work.status}</span>}
                                <h2>{lang ? work.nameEng : work.name}</h2>
                                <h3>{work.technology}</h3>
                                <Link to={'/project/' + work.id}>{lang ? 'Learn more' : 'Conocer más'}</Link>
                            </div>
                        </article>
                    )
                )
            }
        </section>
    )
}

export default ListWorks