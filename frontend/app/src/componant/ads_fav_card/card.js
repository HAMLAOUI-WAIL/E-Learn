import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}DZ</p>

        <div>
          <button onClick={() => handleClick(item)}>Ajouter aux favoris</button>
          <button><NavLink to={"/AfficherAnnonce"}>Afficher Annonce</NavLink></button>

        </div>
        
      </div>
    </div>
  );
};

export default Cards;