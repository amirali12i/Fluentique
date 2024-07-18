import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Simulating authentication logic
    // In a real app, you would send credentials to your backend for verification here
    console.log('Attempting login with:', credentials);

    // Simulated successful login
    setTimeout(() => {
      console.log('Login successful');
      // Navigate to dashboard upon successful login
      navigate('/dashboard');
    }, 1000); // Simulating async operation, like an API call
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Email or username"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleInputChange}
            />
            <Link to="/forgot">FORGOT?</Link>
          </div>
          <button type="submit" className="login-button">LOG IN</button>
          <div className="divider-or">
            <span>OR</span>
          </div>
          <div className="social-login">
            <button className="facebook-button">FACEBOOK</button>
            <button className="google-button">GOOGLE</button>
          </div>
          <div className="signup-link">
            <span>Don't have an account? <Link to="/register">SIGN UP</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
