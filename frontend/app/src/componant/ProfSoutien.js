import React from 'react'
import '../styles/Cours.css'
import '../styles/Login.css'
import google from "../images/google.png"
import Teacher from "../images/Teacher.svg"
import Header1 from './header/Header1'

export default function ProfSoutien() {
  return (
    <div>
        <Header1/>
        <div className='Parentdiv_'>
            <div className="content_">
                <div className="left-side">
                    <h1 className="title">Donner des cours <br /> 
                    Vivre de sa passion!</h1>
                    <p className="parag" style={{paddingLeft:'6px'}}>
                        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                        Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                        quas officiis et repellat!
                    </p>
                    <button className='btnGoogle'>
                        <img src={google} alt="" style={{width:'20px'}}/>
                        <a href="" style={{color:'black',fontSize:'1.3rem'}}>Connexion avec Google</a>
                    </button>
                </div> 

                <div className="right-side">
                    <img src={Teacher} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}
