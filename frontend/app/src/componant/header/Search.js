import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import "./Head1.css"



export default function Search() {

 

    const menu = [
        {
        display:'tableau de bord',
        url:'/dashbord'
    },
    {
        display:'Message & cours',
        url:''
    },
    {
        display:'Cree une annonce',
        url:'/AjouterAnnonce'
    },
    {
        display:'profile',
        url:'/profile'
    },
    
    ]

    const [open,setOpen] = useState(false);
    const menuRef = useRef();
    const iconRef = useRef();

    window.addEventListener("click",(e) =>{
        if(e.target !== menuRef.current && e.target !== iconRef.current){
            setOpen(false);
        }
    })
    
  return (
    <section className="search">
        <div className="container__ navigation1">
            <div className="logo">
                <img src="" alt="" />
            </div>

            <div className="search-box" style={{backgroundColor:'white', display:'flex'}}>
                <i className='fa fa-search'></i>
                <input type="text" placeholder='Que vouler vous apprendre?' />
                <span>All Courses</span>
            </div>

            <div className="icon f-flex width">
                <i className="fa fa-heart" aria-hidden="true" ></i>
                <div className="menu-trigger">
                    <i className='fa fa-bars menu' ref={iconRef} onClick={()=>setOpen(!open)}></i>
                        {
                        open &&
                        
                        (<ul className='nav_item2' >
                            {
                            menu.map((item,index)=>(
                                <li key={index} >
                                    <NavLink style={{color:'black'}} to={item.url}>{item.display}</NavLink>
                                </li>
                            ))   
                            }
                        </ul>)
                        }
                </div>
            </div>



        </div>
    </section>
  )
}

function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
}