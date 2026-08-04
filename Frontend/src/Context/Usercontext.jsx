import axios from "axios"
import { createContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"

export const Usercontext = createContext();

export const UserProvider = ({children}) => {

    // const Api = "https://pharmacy-d78v.onrender.com"

    const Api = "http://localhost:5000"

    const[UserForm,SetUserForm] = useState({
        firstname: "",
        lastname: "",
        dateofbirth: "",
        email: "",
        password: ""
    })
    
    const[islogin,Setislogin] = useState("login")
    const[OpenLogin,SetOpenlogin] = useState(false)
    const[Addproduct,SetAddproduct] = useState([])
    const[getprofile,SetgetProfile] = useState([])
    const[ShowProfile,SetShowProfile] = useState(false) 
    const[FetchCart,Setfetchcart] = useState([])
    const[ShowDetail,SetShowDetail] = useState([])
    const[ShowAddress,SetShowAddress] = useState([])
    const [selectedAddress, setSelectedAddress] = useState(null)
    const[OrderHistory,SetOrderHistory] = useState([])
    const navigate = useNavigate()


    const[AddressForm,SetAddressForm] = useState({
        address: "",
        city: "",
        pincode: "",
        country: "",
        phoneno: ""
    })

    const [SelectPayment, setSelectPayement] = useState("")

    const handlePaymentSelect = (method) => {
        setSelectPayement(method)
    }

    const PlaceOrder = async(FetchCart,selectedAddress) => {

        try {
            console.log("fetch cart",FetchCart);
            
            const formattedItems = FetchCart.map((item) => ({
                cartId: item.cartId,
                productid: item.id,     
                quentity: item.quentity,
                totalPrice: item.totalPrice
            }))

            const Orderdata = {
                paymentMethod: SelectPayment,
                item: formattedItems,
                shippingAddress: selectedAddress
            }
            console.log(FetchCart);
            

            const{data} = await axios.post(`${Api}/api/order/payment`, Orderdata, {withCredentials:true})
            console.log(data);
            toast.success(data.message)
            if(data.success){
                GetCartProducts()
                SetShowAddress([])
                setSelectPayement("")
                navigate("/profile", { state: { activeTab: "order" } });
                GetOrderHistory()
            }
        } catch (error) {
            console.log("PlaceOrder error", error);
            
        }
    }

    const GetOrderHistory = async() => {
        try {
            const{data} = await axios.get(`${Api}/api/order/getorderhistory`, {withCredentials:true})
            console.log("GetOrderHistory", data.UserOrder);
            SetOrderHistory(data.UserOrder)
        } catch (error) {
            console.log("GetOrderHistory error", error);
        }
    }
    
    
    const HandleChange =(e) => {
        const{name,value} = e.target
        SetUserForm({
            ...UserForm,
            [name]: value
        })
        
        
    }
    const FormSubmit = async(e) => {
        e.preventDefault()
        
        
        try {
            
            const{data} = await axios.post(`http://localhost:5000/api/user/${islogin}`,UserForm, {withCredentials:true})
            console.log(islogin);
            
            toast.success(data.message)

            if(data.success){
                SetShowProfile(true)
                Setislogin("loggedin")
                GetProfile()
                GetCartProducts()
                GetUserAddress()
            }
            
            SetUserForm({
                firstname: "",
                lastname: "",
                dateofbirth: "",
                email: "",
                password: ""
            })
            
            
            SetOpenlogin(false)
        } catch (error) {
            console.log("handle Submit error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
            
        }
            
    }

    const GetProfile = async() => {
        try {
            const{data} = await axios.get(`${Api}/api/user/getprofile`, {withCredentials:true})
            
            
            if(data.success){
                SetgetProfile(data.user)
                GetOrderHistory()
            }
            Setislogin("loggedin")
        } catch (error) {
            console.log("Getprofile error", error);
            
        }
    }

    const Userlogout = async() => {
        try {
            const{data} = await axios.post(`${Api}/api/user/logout`,{}, {withCredentials:true})
            console.log(data);
            Setislogin("login")      
            SetShowProfile(false)
            SetShowAddress([])
            Setfetchcart([])

            toast.success(data.message)
            if(data.success){
                GetCartProducts()
            }
        } catch (error) {
            console.log("UserLogout error",error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }


   
    
    const FetchProduct = async() => {
        try {
            const{data} = await axios.get(`${Api}/api/product/getproduct`, {withCredentials:true})
            
            SetAddproduct(data.Finddata)
        } catch (error) {
            console.log("FetchProduct error", error);
        }
    }

    const AddCartProduct = async(productid) => {
        
        try {
            const{data} = await axios.post(`${Api}/api/cart/addproduct`,{productid}, {withCredentials:true} )
            // console.log(data);
            GetCartProducts()
            if(data.success){
                
            }
            
        } catch (error) {
            console.log("Addcarterror",error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }

    const GetCartProducts = async() => {
        try {
            const{data} = await axios.get(`${Api}/api/cart/getcart`, {withCredentials:true})

            // console.log("oringinal cart Data",data);
            const cartItem = data.cart[0].item.map((item) => {
                const prod = item?.productid || {}
                return(
                    {
                        ...prod,
                        cartId: data.cart[0]._id,
                        id:prod?._id,
                        quentity: item?.quentity,
                        totalPrice: item?.totalPrice 
                    }
                )
            })
           
            
            Setfetchcart(cartItem)
            
            } catch (error) {

            }
    }

    const DecreaseQty = async(productid) => {
        try {
            
            const{data} = await axios.post(`${Api}/api/cart/decreaseitem`, {productid}, {withCredentials:true})
            
            GetCartProducts()
            
        } catch (error) {
            console.log("DecreaseQty error",error);
        }
    }

    const RemoveCartproduct = async(productid) => {
        try {
            const{data} = await axios.post(`${Api}/api/cart/removecart`, {productid}, {withCredentials:true})
            
            GetCartProducts()
        } catch (error) {
            console.log("Removecartprod error",error);
        }
    }
    const [data, Setdata] = useState("All")

    const newdata = data === "All"
        ? Addproduct
        : Addproduct.filter((item) =>
             item?.category.toLowerCase() === data.toLowerCase()
        )

    const Productidpage = async(id) => {
        try {
            const{data} = await axios.post(`http://localhost:5000/api/product/productbyid/${id}`)
            SetShowDetail(data.product)
            
        } catch (error) {
            console.log("productidpage error",error);
        }
    }

    const AddressChange =(e) => {
        const{name,value} = e.target

        SetAddressForm({
            ...AddressForm,
            [name]: value
        })
    }
    const AddressSubmit = async(e) => {
        e.preventDefault()
        try {


            const{data} = await axios.post(`${Api}/api/address/AddAddress`, AddressForm, {withCredentials:true})
            console.log(data);
            
            SetAddressForm({
                address: "",
                city: "",
                pincode: "",
                country: "",
                phoneno: ""
            })
            
            toast.success(data.message)
            if(data.success){
                GetUserAddress()  
            }
        } catch (error) {
            console.log("AddressSubmit error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }

    const GetUserAddress = async() => {
        try {
            const{data} = await axios.get(`${Api}/api/address/getaddress`, {withCredentials:true})
            console.log(data.showadd);
            
            SetShowAddress(data.showadd)
        } catch (error) {
            console.log("GetAddress error", error);
        }
    }


    
    
    
    useEffect(() => {
        FetchProduct()
        GetProfile()
        GetCartProducts()
        GetUserAddress()
        GetOrderHistory()
    }, [])
    
    return(
        <Usercontext.Provider value={{OrderHistory,handlePaymentSelect,ShowAddress,selectedAddress, setSelectedAddress,SelectPayment,setSelectPayement,PlaceOrder,AddressSubmit,AddressChange,AddressForm,Setdata,ShowDetail,Productidpage,newdata,GetCartProducts,RemoveCartproduct,Addproduct,DecreaseQty,FetchCart,navigate,AddCartProduct,getprofile,Userlogout,HandleChange,FormSubmit,UserForm,islogin,Setislogin,OpenLogin,SetOpenlogin,SetShowProfile,ShowProfile,Productidpage}}>
            {children}
        </Usercontext.Provider>
    )
}