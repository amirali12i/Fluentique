import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Make sure to create NavBar.css in the same folder

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand"><Link to="/">Fluentique</Link></div>
      <ul className="nav-links">
        <li><Link to="/lessons">Lessons</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
