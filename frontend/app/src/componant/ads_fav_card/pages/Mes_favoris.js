import React from 'react'
import "./Mes-favorisStyles.css";
import Favoris from '../favoris';
import Navbar from '../../header/Navbar';
function Mes_favoris() {
  return (
    <>
    <Navbar/>
    <div className="mes-favoris">
    <div>
    <Favoris/>
    </div>
    </div>
  </>
  )
}

export default Mes_favoris