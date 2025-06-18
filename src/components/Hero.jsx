// src/components/Hero.jsx
import React from 'react'
import HeroBg    from '../assets/hero-bg.jpg'
import ArrowIcon from '../assets/arrow-right.svg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto h-full px-4 flex flex-col lg:flex-row lg:items-center">
        {/* Paragraph + desktop-only button */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="mt-8 lg:mt-0 text-white max-w-md mx-auto lg:mx-0">
            Volutpat velit volutpat faucibus et consectetur. Est phasellus volutpat nunc vestibulum.
          </p>
          {/* desktop only */}
          <button className="hidden lg:flex flex-col items-center justify-center w-40 h-40 bg-[#00CBA8] hover:bg-white/20 text-white rounded-full transition mx-auto lg:mx-0">
            <span className="text-base font-medium">View more</span>
            <img src={ArrowIcon} alt="arrow" className="mt-2 w-5 h-5" />
          </button>
        </div>

        {/* Headings + list + mobile-only button */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex flex-col items-center lg:items-end space-y-2">
          <h1 className="text-white text-7xl sm:text-9xl font-bold leading-tight">Crafting</h1>
          <h1 className="text-white text-7xl sm:text-9xl font-bold leading-tight">Innovate</h1>
          <h1 className="text-white text-7xl sm:text-9xl font-bold leading-tight">Excellence</h1>
          <ul className="mt-6 text-white list-disc list-inside space-y-2">
            <li>Ui/Ux design</li>
            <li>Email marketing</li>
            <li>Motion graphic</li>
            <li>Mobile app development</li>
          </ul>
          {/* mobile only */}
          <button className="flex lg:hidden flex-col items-center justify-center w-40 h-40 bg-[#00CBA8] hover:bg-white/20 text-white rounded-full transition mt-8">
            <span className="text-base font-medium">View more</span>
            <img src={ArrowIcon} alt="arrow" className="mt-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
