import React, { useContext } from 'react'
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { TbFileDescription } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import { Link, NavLink } from 'react-router-dom';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { admincontext } from '../UserContex';

function SideBar() {
  const{AdminLogout} = useContext(admincontext)
  return (
    <div className='w-[25%]  bg-[#b1d89c] h-screen sticky top-0 px-8 pt-5'>
      <div className='flex items-center gap-2 text-[#2e6e0b]'>
        <div className='text-[25px]  rounded-lg bg-[#6a9f4d]/50 text-white p-2' ><AiOutlineMedicineBox /></div>
        <p className='text-[20px] capitalize font-bold'>Pharm<span className='text-white'>On</span></p>
        <Link to='/profile' className='text-[12px] text-gray-700 mt-1 font-semibold'>Admin</Link>
      </div>
      <div className='pt-20 flex flex-col gap-5 text-gray-700'>
        <div className='flex items-center text-[18px]  font-semibold gap-3'><MdOutlineDashboard />Dashboard</div>
        <NavLink to='/product' className='flex items-center text-[18px]  font-semibold gap-3'><FiBox />Product</NavLink>
        <NavLink to='/order' className='flex items-center text-[18px]  font-semibold gap-3'><RiShoppingBag3Fill />Order</NavLink>
        <NavLink to='/users' className='flex items-center text-[18px]  font-semibold gap-3'><LuUsers />Users</NavLink>
        <div onClick={AdminLogout} className='flex items-center  bottom-8 absolute font-semibold  gap-3 cursor-pointer'> 
          <p><RiLogoutBoxRLine className='text-[18px]' /></p>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar