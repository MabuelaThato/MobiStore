import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import CreateStore from './components/Store/CreateStore';
import Inventory from './components/Inventory/Inventory';
import AddInventory from './components/Inventory/AddInventory';
import Orders from './components/Orders/Orders';
import Navbar from './components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!isAuthenticated ? <Signup onSignup={handleLogin} /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/create-store" element={isAuthenticated ? <CreateStore /> : <Navigate to="/login" />} />
        <Route path="/inventory" element={isAuthenticated ? <Inventory /> : <Navigate to="/login" />} />
        <Route path="/add-inventory" element={isAuthenticated ? <AddInventory /> : <Navigate to="/login" />} />
        <Route path="/orders" element={isAuthenticated ? <Orders /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;