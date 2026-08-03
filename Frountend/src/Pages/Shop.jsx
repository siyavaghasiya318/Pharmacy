import React, { useState } from 'react'
import { FiFilter, FiX } from "react-icons/fi";
import AllCategories from '../Components/Shop/AllCategories'
import Pricerange from '../Components/Shop/Pricerange'
import Products from '../Components/Shop/Products'

function Shop() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className='animate-fade-in'>
        <div className='flex items-center justify-between shadow-sm py-5 px-5 sm:px-10'>
            <p className='text-[18px] sm:text-[22px] font-bold'>Shop Medicines</p>
            <button
                onClick={() => setShowFilters(true)}
                className='lg:hidden flex items-center gap-2 bg-[#61AE38] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-[#4f9a2b] active:scale-95'
            >
                <FiFilter /> Filters
            </button>
        </div>

        <div className='flex m-auto w-[95%] sm:w-[90%] lg:w-[95%] gap-8  mt-6 lg:mt-10'>

            {/* Desktop sidebar */}
            <div className='hidden lg:flex w-[25%] flex-col gap-5 h-screen sticky top-0'>
                <AllCategories />
                <Pricerange />
            </div>

            <div className='w-full'>
                <Products />
            </div>
        </div>

        {/* Mobile filter drawer */}
        <div
            className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
                showFilters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            {/* backdrop */}
            <div
                className='absolute inset-0 bg-black/40'
                onClick={() => setShowFilters(false)}
            />
            {/* panel */}
            <div
                className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-5 flex flex-col gap-5 overflow-y-auto transition-transform duration-300 ease-out ${
                    showFilters ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='flex justify-between items-center'>
                    <p className='text-[18px] font-bold'>Filters</p>
                    <button
                        onClick={() => setShowFilters(false)}
                        className='text-[22px] transition-transform duration-200 hover:rotate-90 active:scale-90'
                        aria-label="Close filters"
                    >
                        <FiX />
                    </button>
                </div>
                {/* Auto-close drawer as soon as a category is picked */}
                <AllCategories onSelect={() => setShowFilters(false)} />
                <Pricerange />
                <button
                    onClick={() => setShowFilters(false)}
                    className='bg-[#61AE38] text-white py-2 rounded-full font-semibold mt-2 transition-all duration-200 hover:bg-[#4f9a2b] active:scale-95'
                >
                    Apply Filters
                </button>
            </div>
        </div>

        <style>{`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .animate-fade-in {
                animation: fade-in 0.4s ease-out both;
            }
        `}</style>
    </div>
  )
}

export default Shop