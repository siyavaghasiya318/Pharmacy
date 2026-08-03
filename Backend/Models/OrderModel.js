import mongoose from "mongoose"

const OrderSchema  = await mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
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
        },
    
    shippingAddress: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"address",
        required:true
    },
    paymentMethod:{
        type:String,
        enum: ["COD","Online"],
        default: "COD"
    },
    paymentStatus:{
        type:String,
        enum: ["pending", "paid"],
        default: "pending"
    },
    totalAmount:{
        type: Number,
        required: true,
        default: 1
    },
    orderStatus: {
        type: String,
        enum: ["Pending", "Processing", "Shipped", "Deliverd", "Cancelled"],
        default: "Pending"
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    deliveredDate: {
        type: Date
    }
    
})

const Order = mongoose.model("Order", OrderSchema)

export default Order