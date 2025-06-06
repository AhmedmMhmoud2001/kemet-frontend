import React from "react";
import "./topbar.css";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <FaEnvelope className="topbar-icon" />
        <a href="mailto:info@KemetMechanical.com" className="topbar-link">
          info@KemetMechanical.com
        </a>
      </div>
      <div className="topbar-right">
        <FaPhoneAlt className="topbar-icon" />
        <a href="tel:+201002011068" className="topbar-link">
          +201002011068
        </a>
        <FaLinkedin className="topbar-icon" />
        <a
          href="  https://www.linkedin.com/in/kemet-mechanical"
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
