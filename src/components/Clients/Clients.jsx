import React from "react";
import Slider from "react-slick";
import "./Clients.css";

const Clients = () => {
  const clients = [
    { name: "Sinai cement", logo: "https://res.cloudinary.com/ddsfc2bfy/image/upload/v1749209258/Sinai-cement_huaxym.jpg" },
    {
      name: "sinai cement white",
      logo: "https://res.cloudinary.com/ddsfc2bfy/image/upload/v1749209261/sinai-cement-white_yq7nup.jpg",
    },
    { name: "Alminyai cement", logo: "https://res.cloudinary.com/ddsfc2bfy/image/upload/v1749209261/Alminyai-cement_brptyb.png" },
    {
      name: "misr bani swaif cement",
      logo: "https://res.cloudinary.com/ddsfc2bfy/image/upload/v1749209266/misr-bani-swaif-cement_grqasc.png",
    },
    {
      name: "Egyptian armed force",
      logo: "https://res.cloudinary.com/ddsfc2bfy/image/upload/v1749209264/Egyptian-armed-force_h2viy1.png",
    },
    {
      name: "Egptian air force",
      logo: "https://res.cloudinary.com/ddsfc2bfy/image/upload/v1749209263/Egyptian_Air_Force_emblem.svg_r0pppt.png",
    },
    { name: "Arab mining company", logo: "https://res.cloudinary.com/ddsfc2bfy/image/upload/v1749209261/logo.4876f50_wzcwzu.png" },
    { name: "Vicat for cement", logo: "https://res.cloudinary.com/ddsfc2bfy/image/upload/v1749209264/logo_vicat_en_vqunbt.svg" },
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
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section id="clients" className="section clients-section">
      <div className="container">
        <h2>Our Clients</h2>
        <Slider {...settings}>
          {clients.map((client) => (
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
