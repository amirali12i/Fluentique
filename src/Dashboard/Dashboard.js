import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Sidebar from './SideBar'; // Corrected import name to match file name.
import ProgressOverview from './ProgressOverview';
import NextLessons from './NextLessons';
import Achievements from './Achievements';
import Footer from './Footer'; // Corrected import path.
import './Dashboard.scss';
import './SideBar.scss'; // Corrected import path.

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <NavBar />
      <Sidebar /> {/* Corrected component name to match import. */}
      <ProgressOverview />
      <NextLessons />
      <Achievements />
      <Footer />
      <div>
        {/* Dashboard UI */}
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
