import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Web from './page/Web'; // Make sure this import is correct
import Navbar from './component/Navbar';
import Signup from './page/Signup';
import Profile from './page/Profile';
import Designth from './page/Designth';
import Skill from './page/Skill';

const AppWrapper = () => {
  const location = useLocation();

  // Define routes where Navbar should be visible
  const showNavbarRoutes = ['/home', '/about', '/contact'];
  const showNavbar = showNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web" element={<Web />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/designthinking" element={<Designth />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);

export default App;
