import React, { useState } from 'react'
import { Link} from "react-router-dom"
import Project from './Project';
import LOGO from "../src/resource/nikeevtu.jpg"


const Portfolio = () => {
 
  return (
    <div>
      <nav className='nav1'>
           <div className="navdiv1" ><img  className="nikepic"src={LOGO}></img></div>
          
             
             <div className='menublock'>
              <ul>
              <li><Link to={"/"} style={{textDecoration:"none"}}>Home</Link></li>
                <li><Link to={"/About"} style={{textDecoration:"none"}}>About</Link></li>
                <li><Link to={"/skills"} style={{textDecoration:"none"}}>Skills</Link></li>
                <li ><Link to={"/education"} style={{textDecoration:"none"}}>Education</Link></li>
                
                <li><Link to={"/project"} style={{textDecoration:"none"}}>Project</Link></li>
           
                <li><Link to={"/contact"} style={{textDecoration:"none"}}>Contact</Link></li>
              </ul>
             </div>
              


  </nav>



    </div>
  )
}

export default Portfolio
