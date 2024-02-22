import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Delivery from './Components/Delivery';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Main from "./Components/Main"

export default function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={
            <>
              
              <Home />
              <Main />
            </>
          } />

          <Route path="/About" element={<About />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/Contact-us" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
