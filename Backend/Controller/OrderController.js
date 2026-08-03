import Cart from "../Models/CartModel.js"
import Order from "../Models/OrderModel.js"
import User from "../Models/UserModel.js"

export const PlaceOrder = async(req,res) => {
    try {
        const{paymentMethod,shippingAddress,item} = req.body
        const userid = req.user.userid

        if(!paymentMethod || !shippingAddress || !item){
            return res.status(400).json({
                message: "All feild required",
                success: false
            })
        }
        

        const cartData = await Cart.findOne(item.cartId)
        
        


        const order =  await Order.create({
            user:userid,
            item,
            shippingAddress,
            paymentMethod,
        })

        cartData.item = []


        await cartData.save();

        res.status(200).json({
            message: "Your Order Is Conform",
            success: true,
            order
        })

    } catch (error) {
        console.log("PlaceOrder error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
        
    }
}

export const GetOrderDetail  = async(req,res) => {
    try {
        
        const orders = await Order.find({}).populate("user").populate("item.productid").populate("shippingAddress")

        if (!orders || orders.length === 0) {
            return res.status(404).json({
                message: "No orders found",
                success: false
            })
        }
        
       res.status(200).json({
        message:"Successfully get OrderDetail",
        success: true,
        orders
       })
       
    } catch (error) {
        console.log("GetOrderDetail error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}


export const UpdateOrder = async(req,res) => {
    try {
        const{orderStatus, orderId} = req.body
        const admin = req.admin.adminid
        
        if(!orderStatus){
            return res.status(404).json({
                message: "OrderStatus Not Found",
                success: false
            })
        }

        if(!admin){
            return res.status(404).json({
                message: "Admin Not Found",
                success: false
            })
        }
        const OrderUpdate = await Order.findByIdAndUpdate( orderId, {orderStatus}, {new:true})

        res.status(200).json({
            message: "Order updated",
            success: true,
            OrderUpdate
        })
        
    } catch (error) {
        console.log("updateorder error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

export const GetOrderHistory = async(req,res) => {
    try {
        const userid  = req.user.userid
        if(!userid){
            return res.status(404).json({
                message: "user not found",
                success: false
            })
        }
        
        
        const UserOrder = await Order.find({user:userid}).populate("item.productid").populate("shippingAddress")
        res.status(200).json({
            message: "Order history fetched",
            success: true,
            UserOrder
        })        
    } catch (error) {
        console.log("GetOrderHistry error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

