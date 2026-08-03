import React from 'react'
import { AiOutlineMedicineBox } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-white shadow-2xl pt-10 px-6 sm:px-10 animate-fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
            <div className='animate-slide-up opacity-0' style={{ animationDelay: '0ms' }}>
                <div className='flex items-center gap-2 mb-5'>
                    <p className='text-[20px] rounded-lg bg-[#6a9f4d]/20 text-green-800 p-2 transition-transform duration-300 hover:scale-110 hover:rotate-6'><AiOutlineMedicineBox /></p>
                    <p className='text-[20px] text-[#2e6e0b]/90 font-bold'>Pharm<span>On</span></p>
                </div>
                <p className='text-sm sm:text-base text-gray-600'>Your trusted online pharmacy partner. Delivering health and wellness to your doorstep with care and precision.</p>
            </div>

            <div className='sm:ms-0 lg:ms-10 flex flex-col gap-3 animate-slide-up opacity-0' style={{ animationDelay: '80ms' }}>
                <p className='text-lg font-bold mb-2'>Quick Links</p>
                <ul className='flex flex-col gap-3 list-none text-sm sm:text-base'>
                    <li className='w-fit cursor-pointer text-gray-600 transition-all duration-200 hover:text-[#427C23] hover:translate-x-1'>Home</li>
                    <li className='w-fit cursor-pointer text-gray-600 transition-all duration-200 hover:text-[#427C23] hover:translate-x-1'>Shop Medicines</li>
                    <li className='w-fit cursor-pointer text-gray-600 transition-all duration-200 hover:text-[#427C23] hover:translate-x-1'>Quick Links</li>
                    <li className='w-fit cursor-pointer text-gray-600 transition-all duration-200 hover:text-[#427C23] hover:translate-x-1'>About Us</li>
                </ul>
            </div>

            <div className='sm:ms-0 lg:ms-10 flex flex-col gap-3 animate-slide-up opacity-0' style={{ animationDelay: '160ms' }}>
                <p className='text-lg font-bold mb-2'>Support</p>
                <ul className='flex flex-col gap-3 list-none text-sm sm:text-base'>
                    <li className='w-fit cursor-pointer text-gray-600 transition-all duration-200 hover:text-[#427C23] hover:translate-x-1'>Track Order</li>
                    <li className='w-fit cursor-pointer text-gray-600 transition-all duration-200 hover:text-[#427C23] hover:translate-x-1'>Return Policy</li>
                    <li className='w-fit cursor-pointer text-gray-600 transition-all duration-200 hover:text-[#427C23] hover:translate-x-1'>FAQs</li>
                    <li className='w-fit cursor-pointer text-gray-600 transition-all duration-200 hover:text-[#427C23] hover:translate-x-1'>Contact Us</li>
                </ul>
            </div>

            <div className='sm:ms-0 lg:ms-10 flex flex-col gap-3 animate-slide-up opacity-0' style={{ animationDelay: '240ms' }}>
                <p className='text-lg font-bold mb-2'>Contact Us</p>
                <ul className='flex flex-col gap-3 list-none text-sm sm:text-base'>
                    <li className='flex gap-2 text-gray-600 transition-transform duration-200 hover:translate-x-1'>
                        <IoLocationSharp className='mt-1 text-[20px] text-[#427C23]/85 shrink-0' />
                        123 Health Street, Medical <br /> District, NY 10001
                    </li>
                    <li className='flex items-center gap-2 text-gray-600 transition-transform duration-200 hover:translate-x-1'>
                        <IoCall className='text-[20px] text-[#427C23]/85 shrink-0' />
                        +1 (555) 123-4567
                    </li>
                </ul>
            </div>
        </div>
        <hr className='mt-12 sm:mt-20 text-[#427C23]/10' />
        <p className='py-8 text-[#427C23]/70 text-sm sm:text-base text-center sm:text-left'>© 2024 PharmOn. All rights reserved.</p>

        <style>{`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slide-up {
                from { opacity: 0; transform: translateY(14px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fade-in 0.4s ease-out both;
            }
            .animate-slide-up {
                animation: slide-up 0.45s ease-out forwards;
            }
        `}</style>
    </div>
  )
}

export default Footer
