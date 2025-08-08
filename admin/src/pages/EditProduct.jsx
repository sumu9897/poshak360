import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const EditProduct = ({ token }) => {
    const { id: productId } = useParams();
  const navigate = useNavigate();


  // Images state - initially false or existing urls
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);

  // Track existing image URLs separately to show preview if user doesn't change
  const [existingImages, setExistingImages] = useState([]);

  // Product data state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    if (!productId) {
      toast.error("No product selected");
      navigate("/list");
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await axios.post(
          `${serverUrl}/api/product/single`,
          { productId },
          { headers: { token } }
        );
        if (res.data.success) {
          const product = res.data.product;
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price);
          setCategory(product.category);
          setSubCategory(product.subCategory);
          setBestseller(product.bestseller);
          setSizes(product.sizes || []);
          setExistingImages(product.image || []);
        } else {
          toast.error(res.data.message);
          navigate("/list");
        }
      } catch (error) {
        toast.error(error.message);
        navigate("/list");
      }
    };

    fetchProduct();
  }, [productId, token, navigate]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("id", productId);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      // Append images only if changed (file object). If not changed, backend will keep old images
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);
      image5 && formData.append("image5", image5);
      image6 && formData.append("image6", image6);

      const response = await axios.put(
        `${serverUrl}/api/product/update`,
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/list");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Size toggle handler (same as AddProduct)
  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3 max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>

      <div>
        <p className="mb-2">Upload Images (change if needed)</p>

        <div className="flex gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const imageFile = [image1, image2, image3, image4, image5, image6][i];
            const setImage = [setImage1, setImage2, setImage3, setImage4, setImage5, setImage6][i];
            const existingImageUrl = existingImages[i];

            return (
              <label key={i} htmlFor={`image${i + 1}`}>
                <img
                  className="w-20 h-20 object-cover rounded"
                  src={
                    imageFile
                      ? URL.createObjectURL(imageFile)
                      : existingImageUrl || assets.upload_area
                  }
                  alt={`Product image ${i + 1}`}
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id={`image${i + 1}`}
                  hidden
                  accept="image/*"
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2 border rounded"
          type="text"
          placeholder="Type Here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 border rounded"
          placeholder="Write Content Here"
          required
          rows={4}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px] border rounded"
            type="number"
            min={0}
            placeholder="100"
            required
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3 flex-wrap">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size} onClick={() => toggleSize(size)}>
              <p
                className={`${
                  sizes.includes(size) ? "bg-green-200" : "bg-slate-200"
                } px-3 py-1 cursor-pointer rounded`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2 items-center">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="cursor-pointer"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>

      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Update Product
      </button>
    </form>
  );
};

export default EditProduct;
