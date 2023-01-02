import { useState, useEffect } from "react";
import '../App.css';
import unwatchables from '../images/unwatchables.png'
import recipeapp from '../images/recipeapp.png'


function Projects() {
    let [currentProject, setCurrentProject] = useState('start')

    const projectClick = (e) => {
        if (e.target.id === "unwatchables") {
            setCurrentProject("unwatchables")
        } else if (e.target.id === "recipeapp") {
            setCurrentProject("chef")
        }
    }

    return(
        <>
        <div id="projects" className="projects-container">
            <h1 className="projects-header">PROJECTS</h1>
            <div className="project-images">
                <img className="project-img" id="unwatchables" src={unwatchables} onClick={projectClick} />
                <img className="project-img" id="recipeapp" src={recipeapp} onClick={projectClick} />    
            </div>
            <div className="project-text-container">
            
            {(currentProject==='start') ? <p className='project-text start-text'>CLICK PROJECT FOR MORE INFO</p> : null}
           
            {(currentProject==='unwatchables') ?
            <>
            <h5 className="project-text project-text-header">THE <span className="big-text">UNWATCHABLES</span></h5>
            <p className="project-text">Created with: HTML, CSS, Javascript, Express, MongoDB</p>
            <p className="project-text"> "The Unwatchables" is a movie-database / social network in which users can upload the worst movies they've ever seen, then vote to agree or disagree, as well as submit comments for these films with other users on the site.</p>

            <div className="project-button-container">
                <a href="https://desolate-inlet-57881.herokuapp.com/" target='_blank' rel="noreferrer noopener"><div className="projects-button">
                    <p className="project-button-text">D E M O</p>
                </div></a>
                <a href="https://github.com/josephklein87/CRUDapp" target='_blank' rel="noreferrer noopener"><div className="projects-button">
                    <p className="project-button-text">G I T H U B</p>
                </div></a>
            </div>
            </>
            :
            null       
            }
            {(currentProject==='chef') ?

            <>
            <h5 className="project-text project-text-header">YES <span className="big-text">CHEF!</span></h5>
            <p className="project-text">Created with: HTML, CSS, React, Express, MongoDB</p>
            <p className="project-text">"Yes, Chef!" is a recipe organizing and rating app where users can submit their favorite recipes, as well as rate them in a five-star system which takes the average of all user ratings.</p>
            <p className="project-text">Users can favorite recipes they want to save for later, as well as sort recipes by a variety of parameters including spicy, vegetarian and time to cook.</p>
            <div className="project-button-container">
            <a href="https://joepeterrecipeapp.netlify.app/" target='_blank' rel="noreferrer noopener"><div className="projects-button">
                    <p className="project-button-text">D E M O</p>
                </div></a>
                <a href="https://github.com/josephklein87/recipeAppFront-end" target='_blank' rel="noreferrer noopener"><div className="projects-button">
                    <p className="project-button-text">G I T H U B</p>
                </div></a>
            </div>
            </>
            
            :
            null
            }
            </div>
        </div>  
        </>
    )
}

export default Projects;