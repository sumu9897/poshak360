import axios from "axios";
import React, { useEffect, useState } from "react";
import { currency, serverUrl } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllProduct = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/product/list`, {
        headers: { token },
      });

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold">All Products ({list.length})</p>

      <div className="hidden md:grid grid-cols-6 gap-4 py-2 px-4 bg-gray-200 rounded font-medium text-sm text-gray-700">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-center">Edit</span>
        <span className="text-center">Delete</span>
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center py-3 px-4 bg-white shadow-sm rounded hover:shadow-md transition"
        >
          <img
            className="w-14 h-14 object-cover rounded"
            src={item.image?.[0] || "https://via.placeholder.com/60"}
            alt={item.name}
          />
          <p className="text-sm">{item.name}</p>
          <p className="text-sm">{item.category}</p>
          <p className="text-sm">
            {currency} {item.price}
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => navigate(`/update/${item._id}`)}
              className="text-blue-600 hover:text-blue-800 font-semibold text-sm px-3 py-1 border border-blue-200 hover:border-blue-400 rounded transition"
            >
              Edit
            </button>
          </div>

          <div className="flex justify-end md:justify-center">
            <button
              onClick={() => removeProduct(item._id)}
              className="text-red-600 hover:text-red-800 font-semibold text-sm px-3 py-1 border border-red-200 hover:border-red-400 rounded transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
