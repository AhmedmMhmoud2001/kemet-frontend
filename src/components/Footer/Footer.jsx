import React from 'react';
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kemet Mechanical Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
