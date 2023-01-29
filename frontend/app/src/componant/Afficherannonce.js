import React from 'react';
import '../styles/Afficherannonce.css';
// import Search from './header/Search';
import image from "../images/img36.png"
import font3 from "../images/marketplace1.png"
import Navbar from './header/Navbar';

export default function Afficherannonce(){
     const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d86860.83776380839!2d3.1654448235255144!3d36.74516933385546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdz!4v1671821924068!5m2!1sen!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
	return(
    <>
	    <Navbar/>
	<div className='grid-container' style={{marginTop:'3rem'}}>
     <section className='section-left'>
        <h1>Plus de details sur l'annonce</h1>
        <br/>
        <h2>Cours de soutien en <span id='thème'>Mathématique!</span></h2>
        <span><img src={font3}/></span>

        <h2>Description du cours:</h2>
        <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        <h2>Catégorie:</h2>
        <span>Primaire</span>
        <h2>Modalité d'enseignement:</h2>
        <span>Présentiel</span>
        <h2>Tarif:</h2>
        <span>1000 DA/H</span>
        <h2>Adresse:</h2>
        <span id='adresse'><iframe src={map}></iframe></span>
        <h2>Contact:</h2>
        <span id='name'>Debabzia alaa</span> <br/>
        <span id='numero'>+213544442123</span><br/>
        <span id='email'>a_debabzia@estin.dz</span><br/>
      </section>
      <section className='section-right'>
        <div class="circle">
            <img className='img2' src={image} alt=''/>
        </div>
        <h3><span id='name' >irada debabzia</span></h3>
        <p>Professeur de <span id='thème'>Mathématiques</span></p>
      </section>
      </div>
</>
	)
}