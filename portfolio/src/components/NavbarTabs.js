import React, { useState } from "react";
import "../Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAddressCard, faDiagramProject, faFile, faMessage } from '@fortawesome/free-solid-svg-icons'



function NavbarTabs({ handlePageChange }) {

    const [currentvisibility, setVisibility] = useState(true);

    const handleToggle = () => {
        (currentvisibility) ? setVisibility(false) : setVisibility(true)
        console.log(currentvisibility)
    }

    return (
        <ul className="navbarLinks">

            <button className="navbtn" onClick={handleToggle}><FontAwesomeIcon icon={faBars} /></button>

            <li className="navbarList">

                <a
                    href="#About"
                    style={(currentvisibility) ? { visibility: "visible" } : { visibility: "hidden" }}
                    className="navAnchors"
                    id="about"
                    onClick={() => handlePageChange("About")}>
                    <FontAwesomeIcon icon={faAddressCard} />
                </a>

                <a
                    href="#Projects"
                    style={(currentvisibility) ? { visibility: "visible" } : { visibility: "hidden" }}
                    className="navAnchors"
                    id="projects"
                    onClick={() => handlePageChange("Projects")}>
                    <FontAwesomeIcon icon={faDiagramProject} />
                </a>

                <a
                    href="#Resume"
                    style={(currentvisibility) ? { visibility: "visible" } : { visibility: "hidden" }}
                    className="navAnchors"
                    id="resume"
                    onClick={() => handlePageChange("Resume")}>
                    <FontAwesomeIcon icon={faFile} />
                </a>

                <a
                    href="#Contact"
                    style={(currentvisibility) ? { visibility: "visible" } : { visibility: "hidden" }}
                    className="navAnchors"
                    id="contact"
                    onClick={() => handlePageChange("Contact")}>
                    <FontAwesomeIcon icon={faMessage} />
                </a>
            </li>
        </ul>
    )
}

export default NavbarTabs; 