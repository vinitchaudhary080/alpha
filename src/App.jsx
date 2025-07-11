// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Terms from './components/Terms'
import Privacy from './components/Privacy'

export default function App() {
  return (
    <>   <ScrollToTop />
      <Routes>
        {/* Landing page */}
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

        {/* Terms & Conditions */}
        <Route
          path="/terms"
          element={
            <>
              <Navbar />
              <Terms />
              <Footer />
            </>
          }
        />

        {/* Privacy Policy */}
        <Route
          path="/privacy"
          element={
            <>
              <Navbar />
              <Privacy />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}
