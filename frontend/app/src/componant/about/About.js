import React from "react"
import "./about.css"
import Back from "../back/Back"
import AboutCard from "./AboutCard"
import Heading from "../header/Header"


const About = () => {
  return (
    <>
      <Heading/>
      <Back title='About Us' />
      <AboutCard />
    </>
  )
}

export default About
