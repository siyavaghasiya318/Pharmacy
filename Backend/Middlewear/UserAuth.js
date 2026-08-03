import jwt from "jsonwebtoken"

const AuthUser = async(req,res,next) => {
    try {
        const token = req.cookies.token
        
        if(!token){
            return res.status(400).json({
                message: "token not found",
                success: false
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET )
        req.user = decode

        next();
    } catch (error) {
        console.log("AuthUser error", error);
        
    }
}
export default AuthUser