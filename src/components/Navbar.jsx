// src/components/Navbar.jsx
import React, { useState } from 'react'
import Logo      from '../assets/logo.png'
import MenuIcon  from '../assets/menu.svg'
import CloseIcon from '../assets/close.svg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { id: 'home',     label: 'Home'     },
    { id: 'about',    label: 'About'    },
    { id: 'services', label: 'Services' },
    { id: 'contact',  label: 'Contact'  },
  ]

  return (
    <nav className="relative container mx-auto flex items-center justify-between py-6">
      {/* Logo */}
      <button onClick={() => scrollToSection('home')}>
        <img src={Logo} alt="Logo" className="h-16" />
      </button>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden z-20"
        onClick={() => setMenuOpen(o => !o)}
      >
        <img
          src={menuOpen ? CloseIcon : MenuIcon}
          alt="Menu"
          className="h-6 w-6"
        />
      </button>

      {/* Links */}
      <ul
        className={`
          absolute top-full left-0 w-full bg-white shadow-md z-20 transition-all
          ${menuOpen ? 'flex flex-col items-center py-6 space-y-4' : 'hidden'}
          md:static md:flex md:flex-row md:items-center md:space-x-8
          md:bg-transparent md:shadow-none md:py-0 md:w-auto
        `}
      >
        {links.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-600"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
