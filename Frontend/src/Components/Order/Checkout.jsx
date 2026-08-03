import React from 'react'
import { useContext } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Usercontext } from '../../Context/Usercontext'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


function Checkout() {
    const { getprofile,handlePaymentSelect,SelectPayment,setSelectPayement,PlaceOrder,selectedAddress,FetchCart} = useContext(Usercontext)

    console.log(SelectPayment);
    
    
    const total = FetchCart.reduce((acc, item)=> acc+item.totalPrice , 0)
    const tax = FetchCart.reduce((acc, item)=> acc+item.tax , 0)
  return (
    <div className='px-10'>
        <div>
            <div className="flex gap-3 justify-center py-10">
                <div>
                    <div className='w-fit'><div className="bg-[#61AE38] p-2 ms-2 rounded-full  font-semibold text-white  "><IoMdCheckmarkCircleOutline className='text-[24px]' /></div></div>
                    <p className='text-[14px] font-semibold'>Shipping</p>
                </div>
                <hr className='border-2 border-[#61AE38] mt-5 rounded-full w-30' />
                <div>
                    <div className='w-fit'><div className="bg-[#61AE38] text-white p-3 ms-2 rounded-full font-semibold px-4 py-2 ">2 </div></div>
                    <p className='text-[14px]  font-semibold'>Payment</p>
                </div>
                <hr className='border-2 border-[#d0dacb] mt-5 rounded-full w-30' />
                <div>
                    <div className='w-fit'><div className="bg-[#d0dacb] p-3 ms-2 rounded-full font-semibold px-4 py-2 ">3</div></div>
                    <p className='text-[14px] text-[#9fa99b] font-semibold'>Confirmation</p>
                </div>
            </div>
        </div>



        <div className="grid lg:grid-cols-6 gap-10  mb-10">

                <div className="lg:col-span-4 rounded-xl p-8 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="text-[20px]"><MdOutlinePayment /></div>
                        <p className='text-[20px] font-bold'>Payment Method</p>
                    </div>

                    <div className="flex flex-col gap-5 mt-10">
                                    <div onClick={() => handlePaymentSelect("Online")}  className=" bg-[#dffcd01b] items-center flex gap-5 rounded-xl p-5 cursor-pointer border border-[#c4f4aa]" >
                                        
                                        <div className="border-2 w-4 h-3.5 md:h-5 md:w-5 rounded-full flex items-center justify-center">
                                            {SelectPayment == "Online" ?<div className="md:w-3 md:h-3 w-1.5 h-1.5 rounded-full bg-green-700"></div>: ""}
                                        </div>
                                        <div className="flex items-center gap-8 w-full justify-between">
                                            <div className="flex gap-2 lg:gap-1 flex-col">
                                                <p className="font-bold lg:text-[18px] md:text-[16px] text-sm lg:leading md:leading-5 capitalize">UPI / Net Banking</p>
                                                <p className="lg:text-sm text-[10px] md:text-xs capitalize">Google Pay, PhonePe, Paytm, BHIM</p>
                                            </div>

                                            <div className='lg:flex  gap-2'>
                                                <div className="flex items-center gap-2">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" className='lg:w-15 w-10' alt="" /> <hr className='border h-5 border-[#d3f5bc]' />
                                                <img src="https://imgs.search.brave.com/kJMN34OgdcBAkVDw96RCJihPLktXkVvy9DQcbdd7e_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA0/L0dvb2dsZS1QYXkt/TG9nby0yMDE4LTUw/MHgzMTQucG5n" className='lg:w-8 w-5' alt="" />
                                                </div>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" className='lg:w-15 w-10 mt-1 lg:mt-0' alt="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div onClick={() => handlePaymentSelect("card")} className=" bg-[#dffcd01b] items-center flex gap-5 rounded-xl p-5 cursor-pointer border border-[#c4f4aa]" >
                                         <div className="border-2 w-4 h-3.5 md:h-5 md:w-5 rounded-full flex items-center justify-center">
                                            {SelectPayment == "card" ?<div className="md:w-3 md:h-3 w-1.5 h-1.5 rounded-full bg-green-700"></div>: ""}
                                        </div>
                                        <div className="flex items-center gap-8 w-full justify-between">
                                            <div className="flex gap-2 lg:gap-1 flex-col">
                                                <div className="font-bold lg:text-[18px] md:text-[16px] text-sm lg:leading md:leading-5 capitalize">Debit / Credit Card</div>
                                                <div className="lg:text-sm text-[10px] md:text-xs capitalize">Visa, Mastercard, RuPay, Maestro</div>
                                            </div>

                                            <div className='flex gap-2'>
                                                <img src="https://imgs.search.brave.com/nXFNVEqc3NW6i2fhib4CGTHWekAbNXaEUuSIIEE10gU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ZlcmlmaWVkLWJ5/LXZpc2EtbG9nby1w/bmctMC5wbmc" className='w-10 h-4' alt="" /> 
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className='w-7' alt="" />
                                            </div>
                                        </div>
                                    </div>


                                    <div onClick={() => handlePaymentSelect("COD")} className=" bg-[#dffcd01b] items-center flex gap-5 rounded-xl p-5 cursor-pointer border border-[#c4f4aa]" >
                                        <div className="border-2 w-4 h-3.5 md:h-5 md:w-5 rounded-full flex items-center justify-center">
                                            {SelectPayment == "COD" ?<div className="md:w-3 md:h-3 w-1.5 h-1.5 rounded-full bg-green-700"></div>: ""}
                                        </div>
                                        <div className="flex items-center gap-8 w-full justify-between">
                                            <div className="flex gap-2 lg:gap-1 flex-col">
                                                <div className="font-bold lg:text-[18px] md:text-[16px] text-sm lg:leading md:leading-5 capitalize">Cash on Delivery</div>
                                                <div className="lg:text-sm text-[10px] md:text-xs capitalize">Pay when you receive</div>
                                            </div>

                                        </div>
                                    </div>
                    
                        <Link onClick={() => {PlaceOrder(FetchCart,selectedAddress),window.scrollTo(0,0)}}  className="flex justify-end cursor-pointer"><div className="bg-[#61AE38] lg:px-10 px-8 lg:py-2 py-1.5 w-fit rounded-lg text-white lg:text-[18px] font-semibold">Place Order</div></Link>
                    </div>

                </div>

                <div className='rounded-xl h-fit  p-5  lg:col-span-2 shadow-sm'>
                    <div className='font-bold'>Order Summary</div>
                    <div className='flex flex-col gap-2 mt-5'>
                        {FetchCart.map((item) => {
                            return(
                                <>
                                    <div className='border rounded-sm border-[#e7eee3] px-3  py-2'>
                                        <div className="flex items-center gap-4">
                                            <div className='w-[20%]'><img src={item.image} className='object-contain lg:w-full lg:h-full w-20 h-20 ' alt="" /></div>
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
                        <p>₹ {((total)+(tax)).toFixed(2)}</p>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Checkout