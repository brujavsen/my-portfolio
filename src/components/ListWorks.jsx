import React from 'react'
import { works } from '../data/works'
import { Link } from 'react-router-dom';

const ListWorks = ({limit}) => {

    return (
        <section className='works'>
            {
                works.slice(0, limit).map(work => 
                    (
                        <article key={work.id} className='work-item'>
                            <div className='mask'>
                                <picture>
                                    <source srcSet={'/images/' + work.image + '.webp'} type='image/webp'/>
                                    <img loading='lazy' src={'/images/' + work.image + '.png'} alt={'work img' + work.id}/>
                                </picture>
                            </div>
                            <div className='info'>
                                <span>{work.category}</span>
                                <h2>{work.name}</h2>
                                <h3>{work.technology}</h3>
                                <Link to={'/project/' + work.id}>Conocer más</Link>
                            </div>
                        </article>
                    )
                )
            }
        </section>
    )
}

export default ListWorks