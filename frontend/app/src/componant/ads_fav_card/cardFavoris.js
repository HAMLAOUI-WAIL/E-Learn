import React from "react";

const CardsFavoris = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Prix - {price}DZ</p>

        <button><a  href="/ContacterProf">contacter</a></button>
        <button onClick={() => handleClick(item)}>Supprimer</button>
        
      </div>
    </div>
  );
};

export default CardsFavoris;