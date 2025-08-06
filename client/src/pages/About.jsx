import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title title1="about" title2="us" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] object-cover rounded"
          src={assets.about_img}
          alt="About Poshak360"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>
            <strong>Poshak360</strong> is a modern clothing e-commerce brand based in Bangladesh,
            built on a mission to blend tradition with trend. We aim to redefine
            fashion accessibility by offering a diverse range of stylish,
            high-quality clothing for all generations — delivered right to your
            doorstep.
          </p>
          <p>
            Whether you're looking for everyday essentials, festive wear, or the
            latest fashion trends, Poshak360 is your one-stop solution. Every
            product is carefully selected to reflect both local heritage and
            global fashion standards.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            To empower individuals across Bangladesh with access to authentic,
            affordable, and stylish clothing while delivering a seamless online
            shopping experience that prioritizes quality, service, and trust.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title title1="Why" title2="Choose Us" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-4 rounded-md bg-white shadow-sm">
          <b>Premium Quality</b>
          <p className="text-gray-600">
            Each item in our collection is sourced and crafted with utmost care
            to ensure superior fabric, stitching, and durability.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-4 rounded-md bg-white shadow-sm">
          <b>Seamless Shopping</b>
          <p className="text-gray-600">
            Our user-friendly website and mobile-responsive interface make
            browsing and ordering quick, simple, and convenient.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-4 rounded-md bg-white shadow-sm">
          <b>Customer First</b>
          <p className="text-gray-600">
            Our dedicated support team is always ready to assist you with
            product inquiries, order issues, or any post-purchase help you may
            need.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
