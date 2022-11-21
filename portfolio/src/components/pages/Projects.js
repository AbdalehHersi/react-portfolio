import React from "react";
import ProjectsComponent from "./projects/ProjectComponent"
import projData from "../data/projectData"

function Projects() {

    return (
        <div>
            {projData.map((data) => <ProjectsComponent key={data.id} individual={data} />)}
        </div>
    )
}

export default Projects; 