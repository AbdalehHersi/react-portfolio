import React from "react";
import CV from "../misc/WPCV.pdf"
import "../css/Resume.css"

function Resume() {
    return (
        <div id="resumeBody">
            <a href={CV} alt="Cv" download="CV">Download My CV (Work in Progress)</a>
            <ul>
                <h1>Skills</h1>
                <li>HTML, CSS, Javascript</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>Moment.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>OOP</li>
                <li>SQL</li>
                <li>Object Relational Mapping (ORM)</li>
                <li>MVC paradigm</li>
                <li>PWA</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>IndexedDB</li>
            </ul>
        </div>
    )
}

export default Resume; 