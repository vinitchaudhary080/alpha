// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from '../assets/arrow-right.svg'
import InstagramIcon from '../assets/instagram.svg'
import YouTubeIcon from '../assets/youtube.svg'
import LogoD from '../assets/logo.png'
import Algologo from '../assets/Algologo.png'

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="relative w-full bg-black text-white">
      {/* Newsletter */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-0">
          Stay tuned & subscribe to our newsletter
        </h2>
        <div className="w-full lg:w-auto flex flex-col lg:flex-row items-start lg:items-center">
          <div className="relative w-full lg:w-80">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full py-3 px-4 pr-12 border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <a
              href="mailto:thetagainers@gmail.com"
              className="absolute top-1/2 -translate-y-1/2 right-2 bg-[#00CBA8] p-3 rounded-full hover:bg-lime-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ArrowIcon} alt="submit" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-400">
        {/* Brand & Social */}
        <div className="space-y-4">
          <img src={LogoD} alt="Theta Gainers Logo" className="h-8" />
          <p>
            We’re Theta Gainers — a full-service digital studio turning ideas into impactful products. From Web Development to UI/UX Design, Digital Marketing to Video Production, we craft experiences that convert.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/thetagainers" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@ThetaGainers" target="_blank" rel="noopener noreferrer">
              <img src={YouTubeIcon} alt="YouTube" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Algorooms Co-Partner */}
        <div className="space-y-4">
          <img src={Algologo} alt="Algorooms Logo" className="h-8" />
          <p>
            We’re Algorooms — a consulting-first initiative powered by Theta Gainers. From mentorship programs and startup advisory to business strategy and growth consultation, we help individuals and teams scale smarter through guided execution, clarity, and experience-driven support.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Contact</h4>
          <p className="font-medium">+91-7669284138</p>
          <p className="font-medium">+91-7049850866</p>
          <p className="font-medium">
            <a href="mailto:thetagainers@gmail.com" className="hover:text-white">
              thetagainers@gmail.com
            </a>
          </p>
          <p className="font-medium">
            <a href="mailto:Algorooms@gmail.com" className="hover:text-white">
              Algorooms@gmail.com
            </a>
          </p>
          <p className="mt-4">
            Enkay Center Udyog Vihar Sector 19,<br />
            Gurugram
          </p>
          <p className="mt-4">GST: 23AESPU7489P1Z3</p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Useful Links</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => scrollToSection('home')} className="hover:text-white">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="hover:text-white">
                About us
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="hover:text-white">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('faq')} className="hover:text-white">
                Faq
              </button>
            </li>
            <li>
              <a href="mailto:thetagainers@gmail.com" className="hover:text-white">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© Copyright 2025 ThetaGainers All Rights Reserved</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
