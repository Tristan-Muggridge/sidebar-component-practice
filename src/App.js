import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
    
  );
}

export default App;
