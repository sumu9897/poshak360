import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className="text-2xl text-center pt-8 border-t border-gray-200">
        <Title title1="about" title2="us" />
      </div>

      <div className="my-10 flex flex-col gap-8 text-gray-700 md:w-4/5 mx-auto leading-relaxed">
        <p>
          <strong>Poshak360</strong> is a contemporary clothing e-commerce brand
          from Bangladesh, dedicated to blending timeless tradition with modern
          trends. Our mission is to make fashion accessible, affordable, and
          inspiring — offering high-quality apparel that resonates with
          customers of all ages.
        </p>
        <p>
          From daily essentials to festive collections, each piece is carefully
          selected to uphold both local heritage and international fashion
          standards. We believe in clothing that not only looks good but feels
          exceptional, empowering you to express your individuality.
        </p>
        <b className="text-gray-800 text-lg">Our Mission</b>
        <p>
          To provide every individual in Bangladesh with access to authentic,
          stylish, and durable clothing, supported by a seamless shopping
          experience that emphasizes trust, quality, and customer care.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4 text-center">
        <Title title1="Why" title2="Choose Us" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6 md:w-4/5 mx-auto">
        <div className="border border-gray-200 px-8 py-10 flex flex-col gap-4 rounded-md bg-white shadow-sm hover:shadow-md transition">
          <b className="text-lg">Premium Quality</b>
          <p className="text-gray-600">
            Every item is crafted with precision using superior fabrics,
            stitching, and finishing to ensure lasting quality and comfort.
          </p>
        </div>
        <div className="border border-gray-200 px-8 py-10 flex flex-col gap-4 rounded-md bg-white shadow-sm hover:shadow-md transition">
          <b className="text-lg">Seamless Shopping</b>
          <p className="text-gray-600">
            Our website is designed for speed, simplicity, and convenience,
            making your shopping journey smooth from browsing to checkout.
          </p>
        </div>
        <div className="border border-gray-200 px-8 py-10 flex flex-col gap-4 rounded-md bg-white shadow-sm hover:shadow-md transition">
          <b className="text-lg">Customer First</b>
          <p className="text-gray-600">
            We are committed to exceptional service — from product selection to
            post-purchase support — ensuring your satisfaction at every step.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
