import React from 'react'
import '../styles/Cours.css'
import Happy from "../images/HAPPY STUDENTS.svg"
import Header1 from './header/Header1'
import { NavLink } from 'react-router-dom'

export default function TrouverProf() {
  return (
    <div>
        {/* <Header1/> */}
        <div className='ProfDiv'>
            <div className="content_">
                <div className="left-side">
                    <h1 className="title">Des cours de soutien pour  <br /> 
                    Vous accompagner dans votre parcours <br />
                    en ligne ou en presentiel</h1>
                    <NavLink className='btnP' to={"/prof"}>
                       Trouver votre proffesseur
                    </NavLink>
                </div> 

                <div className="right-side">
                    <img src={Happy} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
