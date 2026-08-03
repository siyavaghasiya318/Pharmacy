import Address from "../Models/AddressModel.js"

export const AddressForm = async(req,res) => {
    try {
        const{address,city,pincode,country,phoneno} = req.body

        const userid  = req.user.userid
        

        if(!address || !city || !pincode || !country || !phoneno){
            return res.status(404).json({
                message: "All Field Required",
                success: false
            })
        }

        const useraddress = await Address.create({
            address,
            city,
            pincode,
            country,
            phoneno,
            user:userid
        })

        return res.status(200).json({
            message: "Added Address",
            success: true,
            useraddress
        })
        
        

    } catch (error) {
        console.log("AddressForm error", error);
        return res.status(500).json({
            message: "Internal ServerError",
            success: false
        })
    }
}

export const GetAddress = async(req,res) => {
    try {
        const userid = req.user.userid
        
        const showadd = await Address.find({user:userid})
        
        res.status(200).json({
            message: "Successfuly getaddress",
            success:true,
            showadd
        })
    } catch (error) {
        console.log("GetAddress error", error);
        return res.status(500).json({
            message: "Internal ServerError",
            success: false
        })
    }
}

// export default RemoveAddress = async(req,res) => {
//     try {
//         const{addressid} = req.body

//         const address = await Address.findByIdAndDelete({addressid})

//         res.status(200).json({
//             message: "Address Deleted",
//             success:true
//         })
//     } catch (error) {
//         console.log("RemoveAddress error", error);
//         return res.status(500).json({
//             message: "Internal ServerError",
//             success: false
//         })
//     }
// }