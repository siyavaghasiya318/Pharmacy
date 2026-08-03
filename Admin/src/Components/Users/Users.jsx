import React, { useContext } from 'react'
import { admincontext } from '../../UserContex'

function Users() {
    const{getUsers} = useContext(admincontext)
  return (
    <div className='p-10'>
        <div className='text-[25px] items-center font-bold flex justify-between'>
            <p> User Management </p>
            <p className='text-sm font-semibold'>Total Users ({getUsers.length})</p>
        </div>
        <div className='border border-[#6a9f4d]/20 rounded-md overflow-hidden  mt-10'>
            <div className='bg-[#6a9f4d]/5 grid grid-cols-2 uppercase text-[12px]  px-5 py-4'>
                <div>users</div>
                <div className='flex justify-between hidden sm:flex'>
                    <p>Status</p>
                    <p>Joined date</p>
                    <p>Action</p>
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col'>
                    {getUsers.map((item) => {
                        return(
                            <>
                                <div className='border-b sm:grid grid-cols-2 border-[#6a9f4d]/20  px-5 py-5'>
                                    <div className='flex gap-5'>
                                        <div><div className=' bg-[#e3e7f9] rounded-full sm:w-12 sm:h-12 w-8 h-8 font-bold flex flex-col m-auto justify-center items-center  text-gray-500'>{item.firstname[0]}</div></div>
                                        <div className='text-xs sm:text-[14px]'>
                                            <p>{item.firstname} {item.lastname}</p>
                                            <p>{item.email}</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center mt-4 sm:mt-0 justify-between text-[8px] sm:text-[10px]'>
                                        <p className='bg-[#DCFCE7] font-semibold  text-green-600  px-5 py-1 rounded-full uppercase'>Active</p>
                                        <p className='text-xs sm:text-[16px]'>Date</p>
                                        <p className='bg-[#FEF2F2] font-semibold  text-red-600  px-5 py-1 rounded-full uppercase'>Block</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users