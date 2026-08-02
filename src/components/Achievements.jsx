import React from 'react'
import { BiTrophy, BiRocket } from "react-icons/bi";
import { useLang } from '../context/LangContext';

const Achievements = () => {
    const { t } = useLang();

    return (
        <section className='achievements'>
            <h2 className='achievements-heading'>{t('achievements.heading')}</h2>
            <div className='achievements-grid'>
                <article className='achievement-card'>
                    <BiTrophy className='achievement-icon'/>
                    <div>
                        <h3>{t('achievements.winner.title')}</h3>
                        <p>{t('achievements.winner.description')}</p>
                    </div>
                </article>
                <article className='achievement-card'>
                    <BiRocket className='achievement-icon'/>
                    <div>
                        <h3>{t('achievements.finalist.title')}</h3>
                        <p>{t('achievements.finalist.description')}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Achievements
