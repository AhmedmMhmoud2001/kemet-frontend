import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  const groupedProjects = projects.reduce((acc, project) => {
    const serviceName = project.service?.name || 'Other';
    if (!acc[serviceName]) acc[serviceName] = [];
    acc[serviceName].push(project);
    return acc;
  }, {});

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>Our Projects</h2>
        {Object.entries(groupedProjects).map(([service, serviceProjects]) => (
          <div key={service} className="project-group">
            <h3>{service}</h3>
            <Slider {...sliderSettings} className="project-slider">
              {serviceProjects.map(p => (
                <div key={p._id} className="project-card">
                  {p.imageUrl && (
                    <img
                      src={p.imageUrl.startsWith('http') ? p.imageUrl : `${p.imageUrl}`}
                      alt={p.title}
                    />
                  )}
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
