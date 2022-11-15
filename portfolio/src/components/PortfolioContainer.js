import React, { useState } from "react";
import NavbarTabs from "./NavbarTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";



function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
    console.log(currentPage)
    const renderPage = () => {
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <About />;
    };

    const handlePageChange = (page) => {
        console.log(page)
        setCurrentPage(page)
    };

    return (
        <div>
            <NavbarTabs handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}

export default PortfolioContainer; 