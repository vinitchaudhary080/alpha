// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Terms from './components/Terms'
import Privacy from './components/Privacy';


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Banner />
              <Testimonials />
              <FAQ />
              <Footer />
            </>
          }
        />

        {/* Terms & Conditions page */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

      </Routes>
    </Router>
  )
}
