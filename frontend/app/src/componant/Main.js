import React from 'react'
import Footer from './footer/Footer';
import Header from './header/Header';
import Intro from './Intro';
import "../styles/Main.css"
import Team from './team/Team';
import AboutCard from './about/AboutCard';
import TrouverProf from './TrouverProf';

export default function Main() {
  return (
    
    
    <div>
      
       <Header/>      
      <div style={{marginBottom:'4rem',marginTop:'-4rem'}}>
        <Intro/>
      </div>

      <div style={{marginBottom:'4rem'}}>
        <h1 className='title__'>What we offer !!</h1>
        <AboutCard/>
      </div>
      
      <div>
        <h1 className='title__'>Des enseignants certifiés </h1>
        <TrouverProf/>
      </div>
      
      <Team/>
      
      <Footer/>
    
    </div>

  )
}
