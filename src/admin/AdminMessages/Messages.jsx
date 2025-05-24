import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('/api/contact', {
      headers: { 'x-auth-token': token }
    })
      .then(res => setMessages(res.data))
      .catch(err => console.error('Error fetching messages:', err));
  }, [token]);

  return (
    <div className="admin-messages">
      <h2>Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul className="message-list">
          {messages.map(msg => (
            <li key={msg._id}>
              <h4>{msg.name}</h4>
              <p><strong>Email:</strong> {msg.email || '—'}</p>
              <p><strong>Phone:</strong> {msg.phone || '—'}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p><em>{new Date(msg.createdAt).toLocaleString()}</em></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Messages;
