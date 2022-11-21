import React from "react";
import "../../css/Project.css";
import icon from "../../img/githubicon.png";
import webpage from "../../img/webpageIcon.png"

function ProjectsComponent(props) {

    return (
        <>
            <div className="projectContainer">
                <div className="projDetails">
                    <h1 className="projHeader">{props.individual.title}</h1>
                    <h2 className="projh2">{props.individual.description}</h2>
                    <div className="projLinks">
                        <a href={props.individual.url}>
                        <img className="githubIcon" src={webpage} alt="icon" />
                        </a>
                        <a href={props.individual.gitRepo}>
                            <img className="githubIcon" src={icon} alt="icon" />
                        </a>
                    </div>
                </div>
                <div className="imageContainer">
                    <img className="projImg" src={props.individual.projImage} alt="project" />
                </div>
            </div>
        </>
    )
}

export default ProjectsComponent; 