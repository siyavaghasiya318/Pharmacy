import express from "express"
import { GetProductData, ProductAdd, Productbyid, ProductDelete, UpdateProduct } from "../Controller/ProductController.js"
import { uploadProduct } from "../Middlewear/Multer.js"
const ProductApi = express.Router()

ProductApi.post("/addproduct",uploadProduct.single("image"), ProductAdd)
ProductApi.get("/getproduct", GetProductData)
ProductApi.put("/updateproduct/:id",uploadProduct.single("image"), UpdateProduct)
ProductApi.delete("/Deleteproduct/:id", ProductDelete)
ProductApi.post("/productbyid/:id", Productbyid)
export default ProductApi