import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './adminprojects.css';

const EditProject = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ title: '', description: '', service: '' });
  const [image, setImage] = useState(null);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`/api/projects/${id}`);
        setForm({
          title: res.data.title,
          description: res.data.description,
          service: res.data.service?._id || ''
        });
      } catch (err) {
        console.error('Error fetching project:', err);
      }
    };

    const fetchServices = async () => {
      try {
        const res = await axios.get('/api/services');
        setServices(res.data);
      } catch (err) {
        console.error('Error loading services:', err);
      }
    };

    fetchProject();
    fetchServices();
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('service', form.service);
    if (image) formData.append('image', image);

    try {
      await axios.put(`/api/projects/${id}`, formData, {
        headers: {
          'x-auth-token': token,
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Project updated successfully!');
      navigate('/admin/projects');
    } catch (err) {
      alert('Failed to update project'+err);
    }
  };

  return (
    <div className="admin-projects">
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit} className="project-form" encType="multipart/form-data">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          {services.map(s => (
            <option key={s._id} value={s._id}>{s.name}</option>
          ))}
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
        />
        <button type="submit" className="add-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProject;
