import { useState, useEffect } from "react";
import '../App.css';
import resume from '../images/Resume-Icon.svg'
import linkedin from '../images/linkedin-logo.png'
import github from '../images/github-logo.png'
import arrow from '../images/arrow-fat-down.png'
import { Link } from "react-scroll"
import cv from "../images/Joe Klein Software Developer Resume.pdf"



function Home() {
    let [workButton, setWorkButton] = useState(false)
    let [resumeButton, setResumeButton] = useState(false)
    let [linkedinButton, setLinkedinButton] = useState(false)
    let [githubButton, setGithubButton] = useState(false)

    const buttonSwitchIcon = () => {
        setWorkButton(true)
    }
    const buttonSwitchText = () => {
        setWorkButton(false)
    }

    const resumeSwitchIcon = () => {
        setResumeButton(true)
    }

    const resumeSwitchText = () => {
        setResumeButton(false)
    }

    const linkedSwitchIcon = () => {
        setLinkedinButton(true)
    }

    const linkedSwitchText = () => {
        setLinkedinButton(false)
    }

    const gitSwitchIcon = () =>{
        setGithubButton(true)
    }

    const gitSwitchText = () => {
        setGithubButton(false)
    }

  return (
   <>
   <div id="home" className="home-container" >
   <div className="home-message">
    <div className="name-container">
    <div className="name-container-1">
        <h1 className="joe">JOE</h1> 
        <h1 className='full-stack-text'>Full-Stack</h1>
   </div>
   <div className="name-container-2">
        <h1 className="my-name">
        KLEIN!
        </h1>
        <div className="software-develop">
        <h1 className="fullstack">
            Software
        </h1>
        <h1 className="fullstack">
            Developer
        </h1>
        </div>
    </div>
    </div>
   </div>
   <div className="button-container">
    <Link to="projects"spy={true} smooth={true} offset={-20}><div className="see-work" onMouseEnter={buttonSwitchIcon} onMouseLeave={buttonSwitchText} onClick={buttonSwitchIcon}>
        {!workButton ? 
        <>
        <h4>P R O J E C T S</h4>
        </>
        :
        <img className="fat-arrow" src={arrow} />
        }
    </div></Link>
    <a href={cv} target='_blank' rel="noreferrer noopener"><div className="see-resume" onMouseEnter={resumeSwitchIcon} onMouseLeave={resumeSwitchText} onClick={resumeSwitchIcon}>
        {!resumeButton ?
        <h4>R E S U M E</h4>
        :
        <>
        <svg className="resume-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4,4v16c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V4c0-1.105-0.895-2-2-2H6C4.895,2,4,2.895,4,4z M6,9 c0-1.105,0.895-2,2-2h0.5C7.672,7,7,6.328,7,5.5S7.672,4,8.5,4S10,4.672,10,5.5S9.328,7,8.5,7H9c1.105,0,2,0.895,2,2v1H6V9z M14,19 H6v-2h8V19z M18,15H6v-2h12V15z M18,6h-5V4h5V6z M18,10h-5V8h5V10z"/>
        </svg>
        </>
        }
    </div></a>
    <a href="https://www.linkedin.com/in/joseph-p-klein" target='_blank' rel="noreferrer noopener"><div className="see-linkedin" onMouseEnter={linkedSwitchIcon} onMouseLeave={linkedSwitchText} onClick={linkedSwitchIcon}>
        {!linkedinButton ?
        <h4>L I N K E D I N</h4>
        :
        <img className="linkedin-icon" src ={linkedin} />
        }
    </div></a>
    <a href="https://github.com/josephklein87" target='_blank' rel="noreferrer noopener"><div className="see-github" onMouseEnter={gitSwitchIcon} onMouseLeave={gitSwitchText} onClick={gitSwitchIcon}>
        {!githubButton ?
        <h4>G I T H U B</h4>
        :
        <img className="github-icon" src={github} />
        }
    </div></a>
   </div>
   </div>
   </>
  );
}

export default Home;