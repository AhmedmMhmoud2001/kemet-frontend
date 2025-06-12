import React, { useState } from 'react';
import axios from 'axios';
import './ChangePassword.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMsg('');
    setError('');

    try {
      const token = localStorage.getItem('token');
      const res = await axios.put('/api/admin/change-password',
        { oldPassword, newPassword },
        {
        //   headers:
        //    { Authorization: `Bearer ${token}` }
         headers: { "x-auth-token": token },
        }
      );
      setMsg(res.data.msg);
      setOldPassword('');
      setNewPassword('');
    } catch (err) {
      setError(err.response?.data?.msg || 'An error occurred');
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleChangePassword} className="change-password-form">
        <label>Old Password</label>
        <div className="password-field">
          <input
            type={showOldPassword ? 'text' : 'password'}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <span className="icon" onClick={() => setShowOldPassword(!showOldPassword)}>
            {showOldPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <label>New Password</label>
        <div className="password-field">
          <input
            type={showNewPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <span className="icon" onClick={() => setShowNewPassword(!showNewPassword)}>
            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {msg && <div className="success-msg">{msg}</div>}
        {error && <div className="error-msg">{error}</div>}

        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
