import React from 'react'
import Portfolio from "./Portfolio"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import "./global.css"
import About from './About'
import Skills from './Skills'
import Home from './Home'
import Education from './Education'
import Project from './Project'
import  Contact  from './Contact'


const App = () => {
  return (
   <Router>
    <Portfolio/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/skills" element={<Skills/>}/>
      <Route  path="/education" element={<Education/>}/>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
   </Router>
  )
}

export default App
