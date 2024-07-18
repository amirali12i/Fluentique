import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login'; // Adjust path as necessary
import Register from './register'; // Adjust path as necessary
import Dashboard from './Dashboard/Dashboard'; // Adjust path as necessary
import HomePage from './HomePage'; // Adjust path as necessary

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    // Your login logic here
    // If login is successful, setIsLoggedIn(true);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate replace to="/login" />}
      />
      {/* Redirect any non-existent route to the HomePage */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
