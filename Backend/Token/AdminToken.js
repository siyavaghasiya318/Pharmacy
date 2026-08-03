import jwt from "jsonwebtoken"

export const AdminToken = (adminid,res) => {
    try {
        const token = jwt.sign({adminid}, process.env.JWT_SECRET, {expiresIn: "2d"})

        res.cookie("token", token,{
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV !== "development",
            maxAge: 2*24*60*60*1000
        })


        return token

    } catch (error) {
        console.log("AdminToken error", error);
    }
}   