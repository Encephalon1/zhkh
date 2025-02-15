import './App.css';
import React from "react";
import {useState, useEffect} from "react";
import { Navigate, Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Header from "./components/header/Header"
import {Main} from "./components/main/Main"
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import AnnouncementCreateUpdate from './components/AnnouncementCreateUpdate';

function App() {
  const [announcements, setAnnouncements] = useState([])
useEffect(
  () => {
    fetch('http://127.0.0.1:8000/api/?format=json')
      .then((response) => response.json())
      .then((data) => {
        setAnnouncements(data);
      });
  },
[]);

  return (
    <div className="App">
      <Header />
      

      <div className="MainList">
        <ul>
          {announcements.map((a) => {
            return (
            <div>
              <li key={a.id}>{a.title}</li>
              <li key={a.id}>{a.an_time}</li>
              <li key={a.id}>{a.text}</li>
            </div>
            );
          }
          )}
        </ul>
      </div>


      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/announcement/' element={<AnnouncementCreateUpdate/>} />
        <Route path='/announcement/:pk' element={<AnnouncementCreateUpdate/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
