import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { Usercontext } from '../../Context/Usercontext';
import { NavLink } from 'react-router-dom';

function UserLogin() {

  const { HandleChange, FormSubmit, UserForm, Setislogin, islogin, OpenLogin, SetOpenlogin, SetShowProfile, ShowProfile } = useContext(Usercontext)
 
  
  return (
    <div className='fixed inset-0 bg-black/40 flex backdrop-blur-[5px] items-center justify-center z-50 p-4 animate-backdrop-fade'>
        <div className='bg-white w-full sm:w-110 max-w-full rounded-2xl px-5 sm:px-8 py-5 shadow-lg relative max-h-[92vh] overflow-y-auto animate-modal-in'>
          <button
            onClick={() => SetOpenlogin(false)}
            className='absolute cursor-pointer top-5 right-5 text-gray-400 hover:bg-gray-300 hover:text-5 hover:rounded-sm text-2xl transition-all duration-200'
          >
            <IoClose />
          </button>
          <p className='text-[24px] sm:text-[30px] text-center font-bold'>Welcome Back</p>
          <p className='text-center text-sm sm:text-base'>Enter your details to access your account</p>
          <form action="" onSubmit={FormSubmit} className='mt-8 sm:mt-10'>

            <label htmlFor="" className='text-[12px] uppercase font-semibold text-gray-400'>Email Address</label>

            <div className='flex items-center mb-5 mt-1 gap-1 border rounded-md px-4 py-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#61AE38]/40'>
              <MdOutlineMailOutline className='mt-1 text-gray-300 text-[18px] shrink-0' />
              <input type="email" name='email' onChange={HandleChange} value={UserForm.email} placeholder='Enter Your Email' className='w-full px-2 py-1 outline-none' id="" />
            </div>

            <label htmlFor="" className='text-[12px] uppercase font-semibold text-gray-400'>Password</label>

            <div className='flex mt-1 items-center gap-1 border rounded-md px-4 py-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#61AE38]/40'>
              <IoLockClosed className='mt-1 text-gray-300 text-[18px] shrink-0' />
              <input type="password" name='password' onChange={HandleChange} value={UserForm.password} placeholder='Enter Your Password' className='w-full px-2 py-1 outline-none' id="" />
            </div>

            <button type='submit' className='w-full bg-[#45951a] text-white shadow-xl text-center py-2 rounded-md mt-8 sm:mt-10 text-lg sm:text-xl font-bold transition-all duration-300 hover:bg-[#397a15] hover:shadow-lg hover:shadow-[#45951a]/40 active:scale-[0.98]'>Sign In</button>
            <div className='flex flex-wrap gap-2 items-center mt-8 sm:mt-10 text-sm sm:text-base'>Don't have an account?<span onClick={() => Setislogin("register")} className='text-[#059669] font-semibold text-sm cursor-pointer transition-colors duration-200 hover:text-[#046b52]'>Sign Up</span></div>
          </form>
        </div>

        <style>{`
            @keyframes backdrop-fade {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes modal-in {
                from { opacity: 0; transform: translateY(16px) scale(0.97); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-backdrop-fade {
                animation: backdrop-fade 0.25s ease-out both;
            }
            .animate-modal-in {
                animation: modal-in 0.3s ease-out both;
            }
        `}</style>
    </div>
  )
}

export default UserLogin