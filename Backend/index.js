import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { dbConnection } from "./Config/Db.js"
import AdminRoute from "./Routes/AdminRoutes.js"
import cookieParser from "cookie-parser"
import ProductApi from "./Routes/ProductRoute.js"
import UserRoute from "./Routes/UserRouters.js"
import CartRoute from "./Routes/Cart.Route.js"
import Addressroute from "./Routes/AddressRoute.js"
import OrderRoute from "./Routes/OrderRoute.js"

dotenv.config()
const corsOrigin = [
    "http://localhost:5174",
    "http://localhost:5173"
]

const app = express()
app.use(cors({
    origin: corsOrigin,
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

const port = process.env.PORT

app.use("/api/admin", AdminRoute)
app.use("/api/product", ProductApi)
app.use("/api/user", UserRoute)
app.use("/api/cart", CartRoute)
app.use("/api/address", Addressroute)
app.use("/api/order", OrderRoute)


app.get("/", (req,res) => {
    res.send("server is running")
})

app.listen(port , () => {
    dbConnection()
    console.log("server is running", port);
    
})