import React from 'react'
import Header1 from '../header/Header1'
import Navbar from '../header/Navbar'
import "./Prof.css"
import "./ProfList"
import ProfList from './ProfList'


export default function Prof() {
  return (
    
    <>
    {/* <Header1/> */}
    <Navbar/>
    <div className="contant_P">
            
            <div className="ouverl">
                <div className="container_P">
                    <div className="row_P">
                        <div className="colon">
                            <h2>We help our student to <br /> find Courses with <br /> Expert</h2>
                            <p>
                                deserunt id iste,quas officiis et repellat!
                            </p>

                            <form action="">
                                <input type="text" placeholder=' Que vouler vous Apprendre? ' />
                                <button type='submit'>Rechercher</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProfList/>
    </>
  )
}
