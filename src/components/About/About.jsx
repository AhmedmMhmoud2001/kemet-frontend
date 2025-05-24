import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2>About Us</h2>
      <div className="container">
        <div className="text">
          
          <p>
            Kemet Mechanical Services was established in 2008 to provide high-quality mechanical maintenance and spare parts solutions for the cement and mining industries in Egypt and the Middle East.
          </p>
          <p>
            Our mission is to deliver integrated mechanical services tailored to our clients’ operational needs, with a strong commitment to precision, safety, and long-term partnerships.
          </p>
          <p>
            We take pride in our certified team, advanced techniques, and proven success in improving industrial efficiency.
          </p>
        </div>
        <div className="image-container">
          <img src="/images/about.jpg" alt="Kemet Mechanical Services" />
        </div>
      </div>
    </section>
  );
};

export default About;
