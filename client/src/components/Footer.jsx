import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
        <Link to={"/"}>
        <img src={assets.logo} className="mb-5 w-32" alt="" />
      </Link>
          
          <p className="w-full md:w-2/3 text-gray-600">
            At <strong>Poshak360</strong>, we bring you the finest selection of
            traditional and modern attire, blending comfort with elegance.
            Whether you're dressing up for a celebration or everyday style, our
            curated collections ensure you look your best — always.
          </p>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+880-123-456-789</li>
                <li>contact@poshak360.com</li>

            </ul>
        </div>
      </div>
      <div>
        <hr style={{ borderColor: '#808080' }}/>
        <p className="py-5 text-sm text-center">Copyright 2025@ poshak360.vercel.app - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
