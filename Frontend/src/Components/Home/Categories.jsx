import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Usercontext } from '../../Context/Usercontext'
import { TiArrowRightThick } from "react-icons/ti";
import { motion } from "framer-motion"


function Categories() {

  const categories = [
    { emoji: '🧴', label: 'Personal Care', bg: 'bg-sky-100', shadow: 'hover:shadow-blue-200', text: 'text-blue-600' },
    { emoji: '👶', label: 'Baby Care', bg: 'bg-pink-100', shadow: 'hover:shadow-pink-200', text: 'text-pink-600' },
    { emoji: '🩺', label: 'Health Checkup', bg: 'bg-green-100', shadow: 'hover:shadow-green-200', text: 'text-green-600' },
    { emoji: '💊', label: 'Medicine', bg: 'bg-orange-100', shadow: 'hover:shadow-orange-200', text: 'text-orange-600' },
    { emoji: '🌿', label: 'Ayurvedik', bg: 'bg-emerald-100', shadow: 'hover:shadow-emerald-200', text: 'text-emerald-600' },
    { emoji: '🏠', label: 'Oracle care', bg: 'bg-purple-100', shadow: 'hover:shadow-purple-200', text: 'text-purple-600' },
  ]

  return (
    <div className='py-5  animate-fade-in'>
      <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <p className='text-[24px] sm:text-[28px] lg:text-[30px] font-bold'>Browse by Category</p>
        <div className='text-base sm:text-lg flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 mt-2'>
          <span>Find exactly what you need</span>

          <Link to="/shop" onClick={() => window.scrollTo(0, 0)} className='text-[16px] sm:text-[18px] flex items-center gap-2 font-semibold transition-all duration-200 hover:gap-3 hover:text-[#61AE38] w-fit'>
            See All
            <TiArrowRightThick />
          </Link>

        </div>
      </motion.div>


      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 pt-8 sm:pt-10 pb-12 sm:pb-20 gap-4 sm:gap-5'>
        {categories.map((cat, index) => (
          <div
            key={cat.label}
            style={{ animationDelay: `${index * 70}ms` }}
            className={`animate-pop-in opacity-0 bg-white items-center px-4 sm:px-6 lg:px-10 w-full flex flex-col gap-2 sm:gap-3 group duration-300 hover:-translate-y-1.5 hover:shadow-sm ${cat.shadow} transition-all p-4 sm:p-6 rounded-xl cursor-pointer`}
          >
            <div className={`${cat.bg} group-hover:scale-110 group-hover:rotate-6 overflow-hidden transition-all duration-400 rounded-full p-3 sm:p-4 lg:p-5 text-[22px] sm:text-[26px] lg:text-[30px]`}>
              {cat.emoji}
            </div>
            <p className={`${cat.text} font-semibold text-xs sm:text-sm lg:text-base text-center`}>{cat.label}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pop-in {
          from { opacity: 0; transform: translateY(14px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out both;
        }
        .animate-pop-in {
          animation: pop-in 0.45s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Categories