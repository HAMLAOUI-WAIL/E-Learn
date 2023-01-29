import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../images/font3.jpg";
import "../styles/Intro.css";
import '../styles/style.css';


export default function Intro(){
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
          <div className="hero__content">
              <h2 className="mb-4 hero__title">
               Best Online
                <br /><span> Learning</span> <br />
                With Expert
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="btn">
              <span><NavLink to="/Register">Register</NavLink></span>
            </div>
          </Col>

          <Col lg="6" md="6" style={{paddingTop:'6rem'}}>
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
