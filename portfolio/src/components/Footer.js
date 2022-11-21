import React from "react";
import "./css/Footer.css"
import icon from "./img/githubicon.png";
import StackOverflow from "./img/StackOverflow.png";
import linkedIn from "./img/linkedIn.png";

function Footer() {
    return (
        <div className="footerContainer">
            <h1>Find me on:</h1>
            <a href="https://github.com/AbdalehHersi">
                <img id="githubIcon" src={icon} alt="icon" />
            </a>
            <a href="https://stackoverflow.com/users/19364901/abdaleh-hersi">
                <img id="stackOverflowIcon" src={StackOverflow} alt="icon" />
            </a>
            <a href="https://www.linkedin.com/in/abdaleh-hersi-605583242/">
                <img id="linkedInIcon" src={linkedIn} alt="icon" />
            </a>
        </div>
    )
}

export default Footer; 