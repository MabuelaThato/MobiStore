import React, { useState } from 'react';
import axios from 'axios';

const CreateStore = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/stores', { name, description }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setSuccess('Store created successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Create Store</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Store Name" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <button type="submit">Create</button>
      </form>
      {success && <p>{success}</p>}
    </div>
  );
};

export default CreateStore;