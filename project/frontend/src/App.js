import './App.css';
import React from "react";
import {useState, useEffect} from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header"
import {Main} from "./components/main/Main"

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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
