import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <section className="mx-auto flex flex-col sm:flex-row justify-center gap-12 sm:gap-8 text-center py-20 max-w-6xl text-gray-700">
      <div className="max-w-xs">
        <img
          src={assets.exchange_icon}
          className="w-14 h-14 mx-auto mb-4"
          alt="Easy Exchange Policy"
        />
        <h3 className="font-semibold text-lg mb-2">Easy Exchange Policy</h3>
        <p className="text-gray-500">
          Enjoy a hassle-free exchange process on all eligible products.
        </p>
      </div>

      <div className="max-w-xs">
        <img
          src={assets.quality_icon}
          className="w-14 h-14 mx-auto mb-4"
          alt="7 Days Return Policy"
        />
        <h3 className="font-semibold text-lg mb-2">7-Day Return Policy</h3>
        <p className="text-gray-500">
          Return your purchase within 7 days for a full refund—no questions
          asked.
        </p>
      </div>

      <div className="max-w-xs">
        <img
          src={assets.support_img}
          className="w-14 h-14 mx-auto mb-4"
          alt="Customer Support"
        />
        <h3 className="font-semibold text-lg mb-2">24/7 Customer Support</h3>
        <p className="text-gray-500">
          Our dedicated team is here to assist you anytime, day or night.
        </p>
      </div>
    </section>
  );
};

export default OurPolicy;
