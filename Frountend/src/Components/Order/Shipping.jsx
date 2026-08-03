import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Usercontext } from '../../Context/Usercontext'

function Shipping() {
    const { getprofile, ShowAddress ,selectedAddress,setSelectedAddress,FetchCart} = useContext(Usercontext)

    console.log(selectedAddress);
    
    const total = FetchCart.reduce((acc, item)=> acc+item.totalPrice , 0)
    const tax = FetchCart.reduce((acc, item)=> acc+item.tax , 0)

    return (
        <div className='p-10'>
            <div className="flex gap-3 justify-center py-10">
                <div>
                    <div className='w-fit'><div className="bg-[#61AE38] p-3 ms-2 rounded-full  font-semibold text-white px-4 py-2 ">1</div></div>
                    <div className='text-[14px] font-semibold'>Shipping</div>
                </div>
                <hr className='border-2 border-[#d0dacb] mt-5 rounded-full w-30' />
                <div>
                    <div className='w-fit'><div className="bg-[#d0dacb] p-3 ms-2 rounded-full font-semibold px-4 py-2 ">2 </div></div>
                    <div className='text-[14px] text-[#9fa99b] font-semibold'>Payment</div>
                </div>
                <hr className='border-2 border-[#d0dacb] mt-5 rounded-full w-30' />
                <div>
                    <div className='w-fit'><div className="bg-[#d0dacb] p-3 ms-2 rounded-full font-semibold px-4 py-2 ">3</div></div>
                    <div className='text-[14px] text-[#9fa99b] font-semibold'>Confirmation</div>
                </div>
            </div>


            <div className="grid lg:grid-cols-6 gap-10 ">

                <div className="lg:col-span-4 rounded-xl p-5 shadow-sm">
                    <div className="flex justify-between">
                        <div className='md:text-[20px] font-bold'>Shipping Address</div>
                        <Link to='/address'><div className='border rounded-md px-3 py-1 sm:text-sm text-[10px] font-semibold md:font-normal '> + Add New </div></Link>
                    </div>

                    <div className="flex flex-col gap-5 mt-10">
                        {ShowAddress.map((item) => {
                            return (
                                <>
                                    {ShowAddress.length === 0 ? 
                                    ("Add Address"):
                                    (<>
                                    <div onClick={() => setSelectedAddress(item)} className={` bg-[#dffcd01b]  flex gap-5 rounded-md md:p-5 p-3 cursor-pointer ${item?._id==selectedAddress?._id ? "border-2 border-[#5db42e]" : "border border-[#c4f4aa]"}`}>
                                         <div className="border-2 sm:w-4 sm:h-3.5 w-4.5 h-2.5 lg:h-5 lg:w-5 rounded-full flex items-center justify-center">
                                            {item?._id == selectedAddress?._id ?<div className="lg:w-3 lg:h-3 sm:w-1.5 sm:h-1.5 w-1 h-1 rounded-full bg-green-700"></div>: ""}
                                        </div>
                                        <div className="flex gap-5 ">
                                            <div className="flex flex-col gap-1 lg:gap-2 lg:pe-40">
                                                <div className="md:text-sm text-xs capitalize">{getprofile?.firstname} {getprofile?.lastname}</div>
                                                <div className="md:text-sm text-xs capitalize">{item.address} , {item.city} , {item.country}</div>
                                                <div className="md:text-sm text-xs">Phone no: {item.phoneno}</div>
                                            </div>
                                        </div>
                                         
                                    </div>
                                    <Link to='/checkout' className="flex justify-end cursor-pointer"><div className="bg-[#61AE38] lg:px-10 px-8 py-2 w-fit rounded-lg text-white text-sm  lg:text-[18px] font-semibold">Continue to Payment</div></Link>
                                </>
                                )    
                                }
                                    
                                </>
                            )
                        })}
                       
                    </div>

                </div>

                <div className='rounded-xl h-fit p-5 lg:col-span-2 shadow-sm'>
                    <div className='font-bold'>Order Summary</div>
                    <div className='flex flex-col gap-2 mt-5'>
                        {FetchCart.map((item) => {
                            return(
                                <>
                                    <div className='border rounded-sm border-[#e7eee3] px-3  py-2'>
                                        <div className="flex gap-4">
                                            <div className='w-[20%]'><img src={item.image} className='object-contain w-full h-full ' alt="" /></div>
                                            <div className="w-[80%]">
                                                <div className="flex gap-2 justify-between items-center">
                                                    <p className='md:text-[12px]  text-xs '>{item.name}</p>
                                                    <div className='text-[14px] font-bold flex'>₹ <p> {item.price}</p></div>
                                                </div>
                                                <div className="flex text-[12px] gap-2 items-center">
                                                    <div>Qty: {item.quentity}</div>
                                                    <div >x ₹{item.price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    <hr  className='text-gray-200 my-5'/>
                    <div className="flex flex-col gap-2">
                        <div className='flex items-center  justify-between text-sm'>
                            <p>Subtotal</p>
                            <p>₹ {total.toFixed(2)}</p>
                        </div>

                        <div className='flex items-center  justify-between text-sm'>
                            <p>Tax</p>
                            <p>₹{tax.toFixed(2)}</p>
                        </div>
                    </div>
                    <hr  className='text-gray-200 my-5'/>

                    <div className="flex items-center lg:text-[18px] font-bold justify-between">
                        <p className='lg:text-[20px] font-bold'>Total</p>
                        <p>₹ {(total)-(tax)}</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Shipping