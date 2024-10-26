import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {  
    //initialize state with current year
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); 

    //update year dynamically
    useEffect(() => {
        const updateYear = () => {
            setCurrentYear(new Date().getFullYear()); 
        };
        
        //set interval to update the year at the end of the year
        //update once a day
        const intervalId = setInterval(updateYear, 1000 * 60 * 60 * 24); 
        //cleanup interval on unmount
        return () => clearInterval(intervalId); 
    }, []);

    return (
        <footer className="footer-main">
            <div className="footerBase">
            <div className="foot d-flex justify-content-start p-5">
                <div className="unskew d-flex mt-3">
            <div className="circlesVertical">
                <div id="circleV1" className="circlesV"></div>
                <div id="circleV2" className="circlesV"></div>
                <div id="circleV3" className="circlesV"></div>
            </div>
            <div className="iconsRow d-flex">
            <a className="iconLinks me-3" href="https://www.linkedin.com/in/tilly-campbell/" target="_blank" rel="noopener noreferrer">
                <StaticImage className="linkedIcon" src="../images/linkedinIcon.png" alt="LinkedIn Icon"></StaticImage>
            </a>
            <a className="iconLinks me-3" href="https://github.com/tillyjay" target="_blank" rel="noopener noreferrer">
                <StaticImage className="githubIcon" src="../images/githubIcon.png" alt="Github Icon"></StaticImage>
            </a>
            <div className="pTextFont text-center signOff">
            <div id="signOffName">tillyJay</div>
            <div>{currentYear}</div>
            </div>
            </div>
            <div className="circlesHorizontal">
                <div id="circle4" className="circlesH"></div>
                <div id="circleV5" className="circlesH"></div>
                <div id="circleV6" className="circlesH"></div>
            </div>
            </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;