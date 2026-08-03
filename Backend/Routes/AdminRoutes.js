import express from "express"
import { AdminLogIn, AdminLogout, AdminRegister, Getprofile, Getusers } from "../Controller/AdminController.js"
import { AuthAdmin } from "../Middlewear/AuthAdmin.js"
const AdminRoute = express.Router()

AdminRoute.post("/adminregister", AdminRegister)
AdminRoute.post("/adminlogin", AdminLogIn)
AdminRoute.get("/adminprofile",AuthAdmin, Getprofile)
AdminRoute.get("/GetUsers", Getusers)
AdminRoute.post("/adminlogout", AdminLogout)
export default AdminRoute