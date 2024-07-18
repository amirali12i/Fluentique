import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss'; // Import SCSS without an alias

const SideBar = () => {
  return (
    <aside className="sidebar">
      <NavLink to="/learn" activeClassName="active">Learn</NavLink>
      {/* ... other NavLinks ... */}
    </aside>
  );
};

export default SideBar;
