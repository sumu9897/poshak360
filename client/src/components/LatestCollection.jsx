import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <section className="my-12 px-4 sm:px-6 lg:px-8">
      {/* Title + Subtitle */}
      <div className="text-center max-w-3xl mx-auto">
        <Title title1="LATEST" title2="COLLECTIONS" />
        <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
          Discover the newest arrivals at <strong>Poshak360</strong> — where tradition meets trend. 
          From elegant sarees to stylish casual wear, explore our handpicked selection crafted 
          for every occasion. Step up your fashion game with premium quality and timeless style.
        </p>
      </div>

      {/* Product Grid */}
      {latestProducts.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {latestProducts.map((item) => (
            <div key={item._id} className="transition-transform duration-300 hover:scale-105">
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
        <p className="mt-8 text-center text-gray-500">Loading latest collections...</p>
      )}
    </section>
  );
};

export default LatestCollection;
