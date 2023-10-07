import React from 'react'

const Services = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>

      <section className='services'>

        <article className='service'>
          <h2>Diseño Web Creativo</h2>
          <p>Mi enfoque se centra en la creación de diseños únicos y a medida que reflejen la identidad de tu marca y llamen la atención de tu audiencia.</p>
        </article>

        <article className='service'>
          <h2>Desarrollo Web Eficiente</h2>
          <p>Mi objetivo es proporcionar soluciones técnicas sólidas que mejoren la usabilidad y la interacción del usuario.</p>
        </article>

        <article className='service'>
          <h2>Posicionamiento Web</h2>
          <p>Optimizo sitios web para mejorar su visibilidad en los motores de búsqueda. Utilizando estrategias de SEO probadas, trabajo para aumentar la clasificación de tu sitio web y atraer tráfico de calidad.</p>
        </article>

      </section>
    </div>
  )
}

export default Services