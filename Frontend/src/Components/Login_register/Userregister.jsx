import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { Usercontext } from '../../Context/Usercontext';
import { NavLink } from 'react-router-dom';

function Userregister() {

  const { HandleChange, FormSubmit, UserForm, Openlogin, Setislogin, SetOpenlogin } = useContext(Usercontext)
 
  return (
    <div className='fixed inset-0 bg-black/40 backdrop-blur-[5px] flex items-center justify-center z-50 p-4 animate-backdrop-fade'>
        <div className='bg-white w-full sm:w-110 max-w-full rounded-2xl px-5 sm:px-8 py-5 shadow-lg relative max-h-[92vh] overflow-y-auto animate-modal-in'>
          <button
            onClick={() => SetOpenlogin(false)}
            className='absolute top-5 right-5 text-gray-400 hover:bg-gray-300 hover:text-white hover:rounded-sm text-2xl transition-all duration-200'
          >
            <IoClose />
          </button>
          <p className='text-[24px] sm:text-[30px] text-center font-bold'>Create Account</p>
          <p className='text-center text-sm sm:text-base'>Join PharmOn for a healthier lifestyle</p>
            <form action="" onSubmit={FormSubmit} className='mt-8 sm:mt-10'>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-3 w-full">
              <div className='w-full flex-1'>
                <label htmlFor="" className='text-[12px] uppercase font-semibold text-gray-400'>First Name</label>

                <div className='flex items-center mt-1 gap-1 border rounded-md px-4 py-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#61AE38]/40'>
                  <input type="text" name='firstname' value={UserForm.firstname} onChange={HandleChange} placeholder='Enter Your Firstname' className='w-full outline-none py-1' id="" />
                </div>
              </div>

              <div className='w-full flex-1'>
                <label htmlFor="" className='text-[12px] uppercase font-semibold text-gray-400'>Last Name</label>

                <div className='flex items-center mt-1 gap-1 border rounded-md px-4 py-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#61AE38]/40'>
                  <input type="text" name='lastname' value={UserForm.lastname} onChange={HandleChange} placeholder='Enter Your lastname' className='w-full outline-none text-[15px] py-1' id="" />
                </div>
              </div>
            </div>



            <label htmlFor="" className='text-[12px] uppercase font-semibold text-gray-400'>Email Address</label>

            <div className='flex items-center mt-1 gap-1 border rounded-md px-4 py-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#61AE38]/40'>
              <MdOutlineMailOutline className='mt-1 text-gray-300 text-[18px] shrink-0' />
              <input type="email" name='email' value={UserForm.email} onChange={HandleChange} placeholder='Enter Your Email' className='outline-none w-full px-2 py-1' id="" />
            </div>

            <div className='flex flex-col gap-1 mt-4 mb-3'>
              <p className='text-gray-400 text-[12px] uppercase font-semibold'>Date of Birth</p>
              <input type="date" name='dateofbirth' value={UserForm.dateofbirth} onChange={HandleChange} className='border outline-none w-full text-[#94b681] rounded-md px-4 py-1 transition-all duration-200 focus:ring-2 focus:ring-[#61AE38]/40' />
            </div>

            <label htmlFor="" className='text-[12px] uppercase font-semibold text-gray-400'>Password</label>

            <div className='flex mt-1 items-center gap-1 border rounded-md px-4 py-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#61AE38]/40'>
              <IoLockClosed className='mt-1 text-gray-300 text-[18px] shrink-0' />
              <input type="password" name='password' value={UserForm.password} onChange={HandleChange} placeholder='Enter Your Password' className='w-full px-2 py-1 outline-none' id="" />
            </div>

            <button type='submit' className='bg-[#45951a] w-full text-white shadow-xl text-center py-2 rounded-md mt-8 sm:mt-10 text-lg sm:text-xl font-bold transition-all duration-300 hover:bg-[#397a15] hover:shadow-lg hover:shadow-[#45951a]/40 active:scale-[0.98]'>Create Account</button>
            <div className='flex flex-wrap gap-2 items-center mt-8 sm:mt-10 text-sm sm:text-base'>Already have an account?<span onClick={() => Setislogin("login")} className='text-[#059669] font-semibold text-sm cursor-pointer transition-colors duration-200 hover:text-[#046b52]'>Sign In</span></div>
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


export default Userregister