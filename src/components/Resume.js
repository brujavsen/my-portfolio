import { Fragment, useEffect, useState } from 'react'
import { BiLogoHtml5, BiLogoBootstrap, BiLogoCss3, BiLogoTailwindCss, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact } from "react-icons/bi";


const Resume = () => {

  const [data, setData] = useState({});

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
      <h1 className='heading'>Curriculum</h1>
      <div className='resume-page'>
        {/* Info Básica */}
        <div className='fbasis info-basic'>
          {data.length > 0 ? (
            data.map((about, index) => (
              <Fragment key={index}>
                <h2>{about.aboutMe.profile.title}</h2>
                <h2>{about.aboutMe.profile.name} {about.aboutMe.profile.surnames}</h2>
                <p>{about.aboutMe.profile.description}</p>
              </Fragment>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
        
        {/* Conocimientos */}
        <div className='fbasis know-cnt'>
          <div>
            <h3>Habilidades</h3>
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
            <h3>Idiomas</h3>
            {data.length > 0 ? (
              data.map((about, index) => (
                <section key={index}>
                  {about.knowledge.languages.map((skill, index) => (
                    <Fragment key={index}>
                      <p className='lang'>{skill.name} : <span>{skill.level}</span></p>
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
            <h3>Habilidades Blandas</h3>
            {data.length > 0 ? (
              data.map((about, index) => (
                <section key={index}>
                  {about.knowledge.softSkills.map((skill, index) => (
                    <Fragment key={index}>
                      <p>{skill.skill.name}</p>
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
          <h2>Experiencia</h2>
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
                      <p>{job.roles[0].challenges[0].description}</p>
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
          <h2>Educación</h2>
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