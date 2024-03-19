import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../styles/componentStyles/navigation.scss';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
        <div className={`navigation ${menuOpen ? 'open' : ''}`}>
        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <div className="close-icon">
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Work</Link>
            </li>
            <li>
              <Link to="/services">Resume</Link>
            </li>
            <li>
              <Link to="/contact">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li> 
          </ul>
        </div>
      </div>
    );
  };

export default Navigation;
