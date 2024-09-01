import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Work from './components/work';
import Booking from './components/booking';
import AboutMe from './components/aboutme';
import Photos from './components/photos';
import Videos from './components/videos';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/" element={<Work />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
