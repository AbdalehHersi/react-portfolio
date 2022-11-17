import React, { useState } from "react";
import "../components/css/Header.css";
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
                <h1 className="headerName onLoadHighlight">Abdaleh Hersi</h1>
            </div>
            <NavbarTabs handlePageChange={handlePageChange}/>
            <PortfolioContainer currentIndexPage={currentPage}/>
        </>
    )
}

export default Header; 