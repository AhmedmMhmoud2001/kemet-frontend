import React from 'react';
import './TopBar.css';
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        
         <FaEnvelope className="topbar-icon" />
        <a href="mailto:ahmedmahmoud2152001@gmail.com" className="topbar-link">
          ahmedmahmoud2152001@gmail.com
        </a>
      </div>
      <div className="topbar-right">
       <FaPhoneAlt className="topbar-icon" />
        <a href="tel:+201002265274" className="topbar-link">
          +20 100 226 5274
        </a>
        <FaLinkedin className="topbar-icon" />
        <a 
          href="https://www.linkedin.com/in/ahmed-mahmoud-mohammed-mohammed/" 
          className="topbar-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default TopBar;
