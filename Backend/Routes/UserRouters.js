import express from "express"
import { GetAllUsers, UserGetProfile, UserLogin, UserLogout, UserRegister } from "../Controller/UserController.js"
import AuthUser from "../Middlewear/UserAuth.js"
const UserRoute  = express.Router()

UserRoute.post("/register", UserRegister)
UserRoute.post("/login", UserLogin)
UserRoute.post("/logout", UserLogout)
UserRoute.get("/getprofile",AuthUser, UserGetProfile)
UserRoute.get("/getallusers", GetAllUsers)

export default UserRoute