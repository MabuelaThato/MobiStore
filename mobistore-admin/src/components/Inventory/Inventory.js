import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/inventory', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setInventory(res.data);
      } catch (err) {
        console.error(err);
        // Mock data for demo
        setInventory([{ id: 1, name: 'Product A', quantity: 10 }, { id: 2, name: 'Product B', quantity: 5 }]);
      }
    };
    fetchInventory();
  }, []);

  return (
    <div>
      <h2>Inventory Tracking</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;