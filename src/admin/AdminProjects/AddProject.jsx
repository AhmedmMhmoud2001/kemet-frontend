import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./adminprojects.css";

const AddProject = () => {
  const [form, setForm] = useState({ title: "", description: "", service: "" });
  const [image, setImage] = useState(null);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/api/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Failed to load services:", err));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("service", form.service);
    if (image) formData.append("image", image);

    try {
      await axios.post("/api/projects", formData, {
        headers: {
          "x-auth-token": token,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Project added successfully!");
      navigate("/admin/adminprojects");
    } catch (err) {
      alert("Failed to add project" + err);
    }
  };

  return (
    <div className="admin-projects">
      <h2>Add New Project</h2>
      <form
        onSubmit={handleSubmit}
        className="project-form"
        encType="multipart/form-data"
      >
        <input
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
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
          {services.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit" className="add-btn">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
