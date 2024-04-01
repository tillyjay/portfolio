import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {  

    return (
        <footer>
            <div className="footerBase">
            <div className="foot d-flex justify-content-end p-5">
                <div className="unskew d-flex mt-3">
            <div className="circlesVertical">
                <div className="circlesV"></div>
                <div className="circlesV"></div>
                <div className="circlesV"></div>
            </div>
                <a className="me-3" href="https://www.linkedin.com/in/tilly-campbell/" target="_blank" rel="noopener noreferrer">
                <StaticImage className="linkedIcon" src="../images/linkedinIcon.png"></StaticImage>
            </a>
            <a className="me-3" href="https://github.com/tillyjay" target="_blank" rel="noopener noreferrer">
                <StaticImage className="githubIcon" src="../images/githubIcon.png"></StaticImage>
            </a>
            <div className="d-flex-col text-center">
            <div>tillyJay</div>
            <div>2024</div>
            </div>
            <div className="circlesHorizontal">
                <div className="circlesH"></div>
                <div className="circlesH"></div>
                <div className="circlesH"></div>
            </div>
            </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;