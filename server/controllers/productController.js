import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js"


// add product
const addProduct = async (req, res) =>{
    try {
        const {name, description, price , category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files?.image1?.[0]
        const image2 = req.files?.image2?.[0]
        const image3 = req.files?.image3?.[0]
        const image4 = req.files?.image4?.[0]
        const image5 = req.files?.image5?.[0]
        const image6 = req.files?.image6?.[0]

        const images = [image1, image2,image3,image4, image5, image6].filter((item)=> item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url
            })
        )
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
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()
        
        
        res.json({success: true, message: "Product Added"})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}

// list product
const listProduct = async( req,res) => {
    try {
        const products = await productModel.find({});
        res.json({success: true,products})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// remove product
const removeProduct = async (req, res ) => {}

// single product
const singleProduct = async( req, res) => {

}


export {addProduct, listProduct, removeProduct, singleProduct}