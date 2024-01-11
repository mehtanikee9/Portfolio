import React from 'react'

const Project = () => {
  return (
    <div className='project'>
    <div><h1>Project</h1></div>
    <div className='projectp'>
    <div className="projecta">
      <img  className="np" src='https://www.99acres.com/microsite/articles/files/2015/06/calculator-925385_1280-1.jpg'></img>
    <h3 style={{textAlign:"center"}}>Calculator</h3>
     <ul className='list'>
      <li>Calculator by using HTML, CSS & JavaScript</li>
      <li>Fully customisable </li>
     </ul>
    <a href='https://github.com/mehtanikee9/Calculator.git'> <button className="gitl">Github</button></a>
    </div>
    <div className="projecta"><img  className="np" src='https://media.istockphoto.com/id/1285308242/photo/to-do-list-text-on-notepad.jpg?s=612x612&w=0&k=20&c=p85bCVQZwvkrqqqNOJGg2QuPDu6ynTlQHkASQOTELh8='></img>
    <h3 style={{textAlign:"center"}}>MVC_TODO List</h3>
    <ul className='list'>
      <li>MVC_TODO List by using Spring & Servlet</li>
      <li>Functionality of Session Tracking</li>
     </ul>
   <a href='https://github.com/mehtanikee9/MVC_TODO.git'>  <button className="gitl">Github</button></a>
    </div>
    <div className="projecta"><img className="np"  src='data:image/jpeg;base64,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'></img>
    <h3 style={{textAlign:"center"}}>Netflix Clone</h3>
    <ul className='list'>
      <li>Netflix Clone by using React.js</li>
      {/* <li></li> */}
     </ul>
   <a href=' https://github.com/mehtanikee9/netflix_clone.git'> <button className="gitl">Github</button></a> 
    </div>
    
    </div>
    </div>
  )
}

export default Project
