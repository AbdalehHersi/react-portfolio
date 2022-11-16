import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function PortfolioContainer({ currentIndexPage }) {

    const renderPage = () => {
        switch (currentIndexPage) {
            case "Projects":
                return <Projects />;
            case "Resume":
                return <Resume />;
            case "Contact":
                return <Contact />;
            default: return <About />
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    )
}

export default PortfolioContainer; 