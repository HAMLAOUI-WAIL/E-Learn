import Header1 from './header/Header1'
import '../styles/Login.css'
import google from "../images/google.png"

export default function Login() {


  return (    
    
    <div >
     
      <Header1/>
      <div className="container"> 
        <div className="form">
          <h1 className="title">Connecter-vous!</h1>
        
          <input type="email" name="email" placeholder='email' id="" />
          <input type="password" name="password" placeholder='Mot de passe' id="" />

          <button className='btn'>Connexion</button>
          <h2 style={{paddingTop:'1.5rem',color:'GrayText'}}>OU</h2>
          <button className='btnGoogle'>
              <img src={google} alt="" style={{width:'20px'}}/>
              <a href="" style={{color:'black',fontSize:'1.3rem'}}>Connexion avec Google</a>
          </button>
        </div>
      </div>
    </div>
    
  )
}
