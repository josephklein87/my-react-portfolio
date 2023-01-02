import { useState, useEffect } from "react";
import '../App.css';

function Skills() {

    return (
     <>
     <div id="skills" className="skills-container">
     <h1 className="skills-header">SKILLS</h1>
     <div className="skill-icons">
      <i className="devicon-html5-plain html" ></i>
      <i className="devicon-css3-plain css"></i>
      <i className="devicon-javascript-plain javascript"></i>
      <i className="devicon-jquery-plain jquery"></i>
      <i className="devicon-react-original react"></i>
      <i className="devicon-express-original express"></i>
      <i className="devicon-mongodb-plain mongodb"></i>
      <i className="devicon-python-plain python"></i>
      <i className="devicon-django-plain django"></i>
     </div>
     </div>
     </>
    );
  }
  
  export default Skills;