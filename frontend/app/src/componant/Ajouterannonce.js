import React from 'react';
import { useState} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import '../styles/Ajouterannonce.css';
import CurrencyInput from 'react-currency-input-field';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Search from './header/Search';
import Navbar from './header/Navbar';
//import Autocomplete from "react-google-autocomplete"

export default function Ajouterannonce(){
	const [value, setValue] = useState()
  const [file, setFile] = useState();
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
        <Form>
        <FormGroup>
          <Label for="Description">Description</Label>
          <Input type="textarea" id="Description" placeholder="Entrez une description pour votre annonce" />
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
          <Input type="select" id="Details">
            <option>En ligne</option>
            <option>Présentiel</option>
          </Input>
        </FormGroup>
        <FormGroup>
			    <Label for="Details">Thème de votre annonce (module):</Label> <br/>
          <Input type="select" id="Details">
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
          <Input type="text" id="Lieu" placeholder='Commune,Wilaya'/>
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
                name="input-name"
                placeholder=""
                defaultValue={1000}
                decimalsLimit={5}
				        suffix="DA/H"
                onValueChange={(value, name) => console.log(value, name)}/>;
		    </FormGroup>
        <FormGroup>
		     <h1>Contact:</h1>
		    	<Label for="Email">Email:</Label> <br/>
          <Input type="Email" id="Email" placeholder='Email'/>
		       <Label>Téléphone:</Label> <br/>
          <PhoneInput 
          placeholder="Entrez votre numéro de téléphone"
          value={value}
          onChange={setValue}/>
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