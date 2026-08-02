import React, { useState } from 'react'
import ListWorks from './ListWorks';
import { useLang } from '../context/LangContext';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Portfolio = () => {
    const { t } = useLang();
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className='page'>
            <div className='section-header' onClick={() => setIsExpanded(!isExpanded)}>
                <h1 className='heading'>{t('portfolio.heading')}</h1>
                {isExpanded ? <BiChevronUp className='toggle-icon'/> : <BiChevronDown className='toggle-icon'/>}
            </div>
            {isExpanded && (
                <>
                    <p className='portfolio-subtitle'>{t('portfolio.subtitle')}</p>
                    <ListWorks/>
                </>
            )}
        </div>
    )
}

export default Portfolio