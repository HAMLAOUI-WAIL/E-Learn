import React from 'react'
import Navbar from '../../header/Navbar';
import "./Mes-messagesStyles.css";

function Mes_messages() {
  
  return (
    
    <>
    <Navbar/>
    <div className="mes-messages">
      <h1>mes messages</h1>
    </div>
    <div className="mes-messagesSection">
    <div className="mes-messagesSection1">
     
      <button>Message 01</button>
      <button>Message 02</button>
      <button>Message 03</button>
      <button>Message 04</button>
      </div>

    <div className='mes-messagesSection2'>
      <div className='box__'><p style={{marginLeft:40 ,marginTop:40, marginRight:40} } > Bonjour Alaa irada, 
Je m’appelle Melissa et je cherche un professeur de Physique. 
Je souhaiterais prendre les cours chez vous ou chez moi. 
Idéalement, j’aimerais débuter les cours au plus tôt. 
Est ce que cela vous irait ? Pouvez-vous prendre contact avec moi afin que 
 l’on en parle ? 
Je vous souhaite une excellente journée, 
A bientôt,</p>  </div>


     <div class="minibox">
        +213568427981
      </div>
      <div class="minibox" style={{  marginLeft: 500,marginTop:-50}}>
      Amizour, Bejaïa, Algérie.

      </div>

      </div>
     
    </div>
  </>
  )
}

export default Mes_messages