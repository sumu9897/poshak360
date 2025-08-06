import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      {/* Page Title */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title title1="Contact" title2="Us" />
      </div>

      {/* Contact Content */}
      <div className="my-10 flex flex-col md:flex-row justify-between gap-10 mb-28 px-4 sm:px-10">
        {/* Left: Image */}
        <img
          className="w-full md:max-w-[480px] object-cover rounded"
          src={assets.contact_img}
          alt="Contact Poshak360"
        />

        {/* Right: Info */}
        <div className="flex flex-col justify-center gap-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">Our Store</h3>
            <p className="text-gray-600 leading-relaxed">
              1093 Banani, <br />
              Banani, Dhaka-1213 <br />
              Bangladesh
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-1">Get in Touch</h3>
            <p className="text-gray-600">
              Phone: (880) 123-456-789 <br />
              Email: <a href="mailto:admin@poshak360.com" className="underline hover:text-black">admin@poshak360.com</a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-1">Careers at Poshak360</h3>
            <p className="text-gray-600">
              Passionate about fashion and e-commerce? Explore opportunities to join our growing team.
            </p>
          </div>

          <button className="mt-2 border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 rounded">
            Explore Open Positions
          </button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  );
};

export default Contact;
