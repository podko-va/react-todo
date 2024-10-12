import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import TodoContainer from './components/TodoContainer/TodoContainer';
import Home from "./components/Home/Home";
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_TABLE_NAME;
const apiToken = import.meta.env.VITE_AIRTABLE_API_TOKEN;



function App() {
 return (  
    <BrowserRouter >
        <Routes>
          <Route path='/' element={
            <div className="root">
              <div className="card">
                <TodoContainer/>
                <div className="footer">
                    <a href="/" className="logo">
                      <img src="../tumbup.png" alt="Logo" />
                    </a>
                </div>
              </div>              
            </div>                                   
          }          
          />
          <Route path='/new' element={<h1>New todo list:</h1>}/>
        </Routes>
      </BrowserRouter>
      
    )
}

export default App
