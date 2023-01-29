import React from 'react'
import './Footer.css'

export default function () {
  return (
        <section class="footer">

            <div class="box-containerF">

                <div class="box">
                    <h3>Explore</h3>
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="#Courses">Courses</a>
                    <a href="#Blogs">Blogs</a>
                </div>

                <div class="box">
                    <h3>Information</h3>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Purchase Guide</a>
                    <a href="#">Membership</a>
                    <a href="#">Term of Services</a>
                </div>

                <div class="box">
                    <h3>contact info</h3>
                    <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
                    <a href="#"> <i class="fas fa-envelope"></i> w_hamlaoui@estin.dz </a>
                    <a href="#"> <i class="fas fa-map"></i>Bejaia ALG - 400104 </a>
                </div>

                <div class="box">
                    <h3>follow us</h3>
                    <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
                    <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                    <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
                    <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
                    <a href="#"> <i class="fab fa-github"></i> github </a>
                </div>

            </div>

            <div class="credit"> created by <span> Group 1</span> | all rights reserved!</div>

        </section>
    
  )
}
