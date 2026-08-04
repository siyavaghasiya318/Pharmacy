import UploadImg from "../Config/Cloudinary.js";
import Product from "../Models/ProductModel.js";

export const ProductAdd = async(req,res) => {
    try {
        const{name,category,brandname,Subcategory,description,longdescription,price,tax,stock,qty} = req.body
        
        
        if(!name || !category || !brandname || !Subcategory || !description || !longdescription || !price || !tax || !stock || !qty){
            return res.status(400).json({
                message: "All Feild Required",
                success: false
            })
        }

        let image;
        
        if(req.file.path){
            image = await UploadImg(req.file.path)
        }


        console.log(image);
        


        const product = await Product.create({
            name,
            category,
            brandname,
            Subcategory,
            description,
            longdescription,
            price,
            tax,
            stock,
            qty,
            image
        })


        res.status(200).json({
            message: "Product Added",
            success: true,
            product
        })
    } catch (error) {
        console.log("productForm error", error);

        return res.status(500).json({
            message: "Internal Server Error",
            success: true
        })
    }
}

export const GetProductData = async(req,res) => {
    try {
        const Finddata = await Product.find({})
        res.status(200).json({
            message: "ProductGet Successfully",
            success: true,
            Finddata
        })
    } catch (error) {
        console.log("GetFetchData error", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const UpdateProduct = async(req,res) => {
    try {
        const{name,category,brandname,Subcategory,description,longdescription,price,tax,stock,qty} = req.body
        
        
        const userid = req.params.id

        

        if(!name || !category || !brandname || !Subcategory || !description || !longdescription || !price || !tax || !stock || !qty){
            return res.status(400).json({
                message: "All Feild Required",
                success: false
            })
        }

        let image
        
        if(req.file && req.file.path){
            image = await UploadImg(req.file.path)
        }
        
        const updateproduct = await Product.findByIdAndUpdate(userid,{name,category,brandname,Subcategory,description,longdescription,price,tax,stock,qty,image}, {new:true})
        
        res.status(200).json({
            message: "Product Updated",
            success: true,
            updateproduct
        })
    } catch (error) {
        console.log("Updateproduct error", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}



export const ProductDelete =  async(req,res) => {
    try {
        const userid = req.params.id
        await Product.findByIdAndDelete(userid)

        res.status(200).json({
            message: "Product Deleted",
            success: true
        })
    } catch (error) {
        console.log("ProductDelete error", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

// export const Productbyid = async(req,res) => {
//     try {
//         const productid = req.params.id
//         console.log(productid);
        
//         const product = await Product.findById({_id:productid})

//         if(!product){
//             return res.status(404).json({
//                 message: "product not found",
//                 success: false,
//             })
//         }

//         res.status(200).json({
//             success: true,
//             product
//         })
//     } catch (error) {
//         console.log("DetailPage error", error);
//         return res.status(500).json({
//             message: "Internal server error",
//             success: false
//         })
//     }
// }

