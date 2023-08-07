import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from 'react-router-dom'

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
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*<Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
