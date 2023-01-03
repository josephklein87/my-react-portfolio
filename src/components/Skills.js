import { useState, useEffect } from "react";
import '../App.css';

function Skills() {

    return (
     <div id="skills" className="skills-container">
     <h1 className="skills-header">SKILLS</h1>
     <div className="skill-icons">
      
      <div className="icon-div">
      <i className="devicon-html5-plain html" ></i>
      <p>HTML</p>
      </div>

      <div className="icon-div">
      <i className="devicon-css3-plain css"></i>
      <p>CSS</p>
      </div>

      <div className="icon-div">
      <i className="devicon-javascript-plain javascript"></i>
      <p>Javascript</p>
      </div>

      <div className="icon-div">
      <i className="devicon-jquery-plain jquery"></i>
      <p>jQuery</p>
      </div>

      <div className="icon-div">
      <i className="devicon-react-original react"></i>
      <p>React</p>
      </div>

      <div className="icon-div">
      <i className="devicon-express-original express"></i>
      <p>Express</p>
      </div>

      <div className="icon-div">
      <i className="devicon-mongodb-plain mongodb"></i>
      <p>MongoDB</p>
      </div>

      <div className="icon-div">
      <i className="devicon-python-plain python"></i>
      <p>Python</p>
       </div>

      <div className="icon-div">
      <i className="devicon-django-plain django"></i>
      <p>Django</p>
      </div>

     </div>
     </div>
    
    );
  }
  
  export default Skills;