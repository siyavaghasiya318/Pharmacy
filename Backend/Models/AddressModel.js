import mongoose from "mongoose"

const AddressSchema = new mongoose.Schema({
     user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required: true
        },

    
                address:{
                    type:String,
                    required: true
                },
                city:{
                    type:String,
                    required: true
                },
                pincode:{
                    type:Number,
                    required: true
                },
                country:{
                    type:String,
                    required: true
                },
                phoneno:{
                    type:Number,
                    required: true
                },
    
}, {timestamps:true})

const Address = await mongoose.model("address", AddressSchema)

export default Address