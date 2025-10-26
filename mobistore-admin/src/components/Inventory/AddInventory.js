import React, { useState } from 'react';
import axios from 'axios';

const AddInventory = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/inventory', { name, quantity }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setSuccess('Item added successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add Inventory</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
        <button type="submit">Add</button>
      </form>
      {success && <p>{success}</p>}
    </div>
  );
};

export default AddInventory;