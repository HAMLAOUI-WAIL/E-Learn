import React from 'react'
import "./AnnoncesStyles.css";
import "../AdsStyles.css";
import Ads from "../Ads";
import Navbar from '../../header/Navbar';
function Annonces() {
  return (
    <>
    <Navbar/>
    <div className="annonce">
    <div>
    <Ads/>
    </div>
      
    </div>
  </>
  )
}

export default Annonces