import React, { useContext } from 'react'
import { Usercontext } from '../../Context/Usercontext'
import Products from '../Shop/Products'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { motion } from "framer-motion"

const TrendingProduct = () => {
    const { AddCartProduct, loading, Productidpage, newdata, SetOpenlogin, islogin } = useContext(Usercontext)
    const trendingProducts = newdata.slice(0, 4);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="w-12 h-12 border-4 border-[#61AE38] border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-500 font-medium">
                    Please wait, products are loading...
                </p>
            </div>
        );
    }

    return (
        <>
            <p className="text-3xl font-semibold">Trending Now</p>

            <div className=" grid gap-10 py-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
                {newdata.slice(0, 4).map((item) => {
                    return (
                        <>
                            <motion.div initial={{ y: 100, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="shadow rounded-xl" onClick={() => { Productidpage(item._id), window.scrollTo(0, 0) }}>
                                <Link to={`/detail/${item._id}`} onClick={() => window.scrollTo(0, 0)}>
                                    <div className="m-auto h-45 bg-gray-50 p-4 rounded-md overflow-hidden flex items-center justify-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                                        />
                                    </div>
                                </Link>

                                <div className='p-4  pb-5 pt-3 flex flex-col gap-1'>
                                    <p className='font-semibold text-[10px] sm:text-[11px] uppercase text-gray-500'>{item.category}</p>
                                    <p className='leading-5 font-semibold text-[15px] sm:text-[18px] truncate'>{item.name}</p>
                                    <p className='text-xs sm:text-sm text-gray-500 truncate'>{item.Subcategory}</p>
                                    <div className='flex items-center mt-3 sm:mt-5 justify-between'>
                                        <p className='text-[15px] sm:text-[18px] font-bold mt-2'>₹{item.price}</p>

                                        {islogin === "loggedin" ?
                                            (<Link
                                                to="/cart"
                                                onClick={(e) => { AddCartProduct(item._id), window.screenTop(0, 0) }}
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
                        </>
                    )
                })}
            </div>
            {/* <Products products={newdata.slice(0, 4)} /> */}
        </>
    )
}

export default TrendingProduct
