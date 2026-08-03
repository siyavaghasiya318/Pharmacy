import express from "express"
import { GetOrderDetail, GetOrderHistory, PlaceOrder, UpdateOrder } from "../Controller/OrderController.js"
import AuthUser from "../Middlewear/UserAuth.js"
import { AuthAdmin } from "../Middlewear/AuthAdmin.js"

const OrderRoute = express.Router()

OrderRoute.post("/payment",AuthUser, PlaceOrder)
OrderRoute.get("/getorder", GetOrderDetail)
OrderRoute.put("/updateorder",AuthAdmin, UpdateOrder)
OrderRoute.get("/getorderhistory",AuthUser, GetOrderHistory)

export default OrderRoute