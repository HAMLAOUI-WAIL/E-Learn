import React,{useRef} from 'react'
import { NavLink } from 'react-router-dom'
import './Head1.css'

export default function Header1() {
    const menuRef = useRef()
    const menuToogle = ()=> menuRef.current.classList.toggle('active-menu')
    
  return (
    <section className='header'>
        
        <din className="navigation1">
            <div className="logo1">
               
                <a href="index.html">
                    <svg id="logo-35" 
                        width="50" 
                        height="39" 
                        viewBox="0 0 50 39" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" 
                        class="ccompli1" fill="#007AFF"></path>
                        <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" 
                        class="ccustom" 
                        fill="#312ECB"></path> 
                    </svg>
                </a>
            </div>

            <div className="nav1">
                <div className="nav_menu1">
                    <ul className="nav_list1">
                       <li className="nav_item1">
                            <NavLink to="/dashbord">Donner de cours</NavLink>
                            <NavLink to="/Login">Connexion</NavLink>
                       </li>
                    </ul>
                </div>
            </div>
            <div className="mobile__menu">
                <span>
                    <i id="menu-btn" class='fa fa-bars' onClick={menuToogle} ></i>
                </span>
            </div>
        </din>
        

    </section>
  )
}
