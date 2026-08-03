import { createContext, useEffect, useState } from "react";
import axios from "axios"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const admincontext = createContext()

export const AdminProvider = ({ children }) => {

    const Api = "https://pharmacy-d78v.onrender.com"

    // const Api = "http://localhost:5000"


    const [AdminForm, SetAdminForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    const [ProductForm, SetProductForm] = useState({
        name: "",
        category: "",
        brandname: "",
        Subcategory: "",
        description: "",
        longdescription: "",
        price: "",
        tax: "",
        stock: "",
        qty: ""
    })
    const [isLogin, SetisLogin] = useState("adminlogin")
    const [prev, Setprev] = useState(null)
    const [Backendimg, Setbackendimg] = useState()
    const [GetProduct, SetGetProduct] = useState([])
    const [getUsers, SetgetUsers] = useState([])
    const [userid, Setuserid] = useState(null)
    const [ShowProfile, SetShowProfile] = useState()
    const [isAuth, SetisAuth] = useState(false)
    const [FetchOrder, SetFetchOrder] = useState([])
    const [finddetail, Setfinddetail] = useState(null)
    const [load, Setload] = useState(false)

    const navigate = useNavigate()

    const OrderChange = (e) => {
        const { name, value } = e.target
        console.log(e);

    }

    const HandleChange = (e) => {
        const { name, value } = e.target
        SetAdminForm({
            ...AdminForm,
            [name]: value
        })

    }

    const HandleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res;
            // if(SetisLogin("register")){
            //     res = await  axios.post(`${Api}/api/admin/adminregister`, AdminForm, {withCredentials:true});

            // }
            // else{
            //     res = await axios.post(`${Api}/api/admin/adminlogin`, AdminForm, {withCredentials:true});

            // }

            res = await axios.post(`${Api}/api/admin/${isLogin}`, AdminForm, { withCredentials: true });


            const data = res.data
            toast.success(data.message);

            console.log("LOGIN DATA:", data)

            if (data.success) {
                SetisAuth(true)
                navigate("/product")
            }

            SetAdminForm({
                firstname: "",
                lastname: "",
                email: "",
                password: ""
            })
        } catch (error) {
            console.log("handlesubmit error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }

    }

    const ProductChange = (e) => {
        const { name, value } = e.target
        SetProductForm({
            ...ProductForm,
            [name]: value
        })
    }

    const handleimg = (e) => {
        const file = e.target.files[0];

        if (!file) return;
        console.log(URL.createObjectURL(file));

        Setprev(URL.createObjectURL(file))
        Setbackendimg(file)

    }

    const ProductSubmit = async (e) => {
        e.preventDefault()
        try {

            const Product = new FormData()
            Product.append("name", ProductForm.name)
            Product.append("category", ProductForm.category)
            Product.append("brandname", ProductForm.brandname)
            Product.append("Subcategory", ProductForm.Subcategory)
            Product.append("description", ProductForm.description)
            Product.append("longdescription", ProductForm.longdescription)
            Product.append("price", ProductForm.price)
            Product.append("tax", ProductForm.tax)
            Product.append("stock", ProductForm.stock)
            Product.append("qty", ProductForm.qty)

            Product.append("image", Backendimg)


            if (userid) {
                const { data } = await axios.put(`${Api}/api/product/updateproduct/${userid}`, Product, { withCredentials: true })
                toast.success(data.message)
                console.log("update data", data.updateproduct);
            }
            else {
                const { data } = await axios.post(`${Api}/api/product/addproduct`, Product, { withCredentials: true })
                toast.success(data.message)

            }

            if (data.success) {
                Setload(true)
            }

            SetProductForm({
                name: "",
                category: "",
                brandname: "",
                Subcategory: "",
                description: "",
                longdescription: "",
                price: "",
                tax: "",
                stock: "",
                qty: ""
            })


            navigate("/product")
            GetProfile()
            FetchProductData()
            Setprev(null)
        } catch (error) {
            console.log("ProductSubmit error", error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }

    }

    const FetchProductData = async () => {
        try {
            const { data } = await axios.get(`${Api}/api/product/getproduct`)
            SetGetProduct(data.Finddata)
        } catch (error) {
            console.log("fetchproductdata error", error);
        }
    }

    const UpdateProduct = async (item) => {

        try {
            SetProductForm({
                name: item.name,
                category: item.category,
                brandname: item.brandname,
                Subcategory: item.Subcategory,
                description: item.description,
                longdescription: item.longdescription,
                price: item.price,
                tax: item.tax,
                stock: item.stock,
                qty: item.qty
            })
            Setuserid(item._id)
            Setprev(item.image)
            navigate("/addproduct")
        } catch (error) {
            console.log("update error", error);
            console.log("update error", error?.response?.data?.message);

        }
    }

    const GetProfile = async () => {
        try {
            const { data } = await axios(`${Api}/api/admin/adminprofile`, { withCredentials: true })
            if (data.success) {
                SetisAuth(true)
                SetShowProfile(data.admin)
            } else {
                SetisAuth(false)
            }

        } catch (error) {
            console.log("Getprofile error", error);
            console.log("GetProfile error", error?.response?.data?.message);
        }
    }

    const GetUsers = async () => {
        try {
            const { data } = await axios.get(`${Api}/api/user/getallusers`, { withCredentials: true })
            SetgetUsers(data.users)

        } catch (error) {
            console.log("Getusers error", error);
        }
    }

    const ProductDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${Api}/api/product/Deleteproduct/${id}`)
            FetchProductData()

            toast.success(data.message)
        } catch (error) {
            console.log("productDelete erorr", error);
            console.log("delete error", error?.response?.data?.message);
        }
    }
    const AdminLogout = async () => {
        try {
            const { data } = await axios.post(`${Api}/api/admin/adminlogout`, {}, { withCredentials: true })
            if (data.success) {
                SetisAuth(false)
                navigate("/login")
            }
            toast.success(data.message)
        } catch (error) {
            console.log("logout error", error);
            console.log("logout error", error?.response?.data?.message);
        }
    }

    const GetOrder = async () => {
        try {
            const { data } = await axios.get(`${Api}/api/order/getorder`)
            console.log(data.orders);

            SetFetchOrder(data.orders)
        } catch (error) {
            console.log("Getorder error", error);
            console.log("getorder error", error?.response?.data?.message);
        }
    }

    const OrderUpdate = async (orderId, orderStatus) => {
        const { data } = await axios.put(`${Api}/api/order/updateorder`, { orderId, orderStatus }, { withCredentials: true })

        if (data.success) {
            GetOrder()
        }

    }

    const OrderDetail = (userid) => {
        console.log(userid);
        console.log(FetchOrder);


        const findpro = FetchOrder.find((item) => item.user._id == userid)
        Setfinddetail(findpro)
    }

    

    useEffect(() => {
        FetchProductData()
        GetUsers()
        GetProfile()
        GetOrder()
    }, [])

    return (
        <admincontext.Provider value={{ OrderChange,OrderUpdate, AdminForm, OrderDetail, load, finddetail, FetchOrder, navigate, isAuth, AdminLogout, ShowProfile, HandleChange, HandleSubmit, SetisLogin, prev, handleimg, ProductSubmit, ProductChange, ProductForm, GetProduct, UpdateProduct, getUsers, ProductDelete }}>
            {children}
        </admincontext.Provider>
    )
}

