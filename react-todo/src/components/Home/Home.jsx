import React from 'react';
import { Link } from 'react-router-dom';
import './Home.module.css';

const Home = () => {
  return (
    <div className="home-page">
      <header className="welcome-header">
        <h1>Welcome to your</h1>
        <h1>Productivity Center</h1>
        <p>Organize your tasks and achieve your goals with ease</p>
      </header>
      
      <div className="features">
        <div className="feature-card">
          <h2>All Tasks</h2>
          <p>View all tasks in one place</p>
          <Link to="/" className="feature-link">Go</Link>
        </div>
        <div className="feature-card">
          <h2>Completed Tasks</h2>
          <p>View completed tasks</p>
          <Link to="/completed-todos" className="feature-link">View</Link>
        </div>
        <div className="feature-card">
          <h2>Pending Tasks</h2>
          <p>View pending tasks</p>
          <Link to="/pending-todos" className="feature-link">View</Link>
        </div>
      </div>

      <div className="motivationalSentence">
        <h2>"The secret of success is to begin."</h2>
      </div>

      <div className="calendar">
        {/* Insert calendar component here */}
      </div>
    </div>
  );
};

export default Home;