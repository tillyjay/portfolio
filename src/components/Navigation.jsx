import React, { useState } from "react";
import { Link } from "gatsby";
import Triangle from "./triangle";

import '../styles/componentStyles/triangleNavigation.scss';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [arrayConfigs, setArrayConfigs] = useState([
    {
      base: 100,
      height: 200,
      fillColor: "#9C333E",
      borderColor: "#1e130c"
    }

  ]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navigation  ${menuOpen ? "open" : ""}`}>
      {menuOpen && (
        <div className="overlay" onClick={toggleMenu}>
          <div className="triangleContainer">
            {arrayConfigs.map(({ base, height, fillColor, borderColor }, index) => (
              <Triangle
                base={base}
                height={height}
                fillColor={fillColor}
                borderColor={borderColor}
                index={index}
              ></Triangle>
            ))}
          </div>
        </div>
      )}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`box ${menuOpen ? "active" : "not-active"}`}>
          <div className="button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <div className="menu-item ">
              <div className="circle" id="circle1"></div>
              <Link id="indexLink" to="/index">Home</Link>
            </div>
          </li>
          <li>
            <div className="menu-item">
              <div className="circle" id="circle2"></div>
              <Link id="workLink" to="/portfolioexamples">Work</Link>
            </div>
          </li>
          <li>
            <div className="menu-item">
              <div className="circle" id="circle3"></div>
              <Link id="skillsLink" to="/skills">Resume</Link>
            </div>
          </li>
          <li>
            <div className="menu-item">
              <div className="circle" id="circle4"></div>
              <Link id="aboutLink" to="/about">About</Link>
            </div>
          </li>
          <li>
            <div className="menu-item">
              <div className="circle" id="circle5"></div>
              <Link id="contactLink" to="/contact">Contact</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
