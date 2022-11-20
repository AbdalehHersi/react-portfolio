import React from "react";
import ProjectsComponent from "./projects/ProjectComponent"
import projData from "../data/projectData.json"

function Projects() {

    return (
        <div>
            {projData.map((data) => <ProjectsComponent individual={data} />)}
        </div>
    )
}

export default Projects; 