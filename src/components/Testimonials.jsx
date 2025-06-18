// src/components/Testimonials.jsx
import React from 'react'
import QuoteIcon from '../assets/quote.svg'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Label + Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-4">
            <span className="text-xs mr-2">●</span>Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Hear from our happy clients
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-gray-900 mb-6">
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever"
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Jessica Ren</h3>
              <p className="text-sm text-gray-500">Assistant management</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <img src={QuoteIcon} alt="quote" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gray-50 rounded-2xl p-6">
            <p className="text-gray-900 mb-6">
              "It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using"
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Mike Johnson</h3>
              <p className="text-sm text-gray-500">Graphic designer</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-[#00CBA8] rounded-full flex items-center justify-center">
                <img src={QuoteIcon} alt="quote" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-gray-900 mb-6">
              "Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum
              It has roots in a piece of classical Latin literature from making it"
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Chris Evans</h3>
              <p className="text-sm text-gray-500">Project manager</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <img src={QuoteIcon} alt="quote" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
