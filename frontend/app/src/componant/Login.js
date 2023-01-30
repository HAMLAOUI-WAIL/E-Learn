import Header1 from './header/Header1'
import '../styles/Login.css'
import google from "../images/google.png"
import { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl ='http://127.0.0.1:8000/api';

export default function Login() {
  useEffect(()=>{
    document.title='connexion';
});
const [utilisateurLoginData, setutilisateurLoginData] = useState({
    'email': '',
    'password': ''     
    
});
const handleChange = (event)=>{
    setutilisateurLoginData({
        ...utilisateurLoginData,
        [event.target.name] : event.target.value
    });
}
const submitForm=()=>{
    const utilisateurFormData = new FormData();
    utilisateurFormData.append("email",utilisateurLoginData.email)
    utilisateurFormData.append("password",utilisateurLoginData.password)
    try{
        axios.post(baseUrl+'/login',utilisateurFormData)
        .then((res) =>{
            if(res.data.bool==true){
                localStorage.setItem('utilisateurLoginStatuts',true)
                window.location.href='/prof';
            }
        });
     }catch(error){
         console.log(error);
         
     }
}
const utilisateurLoginStatuts =localStorage.getItem('utilisateurLoginStatuts')
if(utilisateurLoginStatuts=='true'){
    window.location.href='/prof';
}

  return (    
    
    <div >
     
      <Header1/>
      <div className="container"> 
        <div className="form">
          <h1 className="title">Connecter-vous!</h1>
        
          <input  type="email" value={utilisateurLoginData.email} name="email" onChange={handleChange} placeholder='email' id="" />
          <input type="password" value={utilisateurLoginData.password} name="password" onChange={handleChange} placeholder='Mot de passe' id="" />

          <button onClick={submitForm} className='btn'>Connexion</button>
          
          
        </div>
      </div>
    </div>
    
  )
}
