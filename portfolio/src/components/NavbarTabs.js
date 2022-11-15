import React from "react";

function NavbarTabs({ handlePageChange }) {
    return (
        <ul>
            <li>
                <a href="#About" onClick={ () => handlePageChange("About")}>About</a>
            </li>

            <li>
                <a href="#Projects" onClick={ () => handlePageChange("Projects")}>Projects</a>
            </li>

            <li>
                <a href="#Resume" onClick={ () => handlePageChange("Resume")}>Resume</a>
            </li>

            <li>
                <a href="#Contact" onClick={ () => handlePageChange("Contact")}>Contact</a>
            </li>
            
        </ul>
    )
}

export default NavbarTabs; 