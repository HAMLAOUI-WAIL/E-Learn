import React from "react";
import { NavLink } from "react-router-dom";

/*<button onClick={() => handleClick(item)}>Ajouter aux favoris</button>*/ 
const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p style={{fontSize:15}}>{title}</p>
        <p style={{fontSize:12}}>{author}</p>
        <p>Prix - {price}DZ</p>

        <div>
          
          <button><a  href="/AfficherAnnonce">Afficher Annonce</a></button>

        </div>
        
      </div>
    </div>
  );
};

export default Cards;