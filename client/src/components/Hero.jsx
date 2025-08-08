import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-200 rounded-xl overflow-hidden shadow-md">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-6 py-10 sm:py-0 bg-white">
        <div className="text-[#414141] max-w-md">
          {/* Small Heading */}
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 md:w-12 h-[2px] bg-[#414141]"></span>
            <p className="font-medium text-sm md:text-base tracking-wide uppercase">
              Our Bestsellers
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-snug font-bold mb-4">
            Latest Arrivals
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Discover our newest collection of premium styles designed for
            comfort and elegance. Upgrade your wardrobe with timeless pieces
            today.
          </p>

          {/* Call to Action */}
          <NavLink to="/collection">
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-[#414141] text-white rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:bg-black">
              Shop Now
              <span className="w-6 h-[2px] bg-white group-hover:w-8 transition-all duration-300"></span>
            </button>
          </NavLink>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt="Showcasing our latest clothing arrivals"
        />
      </div>
    </section>
  );
};

export default Hero;
