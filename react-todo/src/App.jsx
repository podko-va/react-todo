import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';
import Home from "./components/Home/Home";
import NotFound from "./components/Home/NotFound";

const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_TABLE_NAME;
const apiToken = import.meta.env.VITE_AIRTABLE_API_TOKEN;

function App() {

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (  
    <BrowserRouter >
        <Routes>
            <Route path='/' element={
              <MainElement 
                flag={"all"} 
                toggleSidebar={toggleSidebar} 
                hideSidebar={hideSidebar} 
                isSidebarVisible={isSidebarVisible} 
              />
            } />
            <Route path="home" element={<MainElement flag="home" toggleSidebar={toggleSidebar} hideSidebar={hideSidebar} isSidebarVisible={isSidebarVisible} />} />
            <Route path="pending-todos" element={
              <MainElement 
                flag={"pending"} 
                toggleSidebar={toggleSidebar} 
                hideSidebar={hideSidebar} 
                isSidebarVisible={isSidebarVisible} 
              />
            } />
            <Route path="completed-todos" element={
              <MainElement 
                flag={"completed"} 
                toggleSidebar={toggleSidebar} 
                hideSidebar={hideSidebar} 
                isSidebarVisible={isSidebarVisible} 
              />
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>        
    </BrowserRouter>      
  )
}

const MainElement = ({ flag, toggleSidebar, hideSidebar, isSidebarVisible }) => {
  return (
    <div className="root">
      <div className="card">
        <header>
          <button onClick={toggleSidebar} className="settings-button">⚙️</button>
        </header>
        <Sidebar isVisible={isSidebarVisible} onMouseLeave={hideSidebar} />
        {flag === "home" ? <Home /> : <TodoContainer flag={flag} />}
        <div className="footer">
          <a href="/" className="logo">
            <img src="/tumbup.png" alt="Logo" />
          </a>
        </div>
      </div>              
    </div>
  );
};

const Sidebar = ({ isVisible, onMouseLeave, hideSidebar }) => {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`} onMouseLeave={onMouseLeave}>
      <nav>
        <ul>
          <li><Link to="/home" onClick={hideSidebar}>Home</Link></li>
          <li><Link to="/" onClick={hideSidebar}>All Todos</Link></li>
          <li><Link to="/pending-todos" onClick={hideSidebar}>Pending Todos</Link></li>
          <li><Link to="/completed-todos" onClick={hideSidebar}>Completed Todos</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
