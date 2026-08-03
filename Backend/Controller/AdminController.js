import Admin from "../Models/AdminModel.js"
    import bcrypt from "bcryptjs"
import { AdminToken } from "../Token/AdminToken.js"
export const AdminRegister = async(req,res) => {
    try {
        const{firstname,lastname,email,password} = req.body

        if(!firstname|| !lastname || !email || !password){
            return res.status(400).json({
                message: "All Field required",
                success: false
            })
        }

        const Existemail = await Admin.findOne({email})
        if(Existemail){
            return res.status(400).json({
                message: "Admin Already Exist",
                success: false
            })
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const admin = await Admin.create({
            firstname,
            lastname,
            email,
            password:passwordHash
        })
        
        AdminToken(admin._id,res)

        res.status(200).json({
            message: "SucessFully Create Account",
            success: true
        })


    } catch (error) {
        console.log("Admin Register Error", error);
        
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

export const AdminLogIn = async(req,res) => {
    try {
        const{email,password} = req.body

        if(!email || !password){
            return res.status(400).json({
                message: "All Field Required",
                success: false
            })
        }

        const Existemail = await Admin.findOne({email})

        if(!Existemail){
            return res.status(400).json({
                message: "Admin Not Found",
                success: false
            })
        }


        const isMatch = await bcrypt.compare(password, Existemail.password)

        if(!isMatch){
            return res.status(400).json({
                message: "Password Incoorect",
                success: false
            })
        }

        AdminToken(Existemail._id,res);

        res.status(200).json({
            message: "SucessFully LogIn",
            success: true
        })

    } catch (error) {
        console.log("AdminLogin Error", error);
        
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}


export const Getprofile = async(req,res) => {
    try {
        
        const admin = await Admin.findById(req.admin.adminid)

        if(!admin){
            return res.status(400).json({
                message: "admin not found",
                success: false
            })
        }
        
        res.status(200).json({
            message: "getprofile successfully",
            success: true,
            admin
        })
    } catch (error) {
        console.log("getprofile Error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
} 

export const Getusers = async(req,res) => {
    try {
        const users = await Admin.find({})
        res.status(200).json({
            message: "getusers successfully",
            success: true,
            users
        })
    } catch (error) {
        console.log("GetUsers error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

export const AdminLogout = async(req,res) => {
    try {
        res.cookie("token", "",{
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "lax",
            maxAge: 0
        })

        return res.status(200).json({
            message: "Logout successful",
            success: true
        })
    } catch (error) {
        console.log("Adminlogout error",error );
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

