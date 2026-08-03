import React, { useContext } from 'react'
import { Usercontext } from '../../Context/Usercontext'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';

function CartProducts() {
    const { FetchCart, DecreaseQty, AddCartProduct, RemoveCartproduct, navigate } = useContext(Usercontext)

    const total = FetchCart.reduce((acc, item) => acc + item.totalPrice, 0)
    const tax = FetchCart.reduce((acc, item) => acc + item.tax, 0)

    return (
        <>

        <div className="px-4 sm:px-8 lg:px-20  font-bold md:text-2xl mt-6 lg:mt-10 sm:text-xl text-xl lg:text-3xl flex gap-2 items-center">Shoping Cart ({FetchCart.length} items)</div>
        <div className='px-4 sm:px-8 lg:px-20 py-8 lg:py-15  animate-fade-in'>
            {FetchCart.length > 0 ? (
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-20'>
                    {/* Cart items list */}
                    <div className='flex flex-col w-full gap-4 lg:gap-5'>
                        {FetchCart.map((item, index) => {
                            return (
                                <div
                                    key={item._id}
                                    style={{ animationDelay: `${index * 60}ms` }}
                                    className='animate-slide-up opacity-0 flex border-[#427C23]/30 rounded-xl  items-center gap-3 sm:gap-5 py-4 sm:py-5 px-3 sm:px-5 transition-all shadow duration-300 hover:shadow-lg hover:shadow-[#427C23]/10 hover:border-[#427C23]/60 hover:-translate-y-0.5'
                                >
                                    <Link to='/detail' className='shrink-0'>
                                        <div className='w-16 h-16 sm:w-20 sm:h-20 overflow-hidden  rounded-lg'>
                                            <img
                                                src={item.image}
                                                className='w-full h-full object-contain transition-transform duration-300 hover:scale-110'
                                                alt={item.name}
                                            />
                                        </div>
                                    </Link>
                                    <div className='w-full min-w-0'>
                                        <div className="flex justify-between items-start sm:items-center gap-2">
                                            <p className='font-semibold text-sm sm:text-base truncate'>{item.name}</p>
                                            <button
                                                onClick={() => RemoveCartproduct(item._id)}
                                                aria-label="Remove item"
                                                className='text-[#2E6E0B]/60 shrink-0 transition-all duration-200 hover:text-red-500 hover:scale-125 active:scale-90'
                                            >
                                                <RiDeleteBin5Line />
                                            </button>
                                        </div>
                                        <div className='text-gray-500 text-[13px] sm:text-[14px] font-semibold mt-1'>
                                            Price: ₹{item.price}
                                        </div>
                                        <div className="flex justify-between items-center mt-2 flex-wrap gap-2 ">
                                            <div className='flex gap-3 sm:gap-5 border border-gray-200 w-fit items-center px-3 sm:px-5 sm:py-1 bg-gray-100 rounded-md'>
                                                <button
                                                    onClick={() => AddCartProduct(item._id)}
                                                    className='transition-transform duration-150 hover:scale-125 hover:text-[#427C23] active:scale-90'
                                                >
                                                    +
                                                </button>
                                                <button className='transition-all duration-200 min-w-[1.2em] text-center'>
                                                    {item.quentity}
                                                </button>
                                                <button
                                                    onClick={() => DecreaseQty(item._id)}
                                                    className='transition-transform duration-150 hover:scale-125 hover:text-red-500 active:scale-90'
                                                >
                                                    -
                                                </button>
                                            </div>
                                            <div className='font-semibold text-sm sm:text-base transition-all duration-300'>
                                                ₹ {item.totalPrice.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Order summary */}
                    <div className='border w-full lg:w-150 rounded-xl p-5 border-[#427C23]/30 animate-slide-up opacity-0 lg:sticky lg:top-5 h-fit transition-shadow duration-300 hover:shadow-md'
                        style={{ animationDelay: `${FetchCart.length * 60 + 100}ms` }}
                    >
                        <div className='text-[18px] sm:text-[20px] font-bold'>Order Summary</div>

                        <div className="flex flex-col gap-4 sm:gap-5 mt-6 sm:mt-10">
                            <div className='flex justify-between items-center'>
                                <p>Subtotal</p>
                                <p>{total.toFixed(2)}</p>
                            </div>

                            <div className='flex justify-between items-center'>
                                <p>Shipping Estimate</p>
                                <p className='text-green-600'>Free</p>
                            </div>

                            <div className='flex justify-between items-center'>
                                <p>Tax Estimate (18%)</p>
                                <p>{tax.toFixed(2)}</p>
                            </div>
                            <hr className='mt-1 text-gray-200' />
                        </div>

                        <div className="flex justify-between mt-4 sm:mt-5 items-center">
                            <div className='font-bold'>Order Total</div>
                            <p className='text-[18px] sm:text-[20px] font-semibold'>₹ {total.toFixed(2)}</p>
                        </div>

                        <Link to='/order' onClick={() => window.scrollTo(0,0)}>
                            <button className='bg-[#61AE38] w-full text-white py-2 font-semibold text-[16px] sm:text-[20px] mt-8 sm:mt-15 rounded-md transition-all duration-300 hover:bg-[#4f9a2b] hover:shadow-lg hover:shadow-[#61AE38]/40 active:scale-[0.98]'>
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='animate-fade-in flex gap-3 flex-col bg-[#F7FDF7] w-full sm:w-4/5 md:w-1/2 mx-auto py-10 sm:py-15 px-6 rounded-2xl'>
                    <div className="text-[25px] mx-auto animate-bounce-slow"><FiShoppingBag /></div>
                    <div className='mx-auto text-[18px] sm:text-[20px] font-semibold'>Your cart is empty</div>
                    <p className='text-center px-2 sm:px-20'>
                        Looks like you haven't added anything to your cart yet. Browse our products to find what you need.
                    </p>
                    <Link to='/shop' onClick={() => window.scrollTo(0,0)} className='mx-auto'>
                        <button className='bg-[#61AE38] px-8 sm:px-10 py-2 w-fit font-semibold rounded-lg mx-auto text-white mt-5 transition-all duration-300 hover:bg-[#4f9a2b] hover:shadow-lg hover:shadow-[#61AE38]/40 hover:scale-105 active:scale-95'>
                            Start Shopping
                        </button>
                    </Link>
                </div>
            )}

            {/* Animation keyframes */}
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }
                .animate-fade-in {
                    animation: fade-in 0.4s ease-out both;
                }
                .animate-slide-up {
                    animation: slide-up 0.45s ease-out forwards;
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
            `}</style>
        </div>
        </>
    )
}

export default CartProducts
