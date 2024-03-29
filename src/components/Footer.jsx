import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {  

    return (
        <footer>
            <div className="circlesVertical">
                <div className="circlesV"></div>
                <div className="circlesV"></div>
                <div className="circlesV"></div>
            </div>
            <a href="https://www.linkedin.com/in/tilly-campbell/" target="_blank" rel="noopener noreferrer">
                <StaticImage className="linkedIcon" src="../images/linkedinIcon.png"></StaticImage>
            </a>
            <a href="https://github.com/tillyjay" target="_blank" rel="noopener noreferrer">
                <StaticImage className="githubIcon" src="../images/githubIcon.png"></StaticImage>
            </a>
            <div>tillyJay 2024</div>
            <div className="circlesHorizontal">
                <div className="circlesH"></div>
                <div className="circlesH"></div>
                <div className="circlesH"></div>
            </div>
        </footer>
    );
}

export default Footer;