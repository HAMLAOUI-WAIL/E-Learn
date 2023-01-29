import React ,{ useState,useEffect } from 'react'
import axios from 'axios';

import "./Profile.css"
import { useParams } from 'react-router-dom';

export default function Form() {

  const [date, setDate] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [formData, setFormData] = useState({
    id:'',
    email: '',
    first_name: '',
    last_name: '',
    password:'',
    phoneNumber:'',
  });

const [ProfileData, setProfileData] = useState([]);


const handleChange = e => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


const {profile_id} = useParams();


const handleSubmit = e => {
alert(formData.first_name)
alert(formData.last_name)
alert(formData.email)
alert(formData.phoneNumber)
  fetch('http://localhost:8000/api/profile/'+profile_id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      first_name:formData.first_name,
      last_name:formData.last_name, 
      email:formData.email,
      phoneNumber:formData.phoneNumber })
    })
  .then(res => {
    res.json()
  })
  .then(data => {
    alert('Success:', data);
  })
  .catch(error => {
    alert('Error:', error);
  });
};



const handleChange_ = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
}

const handleSubmit_ = (event) => {
  // event.preventDefault();
  axios.patch('http://localhost:8000/api/profile/'+profile_id, formData)
  // alert(formData.id)
  //     alert(formData.first_name)
  //     alert(formData.last_name)
  //     alert(formData.email)
  //     alert(formData.phoneNumber)
  //     alert(formData.password)
    .then(response => {
      console.log(response);
      alert(response);
      // handle success response
    })
    .catch(error => {
      console.log(error);
      alert(error)
      // handle error
    });
}




const submitForm = async() => {

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  let utilisateurFormData = new FormData();
  // utilisateurFormData.append("id",formData.id)
  utilisateurFormData.append("first_name",formData.first_name)
  utilisateurFormData.append("last_name",formData.last_name)
  utilisateurFormData.append("email",formData.email)
  utilisateurFormData.append("password",formData.password)
  utilisateurFormData.append("phoneNumber",formData.phoneNumber)

      console.log(utilisateurFormData)
      console.log(formData)
      alert(0)
      // alert(formData.first_name)
      // alert(formData.last_name)
      // alert(formData.email)
      // alert(formData.phoneNumber)
      // alert(formData.password)
      await axios({
        method:'PUT',
        url:'http://localhost:8000/api/profile/'+profile_id,
        data:formData
      }).then((Res) =>{
          alert("0000000")
          alert(Res.data)
          console.log(Res.data)
        });
     try{
          // await axios.patch('http://localhost:8000/api/profile/'+profile_id,utilisateurFormData)
          // .then((Response) =>{
          //   alert("0000000")
          //   alert(Response.data)
          //   console.log(Response.data)
          // });
          // await axios({
          //   method:'PUT',
          //   url:'http://localhost:8000/api/profile/'+profile_id,
          //   data:utilisateurFormData
          // }).then((Res) =>{
          //     alert("0000000")
          //     alert(Res.data)
          //     console.log(Res.data)
          //   });
       }catch(error){
           console.log(error);
           alert(error)      
       }

};


useEffect(()=>{
  try{
    axios.get('http://localhost:8000/api/profile/')
    .then((res)=>{
      setProfileData(res.data)
    })
  }catch(err){
    console.log(err)
  }
  try {
    axios.get('http://localhost:8000/api/profile/'+profile_id)
    .then((res)=>{
      setFormData({
        id:res.data.id,
        email: res.data.email,
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        password:res.data.password,
        phoneNumber:res.data.phoneNumber,

      })
    })
    
  } catch (err) {
    console.log(err);
  }
},[])

  return (
    // onSubmit={handleSubmit}
    <form className="form" >
        <h2>Informations Générales 🙂</h2>
        <div className="form-box">

            {/* <label for="genre">Genre</label> */}
            <select name="genre" id="genre" placeholder='Genre' style={{borderRadius:'10px',padding:'3px'}}>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
            </select>

        </div>

        <div className="form-box">

            <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder='Hamlaoui'  
            />

        </div>

        <div className="form-box">

            <input type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder='Hamlaoui'  
            />

        </div>

        <div className="form-box">
            <input type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder='00 00 00 00 00'  
            />
        </div>


        <div className="form-box">
            <input type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='example@estin.dz' 
            />
        </div>

{/* <div className="form-box">
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
      </div> */}
        {/* <div className="form-box">

            <input type="date" name="date" id="date" 
                value={date} onChange={(e) => setDate(e.target.value)} 
            />
        </div> */}
    

        <div className="form-btn">
          <button type='submit' onClick={submitForm}>Update changes</button>
        </div> 
    </form>
  )
}
