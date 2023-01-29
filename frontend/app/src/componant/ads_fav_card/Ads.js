import React,{useState } from 'react'
import list from '../data'
import "./AdsStyles.css"

import Cards from './card';

const  Ads=  () => {
  const [cart,setCart] = useState([]);
  const handleClick = (item) => {
      
      console.log(item);};
    return (
      <section className='AdsSection'>
        {list.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    );
  };

export default Ads;