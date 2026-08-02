import React from 'react'
import Achievements from './Achievements'
import { BiAt, BiRightArrowAlt } from "react-icons/bi";
import { useLang } from '../context/LangContext';

const Index = () => {
    const { t } = useLang();

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='home'>
            <span className='tag'>{t('hero.tag')}</span>

            <h1>
                <strong>{t('hero.name')}</strong> {t('hero.titleAfter')}
            </h1>

            <h2 className='title'>
                {t('hero.subtitle')}
            </h2>

            <div className='cta-group'>
                <a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className='contact-wm'><BiRightArrowAlt/> {t('hero.seeWork')}</a>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className='contact-wm secondary'><BiAt/> {t('hero.getInTouch')}</a>
            </div>

            <Achievements />
        </div>
    )
}

export default Index