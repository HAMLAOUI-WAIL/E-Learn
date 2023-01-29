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
  e.preventDefault()
  const utilisateurFormData = new FormData();

  // utilisateurFormData.append("id",formData.id)
  utilisateurFormData.append("first_name",formData.first_name)
  utilisateurFormData.append("last_name",formData.last_name)
  utilisateurFormData.append("email",formData.email)
  utilisateurFormData.append("password",formData.password)
  utilisateurFormData.append("phoneNumber",formData.phoneNumber)
  // let csrf = ' asd '
  fetch('http://localhost:8000/api/profile/'+profile_id, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(utilisateurFormData)
    })
  .then(res => {
    console.table(res)
    res.json()
    alert(res)
  })
  .then(data => {
    alert('Success:', data);
  })
  .catch(error => {
    // alert('Error:', error);

    console.log(error)
  });
};


const handleSubmit_ = (event) => {
  // event.preventDefault();
  let utilisateurFormData = new FormData();
  // utilisateurFormData.append("id",formData.id)
  utilisateurFormData.append("first_name",formData.first_name)
  utilisateurFormData.append("last_name",formData.last_name)
  utilisateurFormData.append("email",formData.email)
  // utilisateurFormData.append("password",formData.password)
  utilisateurFormData.append("phoneNumber",formData.phoneNumber)

  axios.patch('http://localhost:8000/api/profile/'+profile_id, utilisateurFormData,
  {
    headers:{
      'Content-Type':'multipart/form-data'
    }
  })
    .then(response => {
      alert("sucess")
      console.log(response);
      alert(response);
      // handle success response
    })
    .catch(error => {
      alert(error)
      console.log(error);
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
  // utilisateurFormData.append("password",formData.password)
  utilisateurFormData.append("phoneNumber",formData.phoneNumber)

      console.log(utilisateurFormData)
      console.log(formData)
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
    <form className="form">
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
          <button type='submit' onClick={handleSubmit}>Update changes</button>
        </div> 
    </form>
  )
}
