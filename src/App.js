import React from 'react';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Aboutid from './components/aboutID/Aboutid'
import Footer from './components/footer/Footer'
import Prevalence from './components/prevalence/Prevalence'
import Support from './components/support/Support'
import Intro from './components/intro/intro'
import Selectindex from './components/selectindex/Selectindex'
import AboutUC from './components/aboutuc/Aboutuc'
import AboutTS from './components/aboutts/Aboutts'
import AboutT1D from './components/aboutt1d/Aboutt1d'
import AboutEpi from './components/aboutepilepsy/AboutEpilepsy'
import AboutLupus from './components/aboutlupus/Aboutlupus'
import AboutPOTS from './components/aboutpots/AboutPOTS'
import AboutCrohns from './components/aboutcrohns/AboutCrohns'
import AboutADHD from './components/aboutadhd/AboutADHD'
import AboutDyslexia from './components/aboutdyslexia/AboutDyslexia'
import AboutInvisible from './components/aboutinvisible/AboutInvisible'
import AboutMe from './components/aboutme/AboutMe'
import Contact from './components/contact/Contact'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import AboutEpilepsy from './components/aboutepilepsy/AboutEpilepsy';




function App() {
  return (
    <div className='App'>
      
       <Navbar />
       <Hero />
       <AboutInvisible />
       <Selectindex />
       <AboutADHD />
       <AboutCrohns />
       <AboutDyslexia />
       <AboutEpi />
       <AboutLupus />
       <AboutPOTS />
       <AboutT1D />
       <AboutTS />
       <AboutUC />
       <AboutMe />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
