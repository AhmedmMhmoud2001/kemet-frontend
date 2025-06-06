import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './adminprojects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem('token');

  const fetchProjects = async () => {
    try {
      const res = await axios.get('/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Delete this project?');
    if (!confirm) return;

    try {
      await axios.delete(`/api/projects/${id}`, {
        headers: { 'x-auth-token': token }
      });
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      alert('Failed to delete project'+err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="admin-projects">
      <h2>All Projects</h2>
      <Link to="/admin/adminprojects/add">
        <button className="add-btn">Add New Project</button>
      </Link>

      <div className="admin-projects-list">
        {projects.map(p => (
          <div key={p._id} className="admin-project-card">
            <img src={p.imageUrl} alt={p.title} />
            <div className="admin-project-details">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p><strong>Service:</strong> {p.service?.name || '—'}</p>
              <div className="project-actions">
                {/* <Link to={`/admin/projects/edit/${p._id}`}>
                  <button className="edit-btn">Edit</button>
                </Link> */}
                <button className="delete-btn" onClick={() => handleDelete(p._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
