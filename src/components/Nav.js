import { useState, useEffect } from "react";
import '../App.css';
import { Link } from "react-scroll"
import burger from "../images/burger.png"



function Nav() {
    let [revealMenu, setRevealMenu] = useState(false)

    const toggleMenu = () => {
        setRevealMenu(!revealMenu)
    }

  return (
   <>
   <div className="nav">
   <nav className="nav-bar">
   <span onClick={toggleMenu} class="material-symbols-outlined menu">
    menu
    </span>
    <ul className="nav-links">
        <li><Link to="home" spy={true} smooth={true}>H O M E</Link></li>
        <li><Link to="about"  spy={true} smooth={true} offset={-150}>A B O U T</Link></li>
        <li><Link to="skills" spy={true} smooth={true} offset={-90}>S K I L L S</Link></li>
        <li><Link to="projects"  spy={true} smooth={true} offset={-20}>P R O J E C T S</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-120}>C O N T A C T</Link></li>
    </ul>
    {revealMenu == true ?
    <ul className = "menu-links">
        <li className="menu-link"><Link to="home" spy={true} smooth={true} onClick={toggleMenu}>H O M E</Link></li>
        <li className="menu-link"><Link to="about"  spy={true} smooth={true} offset={-70} onClick={toggleMenu}>A B O U T</Link></li>
        <li className="menu-link"><Link to="skills" spy={true} smooth={true} offset={-120} onClick={toggleMenu}>S K I L L S</Link></li>
        <li className="menu-link"><Link to="projects"  spy={true} smooth={true} offset={40} onClick={toggleMenu}>P R O J E C T S</Link></li>
        <li className="menu-link"><Link to="contact" spy={true} smooth={true} offset={-80} onClick={toggleMenu}>C O N T A C T</Link></li>
    </ul>
    :
    null
    }
   </nav>
   </div>
   </>
  );
}

export default Nav;