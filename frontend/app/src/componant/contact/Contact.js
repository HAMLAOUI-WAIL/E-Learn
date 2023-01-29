import React from "react"
import Header from "../header/Header"
import Back from "../back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d86860.83776380839!2d3.1654448235255144!3d36.74516933385546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdz!4v1671821924068!5m2!1sen!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Header/>
      <Back title='Contact us' />
      <section className='contacts_C padding_C'>
        <div className='container_C shadow_C flexSB_C'>
          <div className='left_C row_C'>
            <iframe src={map}></iframe>
          </div>
          <div className='right_C row_C'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion</p>

            <div className='items_C grid2_C'>
              <div className='box_C'>
                <h4>ADDRESS:</h4>
                <p>Bejaia</p>
              </div>
              <div className='box_C'>
                <h4>EMAIL:</h4>
                <p> info@estin.dz</p>
              </div>
              <div className='box_C'>
                <h4>PHONE:</h4>
                <p> 06 00 00 00 00</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB_C'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here..
              </textarea>
              <button className='primary-btn_C'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
