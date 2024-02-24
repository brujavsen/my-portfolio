import React, { useState } from 'react'
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Index from '../components/Index';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import HeaderNav from '../components/Layout/HeaderNav';
import Footer from '../components/Layout/Footer';
import Project from '../components/Project';
import Resources from '../components/Resources';
export const LangContext = React.createContext();

const MainRoutes = () => {

    const [lang, setLang] = useState(false);
    return (
        <LangContext.Provider value={[lang, setLang]}>
            <BrowserRouter>
                {/* HEADER & NAV */}
                <HeaderNav/>

                {/* MAIN CONTENT */}
                <section className='content'>
                    <Routes>
                        <Route path='/' element={<Navigate to="/inicio"/>} />
                        <Route path='/inicio' element={<Index/>} />
                        <Route path='/portfolio' element={<Portfolio/>} />
                        <Route path='/services' element={<Services/>} />
                        <Route path='/resume' element={<Resume/>} />
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/project/:id' element={<Project/>} />
                        <Route path='/resources' element={<Resources/>} />
                        <Route path='*' element={
                            <div className='page'>
                                <h1 className='heding'>Error 404</h1>
                            </div>
                        } />
                    </Routes>
                </section>
                
                {/* FOOTER */}
                <Footer/>
            </BrowserRouter>
        </LangContext.Provider>
    )
}

export default MainRoutes