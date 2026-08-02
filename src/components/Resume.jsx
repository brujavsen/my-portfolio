import { Fragment, useEffect, useState } from 'react'
import { BiLogoHtml5, BiLogoBootstrap, BiLogoCss3, BiLogoTailwindCss, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useLang } from '../context/LangContext';

const Resume = () => {
  const { lang, t } = useLang();
  const [data, setData] = useState({});
  const [isExpanded, setIsExpanded] = useState(true);

  async function fetchResume () {
    try {
      const response = await fetch('/myresume.json');
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Houston, we have a problem: ', error);
    }
  }

  useEffect(() => {
    const dataResume = async () => {
      const data = await fetchResume();
      setData(data);
    }

    dataResume();
  }, []);


  return (
    <div className='page'>
      <div className='section-header' onClick={() => setIsExpanded(!isExpanded)}>
        <h1 className='heading'>{t('resume.heading')}</h1>
        {isExpanded ? <BiChevronUp className='toggle-icon'/> : <BiChevronDown className='toggle-icon'/>}
      </div>
      {isExpanded && (
        <div className='resume-page'>
          {/* Info Básica */}
          <div className='fbasis info-basic'>
            {data.length > 0 ? (
              data.map((about, index) => (
                <Fragment key={index}>
                  <h2>{lang ? (about.aboutMe.profile.titleEng || about.aboutMe.profile.title) : about.aboutMe.profile.title}</h2>
                  <h2>{about.aboutMe.profile.name} {about.aboutMe.profile.surnames}</h2>
                  <p>{lang ? about.aboutMe.profile.descriptionEng : about.aboutMe.profile.description}</p>
                </Fragment>
              ))
            ) : (
              <div>{t('resume.loading')}</div>
            )}
          </div>

          {/* Conocimientos */}
          <div className='fbasis know-cnt'>
            <div className='skills-cnt'>
              <h3>{t('resume.skills')}</h3>
              <i><BiLogoHtml5/></i>
              <i><BiLogoCss3/></i>
              <i><BiLogoJavascript/></i>
              <i><BiLogoBootstrap/></i>
              <i><BiLogoTailwindCss/></i>
              <i><BiLogoMongodb/></i>
              <i><BiLogoNodejs/></i>
              <i><BiLogoReact/></i>
            </div>
            {/* Idiomas */}
            <div>
              <h3>{t('resume.languages')}</h3>
              {data.length > 0 ? (
                data.map((about, index) => (
                  <section key={index}>
                    {about.knowledge.languages.map((skill, index) => (
                      <Fragment key={index}>
                        <p className='lang'>{lang ? skill.nameEng : skill.name} : <span>{lang ? skill.levelEng : skill.level}</span></p>
                      </Fragment>
                    ))}
                  </section>
                ))
              ) : (
                <div>{t('resume.loading')}</div>
              )}
            </div>
          </div>
          {/* Educacion */}
          <div className='fbasis education'>
            <h2>{t('resume.certificates')}</h2>
            <div>
              {data.length > 0 ? (
                data.map((about, index) => (
                  <section key={index}>
                    {about.knowledge.studies.map((study, index) => (
                      <div className='card' key={index}>
                        <p>{lang ? (study.nameEng || study.name) : study.name}</p>
                        <p>{t('resume.institution')}: {study.institution.name}</p>
                        <p>{t('resume.date')}: {study.startDate}</p>
                        {study.institution.URL && <a href={study.institution.URL} target='_blank' rel='noreferrer'>{t('resume.viewCertificate')}</a>}
                      </div>
                    ))}
                  </section>
                ))
              ) : (
                <div>{t('resume.loading')}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Resume