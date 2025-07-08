// src/components/Footer.jsx
import React from 'react'
import ArrowIcon from '../assets/arrow-right.svg'
import InstagramIcon from '../assets/instagram.svg'
import YouTubeIcon from '../assets/youtube.svg'
import LogoD from '../assets/logo.png'

export default function Footer() {
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
                        <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-[#00CBA8] p-3 rounded-full hover:bg-lime-200 transition">
                            <img src={ArrowIcon} alt="submit" className="w-4 h-4" />
                        </button>
                    </div>

                </div>
            </div>

            <hr className="border-gray-700" />

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-400">
                {/* Brand & Social */}
                <div className="space-y-4">
                    <img src={LogoD} alt="Alpha Logo" className="h-8" />
                    <p>
                        Suscipit turpis etiam pellentesque diam dignissim ultrices at id. Pulvinar nisl lorem pretium magna. Lacus nam at nec.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://instagram.com/thetagainers"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.youtube.com/@ThetaGainers"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={YouTubeIcon} alt="YouTube" className="w-5 h-5" />
                        </a>
                    </div>

                </div>

                {/* Our page */}
                <div>
                    <h4 className="mb-4 font-semibold text-white">Our page</h4>
                    <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#about" className="hover:text-white">About us</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact us</a></li>
                    </ul>
                </div>

                {/* Useful link */}
                <div>
                    <h4 className="mb-4 font-semibold text-white">Useful link</h4>
                    <ul className="space-y-2">
                        <li><a href="#services" className="hover:text-white">Services</a></li>
                        <li><a href="#faq" className="hover:text-white">Faq</a></li>

                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="mb-4 font-semibold text-white">Contact</h4>
                    <p className="font-medium">258-658-8511</p>
                    <p className="font-medium">
                        <a href="mailto:info@mysite.com" className="hover:text-white">
                            info@mysite.com
                        </a>
                    </p>
                    <p className="mt-4">
                        Enkay Center Udyog vihar Sector 19,<br />
                        Gurugram
                    </p>
                </div>
            </div>

            <hr className="border-gray-700" />

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                <p>
                    © Copyright 2025 ThetaGainers All Rights Reserved
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="/terms" className="hover:text-white">Teams & Conditions</a>
                    <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}
