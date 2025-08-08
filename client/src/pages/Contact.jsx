import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      {/* Page Title */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title title1="Contact" title2="Us" />
      </div>

      {/* Contact Content */}
      <div className="my-12 mb-28 px-4 sm:px-10 max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3 text-gray-700">
          {/* Our Store */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Our Store</h3>
            <p className="text-gray-600 leading-relaxed">
              1093 Banani, <br />
              Banani, Dhaka-1213 <br />
              Bangladesh
            </p>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Get in Touch</h3>
            <p className="text-gray-600 leading-relaxed">
              Phone: <span className="font-medium">(880) 123-456-789</span> <br />
              Email:{' '}
              <a
                href="mailto:admin@poshak360.com"
                className="underline hover:text-black"
              >
                admin@poshak360.com
              </a>
            </p>
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Careers at Poshak360</h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Passionate about fashion and e-commerce? Explore opportunities to
              join our growing team.
            </p>
            <button className="border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 rounded">
              Explore Open Positions
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;
