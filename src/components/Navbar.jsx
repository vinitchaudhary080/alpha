// src/components/Navbar.jsx
import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import MenuIcon from '../assets/menu.svg'
import CloseIcon from '../assets/close.svg'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="relative container mx-auto flex items-center justify-between py-6">
            {/* Logo */}
            <a href="#home">
                <img src={Logo} alt="Artcraft Logo" className="h-16" />
            </a>

            {/* Hamburger / Close */}
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

            {/* Nav Links */}
            <ul
                className={`
         absolute top-full left-0 w-full bg-white shadow-md z-20 transition-all
        ${menuOpen ? 'flex flex-col items-center py-6 space-y-4' : 'hidden'}

          /* DESKTOP: always row, auto-width, spaced, transparent */
          md:static
          md:flex
          md:flex-row
          md:items-center
          md:space-x-8
          md:space-y-0
          md:py-0
          md:w-auto
          md:bg-transparent
          md:shadow-none
        `}
            >
                {['home', 'about', 'services', 'contact'].map(id => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            className="block px-4 py-2 text-gray-700 font-medium hover:text-blue-600"
                            onClick={() => setMenuOpen(false)}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
