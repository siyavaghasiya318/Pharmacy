import React, { useContext } from 'react'
import { Usercontext } from '../../Context/Usercontext'
import { FiShoppingCart } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();

    const { AddCartProduct,Addproduct, DecreaseQty, FetchCart } = useContext(Usercontext)

    
    
     const ShowDetail = Addproduct.find((data) => data._id == id) 
     const qty = FetchCart.find((val) => val?._id == ShowDetail?._id)
     
    return (
        <div className='px-4 sm:px-6 lg:px-10 py-6 sm:py-10 text-[#427C23]/90 animate-fade-in'>
            <div>
                <p className='text-xs sm:text-sm text-gray-500'>Home/Shop/{ShowDetail?.category} {ShowDetail?.name}</p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-6 lg:mt-10'>
                    {/* Image */}
                    <div className="bg-white shadow-sm m-auto rounded-2xl pt-5 sm:pt-7 w-full h-full animate-slide-up opacity-0" style={{ animationDelay: '0ms' }}>
                        <div className='rounded-xl m-auto items-center w-full max-w-[280px] sm:max-w-[340px] lg:w-100 lg:h-100 aspect-square overflow-hidden bg-[#61AE38]/10'>
                            <img
                                src={ShowDetail?.image}
                                className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                                alt={ShowDetail?.name}
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className='px-5 sm:px-8 lg:px-10 py-8 sm:py-15 flex flex-col bg-[#61AE38]/3 rounded-2xl gap-4 sm:gap-5 animate-slide-up opacity-0' style={{ animationDelay: '80ms' }}>

                        <div className="flex flex-wrap gap-3 sm:gap-10">
                            <p className='bg-[#63e91b]/20 w-fit px-5 py-1 rounded-full font-semibold text-sm text-[#44af0a] transition-transform duration-200 hover:scale-105'>{ShowDetail?.category}</p>
                            <p className='bg-gray-100 w-fit px-5 py-1 rounded-full font-semibold text-sm text-gray-500 uppercase transition-transform duration-200 hover:scale-105'>{ShowDetail?.brandname}</p>
                        </div>

                        <div className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold">{ShowDetail?.name}</div>

                        <div className="flex items-center font-semibold text-sm gap-5 lg:pe-10">
                            {ShowDetail?.description}
                        </div>

                        <div className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold">₹{ShowDetail?.price}</div>

                        <div className="bg-[#44af0a]/3 font-semibold text-[#427C23]/80 p-4 sm:p-5 rounded-xl">{ShowDetail?.Subcategory}</div>

                        <div className="flex  sm:flex-row gap-4 sm:gap-5">
                            <div className="flex font-semibold  justify-between w-50 sm:w-[50%] px-6 sm:px-8 py-2 sm:py-0 items-center bg-gray-50 border rounded-md">
                                <button
                                    onClick={() => DecreaseQty(ShowDetail?._id)}
                                    className='px-2  transition-transform duration-150 hover:scale-125 hover:text-red-500 active:scale-90'
                                >
                                    -
                                </button>
                                <p className='transition-all duration-200'>{qty?.quentity ? qty?.quentity : 1}</p>
                                <button
                                    onClick={() => AddCartProduct(ShowDetail?._id)}
                                    className='px-2 transition-transform duration-150 hover:scale-125 hover:text-[#427C23] active:scale-90'
                                >
                                    +
                                </button>
                            </div>
                            <div className="w-full">
                                <Link
                                    to='/cart'
                                    className="bg-[#61AE38] justify-center py-3 sm:py-2 w-full text-white text-[20px] sm:text-[22px] rounded-md flex gap-2 items-center font-semibold transition-all duration-300 hover:bg-[#4f9a2b] hover:shadow-lg hover:shadow-[#61AE38]/40 active:scale-[0.98]"
                                >
                                    <FiShoppingCart className='transition-transform duration-200' />
                                    <p className='text-[16px] sm:text-[20px]'>Add to Cart</p>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='px-5 sm:px-10 bg-[#61AE38]/3 rounded-xl py-5 mt-8 sm:mt-10 animate-slide-up opacity-0' style={{ animationDelay: '160ms' }}>
                <p className='text-[20px] sm:text-[25px] font-bold'>Description</p>
                <p className='mt-3 text-sm sm:text-base leading-relaxed'>{ShowDetail?.longdescription}</p>
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
                    animation: fade-in 0.4s ease-out both;
                }
                .animate-slide-up {
                    animation: slide-up 0.45s ease-out forwards;
                }
            `}</style>
        </div>
    )
}

export default ProductDetail