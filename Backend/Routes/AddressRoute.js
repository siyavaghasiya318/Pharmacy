import express from "express"
import { AddressForm, GetAddress } from "../Controller/AddressController.js"
import AuthUser from "../Middlewear/UserAuth.js"
import { AuthAdmin } from "../Middlewear/AuthAdmin.js"

const Addressroute = await express.Router()

Addressroute.post("/AddAddress", AuthUser , AddressForm)
Addressroute.get("/getaddress",AuthUser, GetAddress)
export default Addressroute
