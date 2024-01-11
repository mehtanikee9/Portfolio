import React from 'react'
import LOGO from "../src/resource/nikeevtu.jpg"

const About = () => {
  return (
    <div className='about'>
      <div className="aboutt"><h1>About</h1></div>
      <div className="abouttt">
      <div className='about1'><h3 className='span1'>I am freshers graduate in Information Science & Engineering from RRIT. 
        I am interested in Software Developer & Web Development & am seeking exciting opportunities related to the same.<br></br><br></br>
        Technology excites me and I am always in awe of change it drives in the world. Certain Skills that I have include Java,
         JDBC, Hibernate, Servlet, Data Structure & Algorithms, frontend(HTML, CSS, JavaScript, React.js),
          & backend(SQL).<br></br><br></br>
          I believe that the Skills that I have attained from the dynamic & competitive environment life defines me & 
           looking forward to implementing & polishing them in any opportunity that I receive.
          </h3></div>
      <div className='about2'><img src={LOGO} className='imgnike'></img></div>
      </div>
    </div>
  )
}

export default About
