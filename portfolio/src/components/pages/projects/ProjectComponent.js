import React from "react";
import "../../css/Project.css";

function ProjectsComponent(props) {
        console.log(props);

    return (
        <div className="container">
            <p>{props.individual.title}</p>
        </div>
    )
}

export default ProjectsComponent; 