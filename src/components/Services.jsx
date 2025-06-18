// src/components/Services.jsx
import React from 'react'
import ArrowIcon from '../assets/arrow-right.svg'
import BrandingIcon from '../assets/branding.svg'
import WebDevIcon from '../assets/web.svg'
import MarketingIcon from '../assets/marketing.svg'
import VideoIcon from '../assets/video.svg'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div>
            <span className="inline-flex items-center px-3 py-1 border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-4">
            <span className="text-xs mr-2">●</span>Services
          </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-lg">
              Innovative digital solutions for your brand
            </h2>
          </div>
          {/* <a
            href="#all-services"
            className="mt-6 lg:mt-0 inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 transition"
          >
            Explore all services
            <img src={ArrowIcon} alt="arrow" className="ml-2 w-4 h-4" />
          </a> */}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between h-64">
            <img src={BrandingIcon} alt="Branding & design" className="self-end w-8 h-8" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Branding & design</h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between h-64">
            <img src={WebDevIcon} alt="Web development" className="self-end w-8 h-8" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Web development</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between h-64">
            <img src={MarketingIcon} alt="Digital marketing" className="self-end w-8 h-8" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Digital marketing</h3>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between h-64">
            <img src={VideoIcon} alt="Video production" className="self-end w-8 h-8" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Video production</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
