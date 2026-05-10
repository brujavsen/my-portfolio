import React, { useRef } from 'react';
import HeaderNav from './components/Layout/HeaderNav';
import Index from './components/Index';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Layout/Footer';
import { LangContext } from './Routes/MainRoutes';

function App() {
  const [lang, setLang] = React.useState(false);

  return (
    <LangContext.Provider value={[lang, setLang]}>
      <div className='layout'>
        
        {/* HEADER & NAV */}
        <HeaderNav/>

        {/* MAIN CONTENT - Single Page with Scroll */}
        <section className='content'>
          <div id="inicio">
            <Index/>
          </div>
          
          <div id="portfolio" style={{ paddingTop: '100px' }}>
            <Portfolio/>
          </div>
          
          <div id="resume" style={{ paddingTop: '100px' }}>
            <Resume/>
          </div>
          
          <div id="contact" style={{ paddingTop: '100px' }}>
            <Contact/>
          </div>
        </section>
        
        {/* FOOTER */}
        <Footer/>
      </div>
    </LangContext.Provider>
  );
}

export default App;
