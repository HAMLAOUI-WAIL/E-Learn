import React from "react"
import "./about.css"
import { homeAbout } from "../DynamicData"

import imagew from "../../images/bg_1.jpg"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='containerA flexSB1'>
          <div className='left'>
            <img src={imagew} alt=''/>
          </div>
          <div className='right'>            
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB1'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard