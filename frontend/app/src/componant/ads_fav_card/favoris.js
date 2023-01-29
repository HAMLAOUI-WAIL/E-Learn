import React,{useState } from 'react'
import listFavoris from '../dataFavoris'
import "./favorisStyles.css"
import CardsFavoris from './cardFavoris';

const  favoris=  () => {
  // const [cart,setCart] = useState([]);
  const handleClick = (item) => {
      
      console.log(item);};
    return (
      <section className='FavSection'>
        {listFavoris.map((item) => (
          <CardsFavoris key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    );
  };

export default favoris;