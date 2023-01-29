import React,{useState} from 'react'
import SlideB from './SlideB'
import { NavLink } from 'react-router-dom'
import "./Profile.css"
import Navbar from '../header/Navbar';


export default function ChangePass() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
    <Navbar/>
    <h1 className='titlePage'>Change Your Password</h1>
   
    <div className='changePass'>
      <div className="form-box">
        <label>
            Password:
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>

        <br />

        <label>
            Confirm Password:
            <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </label>
      </div>
      <button style={{marginTop:'4rem'}}>Save Change</button>
    </div>
    </>
    
  )
}
