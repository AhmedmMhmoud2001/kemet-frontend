// import React, { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";
import { Link } from "react-scroll";
import "./hero.css";

const Hero = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slidesRef = useRef([]);

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   afterChange: (index) => {
  //     setCurrentSlide(index);
  //   },
  // };

  // const images = [
  //   '/images/slide1.png',
  //   '/images/slide1.png',
  //   '/images/slide1.png',
  // ];

  // useEffect(() => {
  //   const activeElement = document.activeElement;

  //   slidesRef.current.forEach((slide, index) => {
  //     if (!slide) return;

  //     const isActive = index === currentSlide;

  //     const focusableElements = slide.querySelectorAll(
  //       'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  //     );

  //     if (isActive) {
  //       slide.removeAttribute('aria-hidden');
  //       slide.removeAttribute('inert');
  //       slide.tabIndex = 0;

  //       focusableElements.forEach((el) => {
  //         el.removeAttribute('tabindex');
  //       });
  //     } else {
  //       slide.setAttribute('aria-hidden', 'true');
  //       slide.setAttribute('inert', '');
  //       slide.tabIndex = -1;

  //       focusableElements.forEach((el) => {
  //         if (el === activeElement) {
  //           el.blur();
  //         }
  //         el.setAttribute('tabindex', '-1');
  //       });
  //     }
  //   });
  // }, [currentSlide]);

  return (
    <section id="home" className="hero-slider-section">
      {/* <Slider {...settings}>
        {images.map((img, index) => ( */}
      <div className="hero-slide" tabIndex={-1}>
        <img
          src="https://res.cloudinary.com/ddsfc2bfy/image/upload/v1749210503/banner_hv0die.png"
          alt={`Slide`}
          className="hero-image"
          draggable={false}
        />
        <div className="hero-overlay">
          <h1>Kemet Mechanical Services</h1>
          <p>
            Kemet Mechanical Services Company is specialized in the field of
            mechanical solutions for factories, specifically in the following
            specialties
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="hero-btn"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* ))}
      </Slider> */}
    </section>
  );
};

export default Hero;
