import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const sections = ['home', 'about', 'services', 'projects', 'clients', 'contact'];

  return (
    
      <nav className="navbar">
       
        <img src="/images/logo.png" className='logo' alt="logo" />

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
   
  );
};

export default Navbar;
