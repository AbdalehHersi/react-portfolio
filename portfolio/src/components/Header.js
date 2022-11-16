import React, { useState } from "react";
import "../Header.css";
import NavbarTabs from "./NavbarTabs";
import PortfolioContainer from "./PortfolioContainer";



function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="headerNameContainer">
                <h1 className="headerName">Abdaleh Hersi</h1>
            </div>
            <NavbarTabs handlePageChange={handlePageChange}/>
            <PortfolioContainer currentIndexPage={currentPage}/>
        </>
    )
}

export default Header; 