import React from 'react';
import './Header.scss';

const Header = ({ xp, level }) => {
  return (
    <header className="dashboard-header">
      <span>XP: {xp}</span>
      <span>Level: {level}</span>
      {/* ... other user stats ... */}
    </header>
  );
};

export default Header;
