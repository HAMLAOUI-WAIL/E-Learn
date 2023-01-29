import React from 'react'
import "./Prof.css"
import prof1 from "../../images/marketplace2.png"
import prof2 from "../../images/marketplace2.png"
import prof3 from "../../images/marketplace2.png"
import prof4 from "../../images/marketplace2.png"
import prof5 from "../../images/marketplace2.png"
import prof6 from "../../images/marketplace2.png"
import prof7 from "../../images/marketplace2.png"

import dots from "../../images/dots.png"

import Button from "./Button";
import { NavLink } from 'react-router-dom'

export default function ProfList() {

     
  const ProfListData = [
    {
      image: prof1,
      name: "HAMLAOUI WAIL",
    },
    {
      image: prof2,
      name: "HAMLAOUI WAIL",
    },
    {
      image: prof3,
      name: "HAMLAOUI WAIL",
    },
    {
      image: prof4,
      name: "HAMLAOUI WAIL",
    },
    {
      image: prof5,
      name: "HAMLAOUI WAIL",
    },
    {
      image: prof6,
      name: "HAMLAOUI WAIL",
    },
    {
      image: prof7,
      name: "HAMLAOUI WAIL",
    },
    
  ];

  const ProfListDom = [
    "All",
    "France",
    "Math",
    "Physiq",
    "Science",
    "Arabic",
  ];

  return (
    <div className='section'>
        <div className="title">
            <h2>Notre Selection des Professeur particulier de sotien Scolaire</h2>
        </div>
        <div className="ProfListDom">
            {ProfListDom.map((text, index) => {
                return <Button text={text} key={index} blue={index === 0} />;
            })}
        </div>
        <div className="prof_list">
            {ProfListData.map(({ image, name }) => {
                return (
                    <div className="prof_listD">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                        
                        <div className="name">
                            <h4>{name}</h4>
                            <NavLink><i className='fas fa-heart'></i></NavLink>
                        </div>

                        <h6 className="username">Math & Info</h6>

                        <div className="price-container">
                            <h5 className="price">55 $</h5>
                            <img src={dots} alt="" />
                        </div>
                    </div>
                );
            })}
        </div>
        <button className='Btn_'>
          voir plus de professeur -
        </button>
    </div>
  )
}
