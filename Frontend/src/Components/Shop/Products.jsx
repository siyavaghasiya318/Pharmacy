import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Usercontext } from '../../Context/Usercontext'
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion"

function Products() {
  const { AddCartProduct, newdata, SetOpenlogin, islogin } = useContext(Usercontext)

  return (
    <div className='grid gap-5 sm:gap-6 lg:gap-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 pb-10'>
      {newdata.map((item, index) => {
        return (
          <motion.div
            key={item._id}
            initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} 
            
            style={{ animationDelay: `${index * 50}ms` }}
            className='animate-pop-in opacity-0 bg-white shadow-sm rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
          >
            
    
            <Link to={`/detail/${item._id}`} >
              <div className="m-auto h-30 bg-gray-50 mt-2 rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Link>

            <div className='px-4 sm:px-6 lg:px-8 pb-5 pt-3 flex flex-col gap-1'>
              <p className='font-semibold text-[10px] sm:text-[11px] uppercase text-gray-500'>{item.category}</p>
              <p className='leading-5 font-semibold text-[15px] sm:text-[18px] truncate'>{item.name}</p>
              <p className='text-xs sm:text-sm text-gray-500 truncate'>{item.Subcategory}</p>
              <div className='flex items-center mt-3 sm:mt-5 justify-between'>
                <p className='text-[15px] sm:text-[18px] font-bold mt-2'>₹{item.price}</p>

                {islogin === "loggedin" ?
                  (<Link
                    to="/cart"
                    onClick={() => {  AddCartProduct(item._id), window.screenTop(0, 0) }}
                    className='text-[17px] sm:text-[20px] bg-[#e5f3e1] rounded-sm p-2 transition-all duration-200 hover:bg-[#61AE38] hover:text-white active:scale-90'>
                    <FiShoppingCart />
                  </Link>) :
                  (<div
                    onClick={() => SetOpenlogin(true)}
                    className='text-[17px] sm:text-[20px] bg-[#e5f3e1] rounded-sm p-2 transition-all duration-200 hover:bg-[#61AE38] hover:text-white active:scale-90'>
                    <FiShoppingCart />
                  </div>)
                }
              </div>
            </div>
          </motion.div>
        )
      })}

      <style>{`
        @keyframes pop-in {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-pop-in {
          animation: pop-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Products
