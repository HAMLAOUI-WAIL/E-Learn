import React from 'react';
import { useState,useEffect} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import '../styles/Ajouterannonce.css';
import CurrencyInput from 'react-currency-input-field';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Search from './header/Search';
import Navbar from './header/Navbar';
import { useParams } from 'react-router-dom';
//import Autocomplete from "react-google-autocomplete"

export default function Ajouterannonce(props){
  const [details, setDetails] = useState('');
  const [theme, setTheme] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [lieu, setLieu] = useState('');
	const [tarif, setTarif] = useState();
  const [file, setFile] = useState();
  const [telephone, setTelephone] = useState();
  function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
  }
	return(
	<div className='a'>
	  {/* <Search/> */}
    <Navbar/>
      <div className="contain"> 
        <div className="Form">
        <Form
        onSubmit={(e) => {e.preventDefault();
        setDetails('');
        setTheme('');
        setDescription('');
        setLieu('');
        setTarif('');
        setFile('');
        setTelephone('');
        props.Ajouterannonce(details,theme,description,lieu,tarif,file,telephone);}}>
        <FormGroup>
          <Label for="Description">Description</Label>
          <Input type="textarea" id="Description" placeholder="Entrez une description pour votre annonce" 
          value={description}
          onChange={(e) => {
          setDescription(e.target.value);}} />
        </FormGroup>
		    <FormGroup>
          <Label for="Catégorie">Catégorie de votre annonce</Label> <br></br>
          <select id="Catégorie" placeholder="Primaire/collège/lycée" >
            <option>Primaire</option>
            <option>Collège</option>
            <option>Lycée</option>
          </select>
        </FormGroup>
		    <FormGroup>
          <Label for="Details">A propos du cours:</Label> <br/>
          <Input type="select" id="Details"
          value={details}
          onChange={(e) => {
          setDetails(e.target.value);}}>
            <option>En ligne</option>
            <option>Présentiel</option>
          </Input>
        </FormGroup>
        <FormGroup>
			    <Label for="Details">Thème de votre annonce (module):</Label> <br/>
          <Input type="select" id="Details"
          value={theme}
          onChange={(e) => {
          setTheme(e.target.value);}}>
            <option>Maths</option>
            <option>Physique</option>
			      <option>Science</option>
			      <option>Arabe</option>
            <option>Français</option>
		      	<option>Anglais</option>
		      	<option>Phylosophie</option>
		     </Input>
         </FormGroup>
        <FormGroup>
          <Label for="Lieu">Lieu:</Label> <br/>
          <Input type="text" id="Lieu" placeholder='Commune,Wilaya' 
          value={lieu}
          onChange={(e) => {
          setLieu(e.target.value);}}/>
        </FormGroup>
        <FormGroup>
          <Label for="Photos">Ajoutez des photos</Label>
          <Input type="file" id="Photos" multiple onChange={handleChange} />
          <img src={file} />
        </FormGroup>
		    <FormGroup>
			<Label for="tarif">Tarif:</Label> <br/>
			<CurrencyInput className='Input'
                id="Tarif"
                placeholder=""
                defaultValue={1000}
                decimalsLimit={5}
				        suffix="DA/H"
                value={tarif}
                onChange={(e) => {
                setTarif(e.target.value);}}/>;
		    </FormGroup>
        <FormGroup>
		     <h1>Contact:</h1>
		    	<Label for="Email">Email:</Label> <br/>
          <Input type="Email" id="Email" placeholder='Email' 
          value={email}
          onChange={(e) => {
          setEmail(e.target.value);}}/>
		       <Label>Téléphone:</Label> <br/>
          <PhoneInput 
          placeholder="Entrez votre numéro de téléphone"
          value={telephone}
          onChange={(e) => {
          setTelephone(e.target.value);}}/>
        </FormGroup>
		    <FormGroup>
		    	<button className='btn'>Publier</button>
		    </FormGroup>
          
      </Form>
      </div>
      </div>
	  
	</div>
	
	
	)
	
}