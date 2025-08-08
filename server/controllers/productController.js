import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];
    const image5 = req.files?.image5?.[0];
    const image6 = req.files?.image6?.[0];

    const images = [image1, image2, image3, image4, image5, image6].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    // console.log(name, description,price , category, subCategory, sizes, bestseller);
    // console.log(imagesUrl);

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    // console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const editProduct = async (req, res) => {
  try {
    const {
      id,
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    if (!id) {
      return res.json({ success: false, message: "Product ID is required" });
    }

    // Find the product first
    const product = await productModel.findById(id);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    // Prepare an update object
    const updateData = {};

    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (price) updateData.price = Number(price);
    if (category) updateData.category = category;
    if (subCategory) updateData.subCategory = subCategory;
    if (sizes) updateData.sizes = JSON.parse(sizes);
    if (bestseller !== undefined) updateData.bestseller = bestseller === "true" ? true : false;

    // Handle images if new ones uploaded
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];
    const image5 = req.files?.image5?.[0];
    const image6 = req.files?.image6?.[0];

    const newImages = [image1, image2, image3, image4, image5, image6].filter(
      (item) => item !== undefined
    );

    if (newImages.length > 0) {
      // Upload new images to Cloudinary
      const imagesUrl = await Promise.all(
        newImages.map(async (item) => {
          let result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });
          return result.secure_url;
        })
      );
      updateData.image = imagesUrl;
    }

    // Update the product with new data
    await productModel.findByIdAndUpdate(id, updateData, { new: true });

    res.json({ success: true, message: "Product updated successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// list product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await productModel.findById(productId);

    res.json({ success: true, product });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct, editProduct };
