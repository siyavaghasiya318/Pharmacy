import React, { useContext, useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import AddProducts from './Components/Product/AddProducts'
import Products from './Components/Product/Products'
import CreateAc from './Components/Login/CreateAc'
import {Toaster} from "react-hot-toast"
import LoginAc from './Components/Login/LoginAc'
import Home from './Components/Home/Home'
import SideBar from './Components/SideBar'
import Users from './Components/Users/Users'
import ProfileAdmin from './Components/Users/ProfileAdmin'
import { admincontext } from './UserContex'
import ProtectRoute from './Components/ProtectedRoutes/ProtectRoute'
import PublicRoute from './Components/ProtectedRoutes/PublicRoute'
import Order from './Components/Order/Order'
import OrderDetail from './Components/Order/OrderDetail'

function App() {
  const{isAuth} = useContext(admincontext)
  return (
    <>
    <div className='flex'>
      {isAuth && <SideBar/>}

      <div className='w-[100%] text-[#2e6e0b]'>
        
        <Routes>
          <Route path='/login' element={<PublicRoute><LoginAc/></PublicRoute>}/>
          <Route path='/createac' element={<PublicRoute><CreateAc/></PublicRoute>}/>

          
          <Route path='/' element={<ProtectRoute><Home/></ProtectRoute>}/>
          <Route path='/product' element={<ProtectRoute><Products/></ProtectRoute>}/>
          <Route path='/addproduct' element={<ProtectRoute><AddProducts/></ProtectRoute>}/>
          <Route path='/addproduct' element={<ProtectRoute><AddProducts/></ProtectRoute>}/>
          <Route path='/users' element={<ProtectRoute><Users/></ProtectRoute>}/>
          <Route path='/profile' element={<ProtectRoute><ProfileAdmin/></ProtectRoute>}/>
          <Route path='/Order' element={<ProtectRoute><Order/></ProtectRoute>}/>
          <Route path='/orderdetail' element={<ProtectRoute><OrderDetail/></ProtectRoute>}/>
        </Routes>
      </div>
    
    </div>
    
    <Toaster position='top-center ' toastOptions={{
      style: {
        fontSize: '13px',
        borderRadius: '8px',
      },
      }}/>
    </>
  )
}

export default App