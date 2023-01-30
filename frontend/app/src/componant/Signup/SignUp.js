import './signup.css'
import illustr from '../../images/Technology_Illustration-removebg-preview 1.png';
import Header from '../header/Header';

function SignUp() {
      
              return(
                     <>
                     <Header/>
<div className='container__'>
       

<div className='signup '>
             <form>

                    {/* <img src={logo} className="logo" alt=''/> */}
                    <h1>Join our community</h1>

                    <div className="flname">
                           <input type="text" placeholder="First Name"/>
                           <input type="text" placeholder="Last Name"/>
                    </div>

                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder=" Confirm Password"/>
                    <button className='btnSignUP' type="submit" >Sign Up</button>
                    <p>-or-</p>
                    <a href="./signin.html" className="signin"><button type="submit" className="btnSignUP">Sign In</button></a>

             
             </form>

                    <img src={illustr} className="illustration" alt=''/>

    
</div>
</div>
      
                     
</>
)       

}



export default SignUp;    
        
