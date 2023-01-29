import React from 'react'
import "../../styles/bootstrap-min.css"
import { NavLink } from 'react-router-dom'


export default function SlideB() {
  return (
    <>
        <aside className="col-md-3 mt-4" >
            <div className="card" >
                <h5 className="card-header">Dashboard</h5>
                <div className="list-group list-group-flush ">
                    <NavLink to={"/"} className="list-group-item list-group-item-action">My Courses </NavLink>
                    <NavLink to={"/"} className="list-group-item list-group-item-action"> Favorite Courses</NavLink>
                    <NavLink to={"/profile"} className="list-group-item list-group-item-action"> Profile Setting</NavLink>
                    <NavLink to={"/Change-pass"} className="list-group-item list-group-item-action">Change Password</NavLink>
                    <NavLink to={"/Login"} className="list-group-item list-group-item-action text-danger">Logout</NavLink>
                </div>
            </div>
        </aside>
    </>
  )
}
