import React from "react";
import linkedinIcon from "../images/linkedinIcon.png";
import githubIcon from "..images/githubIcon.png";

const Footer = () => {  

    return (
        <footer>
            <div className="circlesVertical">
                <div className="circlesV"></div>
                <div className="circlesV"></div>
                <div className="circlesV"></div>
            </div>
            <a href="https://www.linkedin.com/in/tilly-campbell/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/tillyjay" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
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