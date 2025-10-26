import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <nav style={{ background: '#333', color: 'white', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
        <li><Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link></li>
        <li><Link to="/create-store" style={{ color: 'white' }}>Create Store</Link></li>
        <li><Link to="/inventory" style={{ color: 'white' }}>Inventory</Link></li>
        <li><Link to="/add-inventory" style={{ color: 'white' }}>Add Inventory</Link></li>
        <li><Link to="/orders" style={{ color: 'white' }}>Orders</Link></li>
        <li><button onClick={onLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;