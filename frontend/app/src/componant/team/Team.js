import React from 'react'
// import {Swiper,SwiperSlide} from 'swiper/react'
// import {FreeMode} from 'swiper'
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.scss";


import "./Team.css"
import image1 from "../../images/img36.png"
import image5 from "../../images/person_1.jpg"


export default function Team() {

  return (
    
    <section class="team">
        <h1 class="heading">Our Team!</h1>

        <div class="swiper box-container">

            <div class="box">
                <img src={image5} alt=""/>
                <h3>HAMLAOUI WAIL</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                <a href="#" class="btn">read more</a>
            </div>

            <div class="box">
                <img src={image1} alt=""/>
                <h3>MEGHARA MELISSA</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                <a href="#" class="btn">read more</a>
            </div>

            <div class="box">
                <img src={image1} alt=""/>
                <h3>BENSALEM LAMIA</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                <a href="#" class="btn">read more</a>
            </div>

            <div class="box">
                <img src={image1} alt=""/>
                <h3>ALAA IRADA DEBABZIA</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                <a href="#" class="btn">read more</a>
            </div>

            <div class="box">
                <img src={image1} alt=""/>
                <h3>OUALAM LINDA</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
    </section>

  )
}

