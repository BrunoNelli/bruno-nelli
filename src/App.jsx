import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'


// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          {/*<Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<Navigate to="/portfolio" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
