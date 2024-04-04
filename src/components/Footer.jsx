import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {  

    return (
        <footer>
            <div className="footerBase">
            <div className="foot d-flex justify-content-start p-5">
                <div className="unskew d-flex mt-3">
            <div className="circlesVertical">
                <div id="circleV1" className="circlesV"></div>
                <div id="circleV2" className="circlesV"></div>
                <div id="circleV3" className="circlesV"></div>
            </div>
            <div className="iconsRow d-flex">
            <a className="me-3" href="https://www.linkedin.com/in/tilly-campbell/" target="_blank" rel="noopener noreferrer">
                <StaticImage className="linkedIcon" src="../images/linkedinIcon.png"></StaticImage>
            </a>
            <a className="me-3" href="https://github.com/tillyjay" target="_blank" rel="noopener noreferrer">
                <StaticImage className="githubIcon" src="../images/githubIcon.png"></StaticImage>
            </a>
            <div className="pTextFont text-center signOff">
            <div id="signOffName">tillyJay</div>
            <div>2024</div>
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