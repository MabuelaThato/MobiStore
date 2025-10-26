import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/orders', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setOrders(res.data);
      } catch (err) {
        console.error(err);
        // Mock data for demo
        setOrders([{ id: 1, customer: 'John Doe', status: 'Shipped' }, { id: 2, customer: 'Jane Smith', status: 'Pending' }]);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order Tracking</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;