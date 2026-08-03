import React from 'react'
import { motion } from "framer-motion"

function Prescription() {
  return (
    <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.5}} className='bg-[#61AE38] mt-16 lg:mt-30 animate-fade-in'>
        <div  className='text-center items-center flex flex-col gap-4 sm:gap-5 py-10 sm:py-15 px-5 sm:px-16 lg:px-80'>
            <p className='text-[24px] sm:text-[30px] lg:text-[35px] text-[#374151] font-bold animate-slide-up opacity-0' style={{ animationDelay: '0ms' }}>
                Need Help with your Prescription?
            </p>
            <p className='text-sm sm:text-base lg:text-[18px] text-white animate-slide-up opacity-0' style={{ animationDelay: '100ms' }}>
                Upload your prescription and let our pharmacists arrange your medicines for you. We verify every order.
            </p>
            <button
                className="bg-white px-8 sm:px-10 mt-3 sm:mt-5 w-full sm:w-fit rounded-lg py-2 text-[16px] sm:text-[20px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 animate-slide-up opacity-0"
                style={{ animationDelay: '200ms' }}
            >
                Upload Now
            </button>
        </div>

        <style>{`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slide-up {
                from { opacity: 0; transform: translateY(16px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fade-in 0.5s ease-out both;
            }
            .animate-slide-up {
                animation: slide-up 0.5s ease-out forwards;
            }
        `}</style>
    </motion.div>
  )
}

export default Prescription