// src/App.jsx
import React from 'react'
import Navbar from './components/Navbar'
import Hero    from './components/Hero'
import About  from './components/About'
import Services from './components/Services'
import Banner  from './components/Banner'
import Testimonials  from './components/Testimonials'
import FAQ          from './components/FAQ'
import Footer        from './components/Footer'

export default function App() {
  return (
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
  )
}

