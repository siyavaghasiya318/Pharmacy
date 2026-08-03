import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    brandname:{
        type: String,
        required: true,
    },
    Subcategory:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    longdescription:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    tax:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    },
    qty:{
        type: Number,
        required: true,
        default : 0
    },
    image:{
        type: String,
        required: true
    }

},{timestamps: true})

const Product = mongoose.model("product", ProductSchema)
export default Product