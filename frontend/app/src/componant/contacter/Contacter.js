import React from 'react';
import './Contacter.css';
import Search from '../header/Search';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import { useState} from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Navbar from '../header/Navbar';

export default function Contacter(){
	const [value, setValue] = useState()
	return(
		
	<>
		{/* <Search/> */}
        <Navbar/>
		<div className="forma_">
            <div className='Form-wrap'>
                <h1 className='txt'>Programmez votre premier cours avec <span id='name'>Irada</span></h1>
            </div>
            <Form className='Form-contact'>
            <FormGroup>
            <Label for="Message">Votre message:</Label>
            <Input type="textarea" rows="8" cols="40" id="Message" placeholder="Bonjour Lynda, 
            Je m’appelle Wail et je cherche un professeur de Maths. 
            Je souhaiterais prendre les cours chez vous ou chez moi. 
            Idéalement, j’aimerais débuter les cours au plus tôt. 
            Est ce que cela vous irait ? Pouvez-vous prendre contact avec moi afin que 
            l’on en parle ? 
            Je vous souhaite une excellente journée, 
            A bientôt, WAIL" />
            </FormGroup>
            <FormGroup>
                    <Label for="Email">Votre adresse:</Label> <br/>
            <Input type="text" id="adresse" placeholder='Commune,wilaya'/>
                <Label>Téléphone:</Label> <br/>
            <PhoneInput 
            placeholder="Entrez votre numéro de téléphone" value={value}
            onChange={setValue}
            ></PhoneInput>
            </FormGroup>

            <FormGroup>
            <button className='btn'>Envoyer la demande</button>
            </FormGroup>
            </Form>
        </div>
	</>

)
}