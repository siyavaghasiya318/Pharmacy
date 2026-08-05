import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Shop from './Pages/Shop'
import {Toaster} from "react-hot-toast"
import UserLogin from './Components/Login_register/UserLogin'
import Userregister from './Components/Login_register/Userregister'
import UserProfile from './Components/Login_register/UserProfile'
import PharmacyHome from './Components/Home/PharmacyHome'
import Footer from './Components/Footer'
import CartProducts from './Components/Cart/CartProducts'
import ProductDetail from './Components/Shop/ProductDetail'
import AddAddress from './Components/Login_register/AddAddress'
import Shipping from './Components/Order/Shipping'
import Checkout from './Components/Order/Checkout'
import ContactPage from './Pages/ContactPage'

function App() {
  return (
    <div className='bg-[#FFFFFF] text-[#2e6e0b]'>
      <NavBar />
        <Routes>
          <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/login' element={<UserLogin/>}/>
            <Route path='/register' element={<Userregister/>}/>
            <Route path='/profile' element={<UserProfile/>}/>
            <Route path='/pharmacyhome' element={<PharmacyHome/>}/>
            <Route path='/cart' element={<CartProducts/>}/>
            <Route path='/detail/:id' element={<ProductDetail/>}/>
            <Route path='/address' element={<AddAddress/>}/>
            <Route path='/order' element={<Shipping/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
          </Route>
          
        </Routes>
        <Footer/>
        
        <Toaster/>
    </div>
  )
}

export default App