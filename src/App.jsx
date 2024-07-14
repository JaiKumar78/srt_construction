import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Blog from './pages/Blog'

const App =() => {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
