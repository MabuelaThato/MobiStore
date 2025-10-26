import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState({ sales: 0, orders: 0, inventory: 0 });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/dashboard/stats', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setStats(res.data);
        // Assume res.data.chartData is an array like [{ month: 'Jan', sales: 400 }, ...]
        setChartData(res.data.chartData || []);
      } catch (err) {
        console.error(err);
        // Mock data for demo
        setStats({ sales: 10000, orders: 50, inventory: 200 });
        setChartData([
          { month: 'Jan', sales: 400 },
          { month: 'Feb', sales: 300 },
          { month: 'Mar', sales: 500 },
        ]);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <p>Total Sales: ${stats.sales}</p>
        <p>Total Orders: {stats.orders}</p>
        <p>Inventory Items: {stats.inventory}</p>
      </div>
      <h3>Sales Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;