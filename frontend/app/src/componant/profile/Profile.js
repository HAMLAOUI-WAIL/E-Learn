import React, { useCallback, useState } from 'react'

import "./Profile.css"
import Form from './Form'
import userPr from "../../images/person_4.jpg"

// import Search from '../header/Search'
import { NavLink } from 'react-router-dom'
import Navbar from '../header/Navbar'


export default function Profile() {
  return (
    <>
    {/* <Search/> */}
    <Navbar/>
    <div className="Profile-container">
        <div className="profile-info">
            <h1>Mon Profile</h1>
        </div>
        <div className="cont">
            <div className="profile-box">

                <div className='box-form'>
                    <Form/>
                </div>

            </div>

            <div className="box-image" >
                {/* <input /> */}
                <div className='imageCL'>
                    <img src={userPr} alt="img-upload" width={250} height={250} />
                    <button className='btn11'> Changer image</button>
                </div>
                <div className='mdp'>
                    <h2>Changer de mot de passe 🔒</h2>
                    <button className='btn11'><NavLink to={"/Change-pass"}>Changer de mot de passe 🔒</NavLink></button>
                </div>
            </div>
        </div>

        <div className="add">
            <button ><NavLink to={"/AjouterAnnonce"}>Ajouter une Announce</NavLink></button>
        </div>
    </div>
    </>
  )
}
