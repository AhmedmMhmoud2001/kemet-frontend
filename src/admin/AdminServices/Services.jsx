import React, { useEffect, useState } from "react";
import axios from "axios";
import "./services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const token = localStorage.getItem("token");

  const fetchServices = async () => {
    try {
      const res = await axios.get("/api/services");
      setServices(res.data);
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/services", form, {
        headers: { "x-auth-token": token },
      });
      setForm({ name: "", description: "" });
      fetchServices();
    } catch (err) {
      alert("Failed to add service" + err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this service?")) return;
    try {
      await axios.delete(`/api/services/${id}`, {
        headers: { "x-auth-token": token },
      });
      fetchServices();
    } catch (err) {
      alert("Failed to delete service" + err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="admin-services">
      <h2>Manage Services</h2>

      <form onSubmit={handleAdd} className="service-form">
        <input
          name="name"
          placeholder="Service Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <button type="submit">Add Service</button>
      </form>

      <ul className="service-list">
        {services.map((service) => (
          <li key={service._id}>
            <h4>{service.name}</h4>
            <p>{service.description}</p>
            <button onClick={() => handleDelete(service._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
