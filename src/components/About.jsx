// src/components/About.jsx
import React from 'react'
import ArrowIcon from '../assets/arrow-right.svg'

export default function About() {
  const scrollToServices = () => {
    const el = document.getElementById('services')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Label + Heading */}
        <div className="mb-12 text-center lg:text-left">
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
            <span className="text-xs mr-2">●</span>About us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Transforming ideas into stunning digital experiences that inspire,
            engage, and drive success.
          </h2>
        </div>

        {/* Stats & Description */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Left: 80% */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="text-[6rem] font-bold text-black leading-none">
              80<span className="align-top text-3xl">%</span>
            </div>
            <p className="mt-4 text-gray-600">
              Proven Success with a track record of happy clients and
              successful projects.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block border-l border-gray-200 h-40 mx-8" />

          {/* Right: Paragraph + Button */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              We are passionate about crafting digital experiences that
              captivate, engage, and inspire. With a team of innovative
              designers, developers, and strategists, ideas to life.
            </p>
            <button
              onClick={scrollToServices}
              className="mx-auto lg:mx-0 flex items-center justify-center w-40 h-40 bg-[#00CBA8] hover:bg-opacity-90 text-black rounded-full transition"
            >
              <span className="text-base font-medium">Explore more</span>
              <img src={ArrowIcon} alt="arrow" className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
