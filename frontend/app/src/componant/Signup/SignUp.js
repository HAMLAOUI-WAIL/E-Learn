import './signup.css'
import illustr from '../../images/Technology_Illustration-removebg-preview 1.png';
import Header from '../header/Header';import { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl ='http://127.0.0.1:8000/api/utilisateur/';

function SignUp() {
       useEffect(()=>{
              document.title='inscription';
          });
          const [utilisateurData, setutilisateurData] = useState({
              'first_name' :'',
              'last_name':'',
              'email': '',
              'password': '' ,    
              'phoneNumber':'',
              'statuts' :''
          });
          //change element value
          const handleChange = (event)=>{
              setutilisateurData({
                  ...utilisateurData,
                  [event.target.name] : event.target.value
              });
          }
          //end
          
          //submit form
          const submitForm =() => {
              const utilisateurFormData = new FormData();
              utilisateurFormData.append("first_name",utilisateurData.first_name)
              utilisateurFormData.append("last_name",utilisateurData.last_name)
              utilisateurFormData.append("email",utilisateurData.email)
              utilisateurFormData.append("password",utilisateurData.password)
              utilisateurFormData.append("phoneNumber",utilisateurData.phoneNumber)
                  
                 try{
                      axios.post(baseUrl,utilisateurFormData).then((res) =>{
                          setutilisateurData({
                              'first_name' :'',
                              'last_name':'',
                              'email': '',
                              'password': '' ,    
                              'phoneNumber':'',
                              'statuts' :'success'
                          })
                          window.location='/annonces';

                              if(res.data.bool==true){
                                  localStorage.setItem('utilisateurLoginStatuts',true)
                                  window.location='/annonces';
                              }
                      });
                   }catch(error){
                       console.log(error);
                       setutilisateurData({'statuts':'error'})
                  
                   }
          
          };
          const utilisateurLoginStatuts =localStorage.getItem('utilisateurLoginStatuts')
          if(utilisateurLoginStatuts=='true'){
              window.location.href='/prof';
          }
      
      
              return(
                     <>
                     <Header/>
<div className='container__'>
       

<div className='signup '>
             <form>

                    {/* <img src={logo} className="logo" alt=''/> */}
                    <h1>Join our community</h1>
                    {utilisateurData.statuts =='success' && <p class='text-success'>merci pour votre inscription</p>}
                    {utilisateurData.statuts =='error' && <p class='text-success'>erreur</p>}
                    <div className="flname">
                           <input value={utilisateurData.first_name} onChange={handleChange} type="text" placeholder="First Name" name="first_name"/>
                           <input value={utilisateurData.last_name} onChange={handleChange} type="text" placeholder="Last Name" name='last_name'/>
                    </div>

                    <input value={utilisateurData.email} onChange={handleChange} type="email" placeholder="Email" name='email'/>
                    <input type="password" value={utilisateurData.password} onChange={handleChange} placeholder="Password" name='password'/>
                    <input type="number" value={utilisateurData.phoneNumber} onChange={handleChange} placeholder=" phoneNumber" name='phoneNumber'/>
                    <button onClick={submitForm} className='btnSignUP' type="submit" >Sign Up</button>
                    <p>-or-</p>
                    <a href="" className="signin"><button type="submit" className="btnSignUP">Sign In</button></a>

             
             </form>

                    <img src={illustr} className="illustration" alt=''/>

    
</div>
</div>
      
                     
</>
)       

}



export default SignUp;    
        
