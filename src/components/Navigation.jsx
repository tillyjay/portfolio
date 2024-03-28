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
        <div className={`box ${menuOpen ? 'active' : 'not-active'}`}>
          <div className="btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      <div className="menu">
        <ul>
          <li>
            <Link to="/index">Home</Link>
          </li>
          <li>
            <Link to="/portfolioexamples">Work</Link>
          </li>
          <li>
            <Link to="/skills">Resume</Link>
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