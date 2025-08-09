import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-12 text-sm">
        
        {/* Brand Section */}
        <div>
          <Link to="/">
            <img src={assets.logo} className="mb-5 w-36" alt="Poshak360 Logo" />
          </Link>
          <p className="text-gray-600 leading-relaxed max-w-sm">
            At <strong>Poshak360</strong>, we bring you the finest selection of
            traditional and modern attire — blending comfort with elegance. From
            festive celebrations to everyday style, our collections ensure you
            always look your best.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold text-gray-800 mb-5">Company</p>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-black transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-black transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/delivery"
                className="hover:text-black transition-colors duration-200"
              >
                Delivery
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-black transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-lg font-semibold text-gray-800 mb-5">Get in Touch</p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a
                href="tel:+880123456789"
                className="hover:text-black transition-colors duration-200"
              >
                +880-123-456-789
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@poshak360.com"
                className="hover:text-black transition-colors duration-200"
              >
                contact@poshak360.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300">
        <p className="py-5 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} poshak360.vercel.app — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
