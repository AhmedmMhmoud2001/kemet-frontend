import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-cards">
        <Link to="/admin/adminprojects" className="dashboard-card">
          📁 Manage Projects
        </Link>
        {/* <Link to="/admin/adminprojects/add" className="dashboard-card">
          ➕ Add Project
        </Link> */}
        <Link to="/admin/services" className="dashboard-card">
          ⚙️ Manage Services
        </Link>
        <Link to="/admin/messages" className="dashboard-card">
          📬 Contact Messages
        </Link>
        <Link to="/admin/ChangePassword" className="dashboard-card">
           ChangePassword
        </Link>
        <button className="logout-button" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
