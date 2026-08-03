import React, { useContext } from 'react'
import { admincontext } from '../../UserContex'
import { LuBox } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { PiTruckLight } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { useState } from 'react';


function OrderDetail() {
  const { FetchOrder, finddetail,isOpen,SetisOpen,navigate } = useContext(admincontext)
  console.log(finddetail);
  const total = finddetail?.item.reduce((acc, val) => acc + val.totalPrice, 0)
  const handleDownloadInvoice = () => {
    window.print();
  };

  return (
    <>
      <div className='bg-black/40 fixed inset-0  flex items-center  justify-center z-50 backdrop-blur-[5px]'>
        <div className="bg-white w-220  h-145 rounded-2xl  shadow-lg  overflow-auto no-scrollbar ">
          <p className='text-[22px] font-bold px-5 py-5 sticky top-0 bg-[#f7faf6]'>Order Detail</p>
          <hr className='border border-[#f0f1f0]' />

          <div className="grid grid-cols-6 gap-8 px-10 pb-10">
            <div className=' col-span-4 mt-3'>
              <div className=' pt-5 pb-3 '>

                <div className="flex gap-2 items-center text-[#6f9662] ">
                  <p><LuBox /></p>
                  <p className='uppercase text-sm font-bold '>Order Items</p>
                </div>

              </div>



              <div className="flex flex-col gap-5">
                {finddetail?.item.map((val) => {
                  return (
                    <>
                      <div className='border border-[#f0f1f0] rounded-lg bg-[#f7faf6] px-3 py-2'>

                        <div className="flex items-center justify-between ">

                          <div className='flex items-center gap-4'>
                            <p className='bg-white p-3 rounded-md'><LuBox className='text-[#79a36b] text-[30px]' /></p>
                            <div>
                              <div className='font-semibold'>{val?.productid?.name}</div>
                              <div className='text-[12px]'>{val.quentity} x ₹{val.productid.price}</div>
                            </div>
                          </div>

                          <div className='font-bold flex flex-col justify-end'>
                            <p>₹{(val.productid.price) * (val.quentity)}</p>
                          </div>
                        </div>

                      </div>
                    </>
                  )
                })}
              </div>

              <div className=' bg-[#f7faf6] mt-5 pt-10 pb-5 rounded-xl flex flex-col gap-2 px-5'>
                <div className="flex items-center justify-between   ">
                  <p>Subtotal</p>
                  <p>{total.toFixed(2)}</p>
                </div>


                <div className="flex items-center justify-between   ">
                  <p>Delivery Charge</p>
                  <p>₹ 0</p>
                </div>


                <div className="flex items-center justify-between   ">
                  <p>Discount</p>
                  <p>₹ 0</p>
                </div>
                <hr className='my-3' />

                <div className="flex items-center text-[20px] font-bold justify-between   ">
                  <p>Total Amount</p>
                  <p>₹ {total.toFixed(2)}</p>
                </div>

              </div>

            </div>

            <div className='flex flex-col gap-8 py-5 col-span-2'>

              <div className='border border-[#f0f1f0] px-5 py-6 rounded-xl shadow-sm shadow-[#c9f9b9]'>
                <div className="flex items-center gap-2 text-[#6f9662]  text-[12px]">
                  <p className='text-sm'><FaRegUser /></p>
                  <p className='uppercase text-[12px] font-bold '>Customer Info</p>
                </div>

                <div className='mt-2 mb-1 font-semibold capitalize'>{finddetail.user.firstname} {finddetail.user.lastname}</div>
                <div className="text-sm underline mt-1">{finddetail.user.email}</div>
              </div>


              <div className='border border-[#f0f1f0] px-5 py-6 rounded-xl shadow-sm shadow-[#c9f9b9]'>
                <div className="flex items-center gap-2 text-[#6f9662]  text-[12px]">
                  <p className='text-[18px]'><PiTruckLight /></p>
                  <p className='uppercase text-[12px] font-bold '>Shipping Address</p>
                </div>

                <div className='mt-2 mb-1 font-semibold capitalize'>{finddetail.shippingAddress.address} {finddetail.shippingAddress.city}</div>
                <div className="text-sm  mt-1">{finddetail.shippingAddress.pincode}, {finddetail.shippingAddress.country}</div>
              </div>

              <div className='border border-[#f0f1f0] px-5 py-6 rounded-xl shadow-sm shadow-[#c9f9b9]'>
                <div className="flex items-center gap-2 text-[#6f9662]  text-[12px]">
                  <p className='text-[18px]'><MdPayment /></p>
                  <p className='uppercase text-[12px] font-bold '>Payment Status </p>
                </div>

                <div className='mt-2 mb-1 font-semibold capitalize text-sm flex items-center gap-4'>
                  {finddetail.paymentMethod}
                  <p className="bg-red-100 text-red-700 rounded-sm text-[12px] uppercase font-bold px-2 py-1">{finddetail.paymentStatus}</p>
                </div>
              </div>

            </div>


          </div>



          <p className='font-bold px-5 py-6 bg-[#f7faf6] sticky bottom-0  flex justify-between'>
            <button
              onClick={handleDownloadInvoice}
              className='px-5 py-2 rounded-md shadow-sm shadow-[#83b767] bg-white'
            >
              Download invoice
            </button>
            <button onClick={() =>  navigate("/Order")}  className='bg-[#83b767] cursor-pointer text-white px-5 py-2 rounded-md '>Close Details</button>
          </p>

        </div>
      </div>
    </>
  )
}

export default OrderDetail