import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    setCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const toggleSubCategory = (e) => {
    setSubCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let sorted = [...filterProducts];
    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }
    setFilterProducts(sorted);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-gray-200">
      {/* Filter Sidebar */}
      <aside className="min-w-60 bg-white p-4 rounded-xl shadow-sm border border-gray-200 h-fit sm:sticky sm:top-4">
        <div
          className="flex items-center justify-between cursor-pointer sm:cursor-default"
          onClick={() => setShowFilter(!showFilter)}
        >
          <p className="text-lg font-semibold">Filters</p>
          <img
            src={assets.dropdown_icon}
            alt="Toggle Filters"
            className={`h-3 sm:hidden transition-transform ${
              showFilter ? "rotate-90" : ""
            }`}
          />
        </div>

        {/* Categories */}
        <div className={`${showFilter ? "block" : "hidden"} sm:block mt-6`}>
          <p className="text-sm font-medium mb-3 text-gray-700">Categories</p>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="accent-indigo-500"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategories */}
        <div className={`${showFilter ? "block" : "hidden"} sm:block mt-6`}>
          <p className="text-sm font-medium mb-3 text-gray-700">Type</p>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {[
              { label: "Topwear", value: "Topwear" },
              { label: "Bottomwear", value: "Bottomwear" },
              { label: "Winterwear", value: "Winterwear" },
              { label: "Ethnic & Traditional Wear", value: "Traditionalwear" },
            ].map((type) => (
              <label
                key={type.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={type.value}
                  onChange={toggleSubCategory}
                  className="accent-indigo-500"
                />
                {type.label}
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Product Section */}
      <main className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <Title title1="ALL" title2="COLLECTIONS" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 outline-none"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        {filterProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.map((item) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm">Try adjusting your filters</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Collection;
