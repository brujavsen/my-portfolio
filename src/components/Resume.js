import { Fragment, useEffect, useState, useContext } from 'react'
import { BiLogoHtml5, BiLogoBootstrap, BiLogoCss3, BiLogoTailwindCss, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiCaretDownCircle, BiCaretUpCircle } from "react-icons/bi";
import { LangContext } from '../Routes/MainRoutes';

const Resume = () => {
  const [lang, setLang] = useContext(LangContext);
  const [data, setData] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpanded(true);
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleCollapse = (index) => {
    if (index === expandedIndex) {
      setExpanded(false);
      setExpandedIndex(null);
    }
  };

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
      <h1 className='heading'>{lang ? 'Resume' : 'Currículum'}</h1>
      <div className='resume-page'>
        {/* Info Básica */}
        <div className='fbasis info-basic'>
          {data.length > 0 ? (
            data.map((about, index) => (
              <Fragment key={index}>
                <h2>{about.aboutMe.profile.title}</h2>
                <h2>{about.aboutMe.profile.name} {about.aboutMe.profile.surnames}</h2>
                <p>{lang ? about.aboutMe.profile.descriptionEng : about.aboutMe.profile.description}</p>
              </Fragment>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
        
        {/* Conocimientos */}
        <div className='fbasis know-cnt'>
          <div className='skills-cnt'>
            <h3>{lang ? 'Skills' : 'Habilidades'}</h3>
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
            <h3>{lang ? 'Languages' : 'Idiomas'}</h3>
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
              <div>Loading...</div>
            )}
          </div>
          {/* Habilidades Blandas */}
          <div>
            <h3>{lang ? "Soft Skills" : "Habilidades Blandas"}</h3>
            {data.length > 0 ? (
              data.map((about, index) => (
                <section key={index}>
                  {about.knowledge.softSkills.map((skill, index) => (
                    <Fragment key={index}>
                      <p className='lang'>{lang ? skill.skill.nameEng :skill.skill.name}</p>
                    </Fragment>
                  ))}
                </section>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        {/* Experiencias */}
        <div className='fbasis exp-cnt'>
          <h2>{lang ? "Experience" : "Experiencia"}</h2>
          <div>
            {data.length > 0 ? (
              data.map((about, index) => (
                <section key={index}>
                  {about.experience.jobs.map((job, index) => (
                    <div className='card' key={index}>
                      <h3>Rol: <span>{job.roles[0].name}</span></h3>
                      <h3>Empresa: <span>{job.organization.name}</span></h3>
                      <img src={job.organization.image.link} alt={job.organization.image.alt}/>
                      <div>
                        <span>Fecha: </span>
                        <time>{job.roles[0].startDate}</time>
                        {" / "}
                        <time>{job.roles[0].finishDate}</time>
                      </div>
                      <hr/>
                      <p className={expandedIndex === index ? 'expanded' : 'desc-rol'}>{job.roles[0].challenges[0].description}</p>
                      {expandedIndex === index ?
                        <BiCaretUpCircle className='btn-open-card' onClick={() => handleCollapse(index)}/>
                        :
                        <BiCaretDownCircle className='btn-open-card' onClick={() => handleExpand(index)}/>
                      }
                    </div>
                  ))}
                </section>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        {/* Educacion */}
        <div className='fbasis education'>
          <h2>{lang ? "Certificates" : "Certificados"}</h2>
          <div>
            {data.length > 0 ? (
              data.map((about, index) => (
                <section key={index}>
                  {about.knowledge.studies.map((study, index) => (
                    <div className='card' key={index}>
                      <p>{study.name}</p>
                      <p>Institución: {study.institution.name}</p>
                      <p>Fecha: {study.startDate}</p>
                      <a href={study.institution.URL} target='_blank' rel='noreferrer'>Certificado</a>
                    </div>
                  ))}
                </section>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume