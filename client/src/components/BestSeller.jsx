import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <section className="my-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <Title title1="BEST" title2="SELLERS" />
        <p className="mt-4 w-full text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
          Explore the most loved pieces from <strong>Poshak360</strong>. These
          best sellers are customer favorites for their comfort, quality, and
          style. Whether it’s festive wear or everyday essentials, shop the
          top-trending outfits everyone’s talking about.
        </p>
      </div>

      {/* Product Grid */}
      {bestSeller.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {bestSeller.map((item) => (
            <div
              key={item._id}
              className="transition-transform duration-300 hover:scale-105"
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-8 text-center text-gray-500">
          Loading best sellers...
        </p>
      )}
    </section>
  );
};

export default BestSeller;
