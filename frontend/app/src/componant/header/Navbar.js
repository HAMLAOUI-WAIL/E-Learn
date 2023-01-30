import { Component } from "react";
import "./NavbarStyles.css";
import "./search.css";
import React, {useState} from 'react'
import { Link,useMatch, useResolvedPath } from "react-router-dom";

class Navbar extends Component{
    state = {clicked : false};
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render() {
    return(
   <>
    <nav>
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
        <form id="search-form">
            <input type ="text"id="search-bar" placeholder="   Que vous voulez apprendre ?">
            </input>
          
          <button id ="explorebtn" style={{height:"50px;"}}><i class="fa fa-search"></i></button>
        </form>
        <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" :"#navbar" }>
            
                <li ><CustomLink classname="active "to ='/annonces' >Annonces</CustomLink></li>
                <li><CustomLink to ='/mes-favoris' >Mes favoris</CustomLink></li>
                <li><CustomLink to ='/mes-messages' >Mes messages</CustomLink></li>
                <li><CustomLink to ='/mes-annonces' >Mes annonces</CustomLink></li>
                <li><CustomLink  to ='/profile' >Profil</CustomLink></li> 
                <li><CustomLink  to ='/logout' >logout</CustomLink></li> 
                
            </ul>
        </div>
        <div id ="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            
        </div>
    </nav>
   </>
    );
}
}
export default Navbar;


function CustomLink({to,children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
return(
    <li className={isActive ? "active" : ""}>
        <Link to ={to} {...props}>
        {children}
        </Link>
    </li>
)

}
/*className="active" 




import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as  Router, Route, Routes} from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <router>
      <Routes>
               <Route path='/' exact component={Annonces} />
               <Route path='/mes-annonces' component={Mes_annonces} />
               <Route path='/mes-favoris' component={Mes_favoris} />
               <Route path='/mes-messages' component={Mes_messages} />
      </Routes> 
      
    </router>
  </StrictMode>
);
*/