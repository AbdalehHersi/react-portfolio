import React, { useState } from "react";
import "../components/css/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAddressCard, faDiagramProject, faFile, faMessage } from '@fortawesome/free-solid-svg-icons'



function NavbarTabs({ handlePageChange }) {

    const [currentvisibility, setVisibility] = useState(false);

    const handleToggle = () => {
        (currentvisibility) ? setVisibility(false) : setVisibility(true)
    }

    const handleTooltips = (data) => {
        setTimeout(() => {
            switch (data) {
                case "About":
                    let tooltip = document.getElementById("aboutTooltip");
                    tooltip.dataset.tooltip = "about";
                    break;
                default:
                    console.log("Default")
                    break;
            }
        }, 2000)
    }

    return (
        <ul className="navbarLinks">

            <button className="navbtn" onClick={handleToggle}><FontAwesomeIcon icon={faBars} /></button>

            <li className="navbarList">
                <div id="aboutTooltip">
                    <a
                    href="#About"
                    style={(currentvisibility) ? { visibility: "visible" } : { visibility: "hidden" }}
                    className="navAnchors"
                    id="about"
                    aria-label="about section"
                    onClick={() => handlePageChange("About")}
                    onMouseEnter={() => handleTooltips("About")}
                    onMouseLeave={() => handleTooltips("None")}>
                    <FontAwesomeIcon icon={faAddressCard} />
                </a>
                </div>
                

                <a
                    href="#Projects"
                    style={(currentvisibility) ? { visibility: "visible" } : { visibility: "hidden" }}
                    className="navAnchors"
                    id="projects"
                    aria-label="projects section"
                    onClick={() => handlePageChange("Projects")}>
                    <FontAwesomeIcon icon={faDiagramProject} />
                </a>

                <a
                    href="#Resume"
                    style={(currentvisibility) ? { visibility: "visible" } : { visibility: "hidden" }}
                    className="navAnchors"
                    id="resume"
                    aria-label="resume section"
                    onClick={() => handlePageChange("Resume")}>
                    <FontAwesomeIcon icon={faFile} />
                </a>

                <a
                    href="#Contact"
                    style={(currentvisibility) ? { visibility: "visible" } : { visibility: "hidden" }}
                    className="navAnchors"
                    id="contact"
                    aria-label="contact section"
                    onClick={() => handlePageChange("Contact")}>
                    <FontAwesomeIcon icon={faMessage} />
                </a>
            </li>
        </ul>
    )
}

export default NavbarTabs; 