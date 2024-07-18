import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.scss';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.password || formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post('/api/register', formData);
        navigate('/login');
      } catch (error) {
        console.error('Registration error:', error.response?.data?.message || 'An error occurred');
      }
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        {/* Example input fields */}
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        {/* Include similar input fields for password and confirmPassword */}
        <button type="submit" className="register-btn">Register</button>
        <div className="form-links">
          <Link to="/login">Already have an account? Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
