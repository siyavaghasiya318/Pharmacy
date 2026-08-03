import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"


function PharmacyHome() {
  return (
    <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}}  className='grid items-center bg-[#F0F4F5] gap-10 lg:gap-5 grid-cols-1 lg:grid-cols-2 pt-10 pb-16 lg:py-15 lg:pb-30 px-5 sm:px-8'>

        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} className='lg:pe-15 flex flex-col gap-6 sm:gap-8  animate-slide-up opacity-0' >
            <p className='px-5 py-1 bg-white w-fit font-semibold text-sm rounded-full shadow-sm'>Trusted Online Pharmacy Partner</p>
            <div className='text-[36px] sm:text-[52px] lg:text-[70px] font-extrabold leading-tight lg:leading-18 text-[#61ae38]'>
                <span className='text-[#374151]'>Your Health,</span> Delivered Safely.
            </div>
            <div className='text-gray-500 text-base sm:text-lg lg:text-[21px]'>
                Experience the future of pharmacy. 100% Genuine medicines, rapid delivery, and expert support right at your fingertips.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
                <Link to='/shop' onClick={() => window.scrollTo(0,0)} className='bg-[#61ae38] text-white w-full sm:w-fit text-center text-[16px] sm:text-[18px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#61ae38]/30 py-3 px-6 rounded-md font-semibold'>Shop Medicines</Link>
                <button className='border border-[#61ae38] w-full sm:w-fit text-[16px] sm:text-[18px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-[#61ae38] hover:text-white rounded-md px-6 py-3'>Upload Prescription</button>
            </div>
        </motion.div>

        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} className='relative animate-slide-up opacity-0 flex justify-center lg:block' >
            <div className='bg-[#61AE38] mt-6 lg:mt-30 h-64 sm:h-80 lg:h-110 w-full  max-w-full lg:w-145 sm:ms-5 text-white border-[12px] sm:border-25 border-white rounded-xl flex items-center justify-center transition-transform duration-500'>
                <p className='text-center text-[18px] sm:text-[24px] font-bold  px-4'>Premium Pharmacy App</p>
            </div>
            <div className='flex gap-3 p-3 sm:p-4 bg-white absolute animate-bounce top-8 sm:top-20 lg:top-45 right-2 sm:right-4 rounded-xl shadow-lg'>
                    <p className='bg-[#d8fac5] rounded-full items-center m-auto p-2 sm:p-3'><IoMdCheckmarkCircleOutline className='text-[#53b320] text-[20px] sm:text-[25px]'/></p>
                    <div className='text-green-600 text-xs sm:text-sm font-bold overflow-hidden'>
                        <p className='text-gray-400'>STATUS</p>
                        <p className='text-[13px] sm:text-[16px]'>Orderd Delivered</p>
                    </div>
            </div>
        </motion.div>

        <style>{`
            @keyframes slide-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-slide-up {
                animation: slide-up 0.6s ease-out forwards;
            }
        `}</style>
    </motion.div>
  )
}

export default PharmacyHome