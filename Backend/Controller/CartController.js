import Cart from "../Models/CartModel.js"
import Product from "../Models/ProductModel.js"

export const Addproduct = async(req,res) => {
    try {

        const{productid, quentity=1} = req.body
        const userid = req.user.userid
        
        const product = await Product.findById(productid)
        if(!productid){
            return res.status(400).json({
                message:"Product not found",
                success:false
            })
        }
        
        let cart = await Cart.findOne({user:userid})

        if(!cart){
            cart = new Cart({
                user:userid,
                item: [],
            })
        }

        const exsistingitem = cart.item.find((item) => item.productid.toString() === productid.toString())

        if(exsistingitem){
            exsistingitem.quentity += 1
            exsistingitem.totalPrice = exsistingitem.quentity * product.price
        }
        else{
            cart.item.push({
                productid: productid,
                quentity: quentity,
                totalPrice: product.price * quentity
            })
        }

        await cart.save()

        res.status(200).json({
            message: "Product is Added",
            success: true,
            cart
        })

        
    } catch (error) {
        console.log("AddProduct error", error);
        return res.status(500).json({
            message:"Internal server error",
            success:false
        })
    }
}

export const GetCart= async(req,res) => {
    try {
        const userid = req.user.userid
        
        const cart = await Cart.find({user:userid}).populate("item.productid")

        if(!cart){
            return res.status(404).json({
                message: "Cart Not Found",
                success: false
            })
        }

        res.status(200).json({
            message: "Fetch Products",
            success: true,
            cart
        })
    } catch (error) {
        console.log("GetCart error", error);
        return res.status(500).json({
            message:"Internal server error",
            success:false
        })
    }
}

export const DecreaseItem = async(req,res) => {
    try {
        const{productid} = req.body
        
        const userid = req.user.userid
        
        const product = await Product.findById(productid)
        if(!productid){
            return res.status(400).json({
                message:"Product not found",
                success:false
            })
        }
        
        let cart = await Cart.findOne({user:userid})
            
        if(!cart){
            return res.status(400).json({
                message: "Cart Not Found",
                success: false
            })
        }

        const existingItem = await cart.item.find((item) => item.productid.toString() === productid.toString())

        if(existingItem.quentity > 1){
            existingItem.quentity -= 1
            existingItem.totalPrice = existingItem.quentity * product.price
        }
        else{
            cart.item = await cart.item.filter(item => item.productid.toString() !== productid.toString())
        }

        await cart.save()

        res.status(200).json({
            message: "Item Decresed Sucessfully",
            success:true,
            cart
        })

    } catch (error) {
        console.log("DecreaseQty error", error);
        return res.status(500).json({
            message:"Internal server error",
            success:false
        })
    }
}

export const RemoveCart = async(req,res) => {
    try {
        const{productid} = req.body

        const userid = req.user.userid

        const product = await Product.findById(productid)
        if(!productid){
            return res.status(400).json({
                message:"Product not found",
                success:false
            })
        }
        
        let cart = await Cart.findOne({user:userid})
        
        if(!cart){
            return res.status(400).json({
                message: "Cart Not Found",
                success: false
            })
        }

        cart.item = await cart.item.filter(item => item.productid.toString() !== productid.toString()) 
        
        await cart.save()

        res.status(200).json({
            message: "Product Deleted",
            success: true,
            cart
        })


    } catch (error) {
        console.log("RemoveCart error", error);
        return res.status(500).json({
            message:"Internal server error",
            success:false
        })
    }
}