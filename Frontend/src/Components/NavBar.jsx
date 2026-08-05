import React, { useContext, useState } from 'react'
import { AiOutlineMedicineBox } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom';
import UserLogin from './Login_register/UserLogin';
import { Usercontext } from '../Context/Usercontext';
import Userregister from './Login_register/Userregister';

function NavBar() {
    const { islogin, Setislogin, OpenLogin, SetOpenlogin, SetShowProfile, ShowProfile, FetchCart, GetCartProducts, getprofile } = useContext(Usercontext)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinkClass = ({ isActive }) =>
        `relative pb-1 transition-colors duration-200 hover:text-[#427C23]  after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-[#427C23] after:transition-all after:duration-300 ${
            isActive ? 'text-[#427C23] after:w-full' : 'after:w-0 hover:after:w-full'
        }`

    return (
        <div className='top-0  sticky bg-white z-10 shadow-sm'>
            <div className='flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4'>
                <div className='flex items-center gap-2 sm:gap-3'>
                    <p className='text-[24px] sm:text-[30px] rounded-lg bg-[#6a9f4d]/20 text-green-800 p-2 transition-transform duration-300 hover:scale-110 hover:rotate-6'><AiOutlineMedicineBox /></p>
                    <p className='text-[20px] sm:text-[25px] text-[#2e6e0b]/90 font-bold'>Pharm<span>On</span></p>
                </div>

                {/* Desktop nav links */}
                <div className='hidden lg:flex gap-8 font-semibold text-[17px]'>
                    <NavLink to='/' className={navLinkClass}>Home</NavLink>
                    <NavLink to='/shop' className={navLinkClass}>Shop</NavLink>
                    <NavLink to='/contact' className='relative pb-1 cursor-pointer transition-colors duration-200 hover:text-[#427C23] after:content-[\] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-[#427C23] after:w-0 hover:after:w-full after:transition-all after:duration-300'>Contact</NavLink>
                </div>

                <div className='flex gap-4 sm:gap-6 lg:gap-8 items-center'>
                    <NavLink to='/cart' className='text-[22px] sm:text-[25px] relative pe-[12px] sm:pe-[15px] pt-1 transition-transform duration-200 hover:scale-110'>
                        <FiShoppingCart />
                        <div className='bg-[#61AE38] text-white px-1 rounded-full top-0 right-0 absolute transition-transform duration-300' key={FetchCart.length}>
                            <p className='text-[12px] font-bold animate-pop'>{FetchCart.length}</p>
                        </div>
                    </NavLink>

                    {/* Desktop auth */}
                    <div className='hidden sm:block '>
                        {islogin === "loggedin" ? (
                            <Link to='/profile' className='bg-[#63e91b]/30  flex flex-col justify-center items-center w-10 h-10  text-[#2E6E0B]/80 m-auto  font-bold rounded-full transition-all duration-200 hover:bg-[#63e91b]/50 hover:scale-105 '>
                                {getprofile?.firstname?.charAt(0)}
                            </Link>
                        ) : (
                            <div className='text-white bg-[#61ae38]  rounded-full shadow-sm py-2 px-5 transition-all duration-300 hover:bg-[#4f9a2b] hover:shadow-md'>
                                <button onClick={() => SetOpenlogin(true)} className='flex gap-3 items-center'>
                                    <FaUser className='text-[14px]' />
                                    <span className='font-bold text-[15px]'>Login / Join</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className='lg:hidden text-[26px] text-[#2e6e0b]/90 transition-transform duration-200 active:scale-90'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='flex flex-col gap-4 font-semibold text-[16px] px-6 pb-5 border-t border-gray-100 pt-4'>
                    <NavLink to='/' onClick={() => setMobileMenuOpen(false)} className='transition-colors duration-200 hover:text-[#427C23]'>Home</NavLink>
                    <NavLink to='/shop' onClick={() => setMobileMenuOpen(false)} className='transition-colors duration-200 hover:text-[#427C23]'>Shop</NavLink>
                    <NavLink to='/contact' className='cursor-pointer transition-colors duration-200 hover:text-[#427C23]'>Contact</NavLink>

                    <div className='sm:hidden mt-2'>
                        {islogin === "loggedin" ? (
                            <Link to='/profile' onClick={() => setMobileMenuOpen(false)} className='bg-[#63e91b]/30 text-[#2E6E0B]/80 py-2 px-4 font-bold rounded-full w-fit inline-block transition-all duration-200 hover:bg-[#63e91b]/50'>
                                {getprofile?.firstname?.charAt(0)}
                            </Link>
                        ) : (
                            <div className='text-white bg-[#61ae38] px-5 rounded-full shadow-sm py-2 w-fit transition-all duration-300 hover:bg-[#4f9a2b]'>
                                <button
                                    onClick={() => { SetOpenlogin(true); setMobileMenuOpen(false) }}
                                    className='flex gap-3 items-center'
                                >
                                    <FaUser className='text-[14px]' />
                                    <span className='font-bold text-[15px]'>Login / Join</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {OpenLogin && (
                islogin === "login" ? (
                    <UserLogin
                        SetOpenlogin={SetOpenlogin}
                        Setislogin={Setislogin}
                    />
                ) : (
                    <Userregister
                        SetOpenlogin={SetOpenlogin}
                        Setislogin={Setislogin}
                    />
                )
            )}

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes pop {
                    0% { transform: scale(0.6); }
                    60% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 0.4s ease-out both;
                }
                .animate-pop {
                    animation: pop 0.3s ease-out;
                }
            `}</style>
        </div>
    )
}

export default NavBar
