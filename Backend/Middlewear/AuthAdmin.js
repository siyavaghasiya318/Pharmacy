import jwt from "jsonwebtoken"

export const AuthAdmin = (req,res,next) => {
    try {
        const token = req.cookies.token;

        console.log(token);
        
        if(!token){
            return res.status(400).json({
                message: "token not found",
                success: false
            })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.admin = decode

        next();
        
    } catch (error) {
        console.log("AuthAdmin error", error);
    }
}