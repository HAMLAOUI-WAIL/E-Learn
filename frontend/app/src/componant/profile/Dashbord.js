import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/bootstrap-min.css"
import Navbar from '../header/Navbar'
import Search from '../header/Search'
import SlideB from './SlideB'

export default function Dashbord() {
  return (
    <>
    {/* <Search/> */}
    <Navbar/>
    <div className="container mt-4">
        <div className="row">

            <SlideB/>
            <section className='col-md-9'>
                <div className="card">
                    <h5 className="card-header">My courses</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Created By</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>Cours ReactJs</td>
                                <td><NavLink to={"/"}>HAMLAOUI</NavLink></td>
                                <td>
                                    <button className='btn btn-primary'>Delete</button>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    </div> 
    </>
  )
}
