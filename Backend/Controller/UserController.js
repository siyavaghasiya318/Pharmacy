import User from "../Models/UserModel.js"
import { GenerateUserToken } from "../Token/UserToken.js"
import bcrypt from "bcryptjs"

export const UserRegister = async(req,res) => {
    try {
        const{firstname,lastname,dateofbirth,email,password} = req.body
        if(!firstname || !lastname || !dateofbirth || !email || !password){
            return res.status(404).json({
                message: "All Field Required",
                success: false
            })
        }

        const ExistEmail = await User.findOne({email})

        if(ExistEmail){
            return res.status(404).json({
                message: "User Already Exsits",
                success: false
            })
        }

        const passwordHash = await bcrypt.hash(password,10)

        const user = await User.create({
            firstname,
            lastname,
            dateofbirth,
            email,
            password: passwordHash
        })

        GenerateUserToken(user._id,res)
        
        res.status(200).json({
            message: "Successfull Create Your Account",
            success: true
        })

    } catch (error) {
        console.log("user register error", error);
        return res.status(500).json({
            message: "Internal Server error",
            success: false
        })
    }
}


export const UserLogin = async(req,res) => {
    try {
        const{email,password} = req.body
        
        if(!email || !password){
            return res.status(400).json({
                message: "All Feild Required",
                success: false
            })
        }

        const Existemail = await User.findOne({email})

        if(!Existemail){
            return res.status(400).json({
                message: "User Not Found",
                success: false
            })
        }

        const PassCompare = await bcrypt.compare(password, Existemail.password)

        if(!PassCompare){
            return res.status(400).json({
                message: "Password Incorrect",
                success: false
            })
        }
        GenerateUserToken(Existemail._id,res)

        res.status(200).json({
            message: "Successfully SignIn",
            success:true
        })
    } catch (error) {
        console.log("login error", error);
        return res.status(500).json({
            message: "Internal Server error",
            success: false
        })
    }
}

export const UserGetProfile = async(req,res) => {
    try {
        const user = await User.findById(req.user.userid)
        
        if(!user){
            return res.status(400).json({
                message: "User Not Found",
                success: false
            })
        }

        res.status(200).json({
            message: "successfully getprofile",
            success: true,
            user
        })
    } catch (error) {
        console.log("GetProfile error", error );
        
    }
}

export const UserLogout = async(req,res) => {
    try {
        console.log(res.cookie);
        
        res.cookie("token", "", {
            maxAge: 0
        })
        
        return res.status(200).json({
            message: "Logout successful",
            success: true
        })
    } catch (error) {
        console.log("UserLogout error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

export const GetAllUsers = async(req,res) => {
    try {

        const users = await User.find({})
        res.status(200).json({
            message: "Successfully get all users",
            success: true,
            users
        })
    } catch (error) {
        console.log("Getusers error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}
