import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import '../styles/App.css';
import About from './about/About';
import Condidat from './Condidat';
import Contact from './contact/Contact';
import Login from './Login';
import Main from './Main';
import ProfSoutien from './ProfSoutien';
import Register from '../componant/Signup/SignUp';
import TrouverProf from './TrouverProf';
import Prof from './prof/Prof';
import Ajouterannonce from './Ajouterannonce'
import Afficherannonce from './Afficherannonce';
import Contacter from './contacter/Contacter';
import Profile from './profile/Profile';
import Dashbord from './profile/Dashbord';
import ChangePass from './profile/ChangePass';

import Mes_favoris from "../componant/ads_fav_card/pages/Mes_favoris";
import Mes_annonces from "../componant/ads_fav_card/pages/Mes_annonces";
import Mes_messages from "../componant/ads_fav_card/pages/Mes_messages";
import Annonces from "../componant/ads_fav_card/pages/Annonces";

const App=()=>{
  return(
    <Routes>

      <Route exact path='/'  element={<Main/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/about" element={<About/>} />

      <Route exact path='/TrouvProf' element={<TrouverProf />}/>
      <Route exact path='/cours'  element={<ProfSoutien/>}/>
      <Route exact path='/condidat' element={<Condidat/>}/>
      {/* <Route exact path='/search' element={<Search/>}/> */}
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/prof' element={<Prof/>}/>
      <Route exact path='/AjouterAnnonce' element={<Ajouterannonce/>}/>
     

      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profile/:profile_id' element={<Profile/>}/>


      <Route exact path='/Change-pass' element={<ChangePass/>}/>
      <Route exact path='/AfficherAnnonce' element={<Afficherannonce/>}/>

      <Route exact path='/ContacterProf' element={<Contacter/>}/>
      
      <Route exact path='/dashbord' element={<Dashbord/>}/>

      <Route path="/annonces" element = {<Annonces/>}/>
      <Route path="/mes-favoris" element = {<Mes_favoris/>}/>
      <Route path="/mes-messages" element = {<Mes_messages/>}/>
      <Route path="/mes-annonces" element = {<Mes_annonces/>}/>
      
    </Routes>
  )
}

export default App;