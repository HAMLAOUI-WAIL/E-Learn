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
        <p>Price - {price}DZ</p>

        <button onClick={() => handleClick(item)}>Contacter</button>
        <button onClick={() => handleClick(item)}>Supprimer</button>
        
      </div>
    </div>
  );
};

export default CardsFavoris;