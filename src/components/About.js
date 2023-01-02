import { useState, useEffect } from "react";
import '../App.css';



function About() {
  return (
   <>
   <div id="about" className="about-me-container">
   <h1 className="about-me-header">ABOUT</h1>
   <div className="about-me-text">
   <p>Joe Klein is a full-stack software developer and former television and media professional, with a passion for problem-solving and creative solutions, as well as an eye for top-quality presentation.</p>
   <p>Bringing with him a wealth of experience from the fast-paced, deadline-driven world of video production, he is highly motivated to deliver your projects, fully featured and on schedule.</p>
   <p>He is well-versed in multiple coding languages and frameworks for both the front and back-end, and is armed with a forward-thinking mentality and eagerness to learn and grow with new technologies.</p>
   <p>Currently residing in Jersey City, NJ, he is open to in-office work in the NYC area, as well as remote work anywhere in the globe.</p>
   </div>
   </div>
   </>
  );
}

export default About;