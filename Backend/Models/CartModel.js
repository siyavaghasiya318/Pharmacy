import mongoose  from "mongoose";

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true
    },

    item: {
        type:[
            {
                productid: {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"product",
                    required: true
                },
                quentity: {
                    type: Number,
                    default: 1
                },
                totalPrice: {
                    type: Number,
                    required: true
                }
            }
        ]
    }
}, {timestamps:true})

const Cart = mongoose.model("cart", cartSchema)
export default Cart



