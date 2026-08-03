import express from "express"
import { Addproduct, DecreaseItem, GetCart, RemoveCart } from "../Controller/CartController.js"
import AuthUser from "../Middlewear/UserAuth.js"
const CartRoute = express.Router()

CartRoute.post("/addproduct",AuthUser,  Addproduct)
CartRoute.get("/getcart" ,AuthUser, GetCart)
CartRoute.post("/decreaseitem", AuthUser, DecreaseItem)
CartRoute.post("/removecart", AuthUser, RemoveCart)


export default CartRoute