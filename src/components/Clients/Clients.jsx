import React from 'react';
import Slider from 'react-slick';
import './Clients.css'

const Clients = () => {
  const clients = [
    { name: 'Sinai Cement', logo: '/clients/sinai.png' },
    { name: 'Armed Forces', logo: '/clients/armed-forces.png' },
    { name: 'Vicat', logo: '/clients/vicat.png' },
    { name: 'Suez Cement', logo: '/clients/suez.png' },
    { name: 'National Cement', logo: '/clients/national.png' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <section id="clients" className="section clients-section">
      <div className="container">
        <h2>Our Clients</h2>
        <Slider {...settings}>
          {clients.map(client => (
            <div key={client.name} className="client-slide">
              <img src={client.logo} alt={client.name} />
              <p>{client.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
