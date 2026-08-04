import jwt from "jsonwebtoken"

export const GenerateUserToken = async (userid, res) => {
    try {
        const token = jwt.sign({ userid }, process.env.JWT_SECRET, { expiresIn: "2d" })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 2 * 24 * 60 * 60 * 1000,
        });


        return token
    } catch (error) {
        console.log("GenerateUserToken error", error);

    }
} 