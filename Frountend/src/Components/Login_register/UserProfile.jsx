import React, { useState } from 'react'
import { useContext } from 'react'
import { Usercontext } from '../../Context/Usercontext'
import { LuUser } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { IoMdAdd } from "react-icons/io";
import { LuBox } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";

function UserProfile() {
    const { getprofile, Userlogout, ShowAddress, OrderHistory } = useContext(Usercontext)

    const [isActive, setIsActive] = useState("profile")

    const menuItems = [
        { key: "profile", label: "My Profile", icon: <LuUser className='mt-1 text-[18px]' /> },
        { key: "address", label: "My Address", icon: <SlLocationPin className='mt-1 text-[18px]' /> },
        { key: "order", label: "My Order", icon: <LuBox className='mt-1 text-[18px]' /> },
        { key: "settings", label: "Setting", icon: <IoSettingsOutline className='mt-1 text-[18px]' /> },
    ]
    console.log("OrderHistory", OrderHistory);


    const total = OrderHistory?.item?.reduce((acc, item) => acc + item.totalPrice, 0)
    const tax = OrderHistory?.item?.reduce((acc, item) => acc + item.tax, 0)
    // console.log(total);


    return (
        <div className='w-[95%] mt-6 lg:mt-10 flex flex-col lg:flex-row gap-6 lg:gap-10 m-auto animate-fade-in'>
            <div className='w-full lg:w-[32%]'>
                <p className='text-[24px] sm:text-[30px] font-bold'>My Account</p>
                <div className="rounded-xl p-4 bg-[#f9fdfc] mt-6 lg:mt-8 shadow-sm lg:sticky lg:top-5">

                    <div className='flex items-center gap-3 border-b border-gray-200 pb-5'>
                        <p className='rounded-full px-5 py-3 bg-[#E1ECDB] font-bold shrink-0'>{getprofile?.firstname?.charAt(0)}</p>
                        <div className='min-w-0'>
                            <p className='font-semibold truncate'>{getprofile?.firstname}</p>
                            <p className="text-sm truncate">{getprofile?.email}</p>
                        </div>
                    </div>

                    <div className='text-[16px] sm:text-[17px] px-2 sm:px-4 py-6 sm:py-8'>
                        <ul className='list-none flex flex-col gap-2 sm:gap-3 no-underline'>
                            {menuItems.map((item) => (
                                <li
                                    key={item.key}
                                    onClick={() => setIsActive(item.key)}
                                    className={`flex items-center gap-4 py-2 px-4 rounded-xl cursor-pointer transition-all duration-200 ${isActive === item.key
                                            ? 'bg-[#e1ecdb] text-[#2e6e0b] font-semibold'
                                            : 'hover:bg-gray-100'
                                        }`}
                                >
                                    {item.icon}{item.label}
                                </li>
                            ))}
                            <hr className='text-gray-200 mt-2' />
                            <Link to='/'>
                                <li onClick={Userlogout} className='flex gap-2 ms-5 py-2 px-4 rounded-xl cursor-pointer transition-colors duration-200 hover:bg-red-50 hover:text-red-500 w-fit'>
                                    <p><LuLogOut className='mt-1 text-[18px]' /></p>
                                    <p>Logout</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

            {isActive == "profile" ? (
                <div key="profile" className='w-full animate-fade-in-content'>
                    <div className="bg-[#f9fdfc] p-5 sm:p-8 lg:mt-20 rounded-xl shadow-sm">
                        <p className='text-[18px] sm:text-[20px] font-bold'>Personal Information</p>
                        <form className="mt-5 flex flex-col gap-5">
                            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">

                                <div className='w-full'>
                                    <label className='text-[13px] uppercase font-semibold' htmlFor="">First Name</label>
                                    <div className="border py-2 px-5 mt-1 rounded-lg border-gray-200 truncate">{getprofile?.firstname}</div>
                                </div>

                                <div className='w-full'>
                                    <label className='text-[13px] uppercase font-semibold' htmlFor="">Last Name</label>
                                    <div className="border py-2 px-5 mt-1 rounded-lg border-gray-200 truncate">{getprofile?.lastname}</div>
                                </div>

                            </div>

                            <div>
                                <label htmlFor="" className='text-[13px] uppercase font-semibold'>Date of Birth</label>
                                <p className='border py-2 px-5 mt-1 rounded-lg border-gray-200'>{getprofile?.dateofbirth}</p>
                            </div>

                            <div className='w-full sm:w-103'>
                                <label className='text-[13px] uppercase font-semibold' htmlFor="">Email</label>
                                <div className="border py-2 px-5 mt-1 rounded-lg border-gray-200 truncate">{getprofile?.email}</div>
                            </div>
                        </form>
                    </div>
                </div>
            ) : isActive == "address" ? (
                <div key="address" className='w-full bg-[#f9fdfc] p-5 sm:p-8 lg:mt-20 rounded-xl shadow-sm animate-fade-in-content'>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
                        <p className="text-[18px] sm:text-[20px] font-bold">My Address</p>
                        <Link to='/address' className='w-fit'>
                            <p className="bg-[#61AE38] rounded-lg px-6 py-2 flex items-center gap-3 text-white font-bold transition-all duration-200 hover:bg-[#4f9a2b] hover:shadow-md active:scale-95">
                                <IoMdAdd className='text-[20px]' />Add New Address
                            </p>
                        </Link>
                    </div>

                    <div className="flex flex-col gap-5 mt-8 sm:mt-10">
                        {ShowAddress.map((item, index) => {
                            return (
                                <div
                                    key={item._id || index}
                                    style={{ animationDelay: `${index * 60}ms` }}
                                    className="animate-slide-up opacity-0 border border-[#c4f4aa] bg-[#dffcd01b] flex flex-col sm:flex-row gap-5 justify-between rounded-md p-5 transition-shadow duration-300 hover:shadow-md"
                                >
                                    <div className="flex gap-4 sm:gap-5">
                                        <div className='shrink-0'><div className="bg-[#dff9d0] text-[20px] rounded-full p-2"><IoLocationOutline /></div></div>

                                        <div className="flex flex-col gap-2 sm:pe-20 lg:pe-40 min-w-0">
                                            <p className="text-sm capitalize">{getprofile?.firstname} {getprofile?.lastname}</p>
                                            <p className="text-sm capitalize break-words">{item.address} , {item.city} , {item.country}</p>
                                            <div className="text-sm">Phone no: {item.phoneno}</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 sm:gap-5 items-center shrink-0">
                                        <div className="flex items-center text-[#61AE38] gap-2 border border-[#61AE38] px-3 py-1 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#61AE38] hover:text-white">
                                            <p><FiEdit2 /></p>
                                            <p>Edit</p>
                                        </div>
                                        <div className="border px-2 text-red-400 border-red-300 py-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-red-400 hover:text-white active:scale-90">
                                            <RiDeleteBin6Line />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (

                <div key="order" className="w-full lg:my-20 animate-fade-in-content">
                    <div className="w-full">
                        <div className='text-[18px] sm:text-[20px] font-bold w-full'>Order History</div>
                        <div className="flex flex-col gap-5 mt-5">
                            {OrderHistory?.map((val, oIndex) => {
                                
                                
                                return (
                                    <div
                                        key={val?._id || oIndex}
                                        style={{ animationDelay: `${oIndex * 60}ms` }}
                                        className='animate-slide-up opacity-0 bg-[#f9fdfc] rounded-lg py-5 px-4 sm:px-6 shadow-sm transition-shadow duration-300 hover:shadow-md'
                                    >
                                        <div className='font-semibold text-[16px] sm:text-[18px] flex flex-wrap items-center gap-3 sm:gap-4'>
                                            Order : #{val?._id.slice(0, 10)}...
                                            <p className='text-sm bg-[#D0F8BA] px-4 py-1 rounded-full'>{val?.orderStatus}</p>
                                        </div>
                                        <div className='text-[#9ca099] text-sm mt-1'>Placed On {new Date(val?.orderDate).toLocaleDateString()}</div>

                                        <div>
                                            {val?.item?.map((item, itemIndex) => {
                                                return (
                                                    <div key={itemIndex}>
                                                        <div className='flex items-center gap-4 py-5 sm:py-6'>
                                                            <div className='bg-[#e8eae66a] p-3 rounded-md shrink-0'>
                                                                <div className='p-2 text-sm rounded-sm bg-[#cdeebba6]'><BsBoxSeam /></div>
                                                            </div>
                                                            <div className='min-w-0'>
                                                                <p className='truncate'>{item.productid.name}</p>
                                                                <p className='text-[12px] text-[#9ca099]'>Qty: {item.quentity} x ₹ {item.productid.price}</p>
                                                            </div>
                                                        </div>

                                                        <div className='flex justify-between items-center text-sm sm:text-base'>
                                                            Total Amount
                                                            <p>₹ {item.totalPrice}</p>
                                                        </div>

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <p className="">{total}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fade-in-content {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(14px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.4s ease-out both;
                }
                .animate-fade-in-content {
                    animation: fade-in-content 0.35s ease-out both;
                }
                .animate-slide-up {
                    animation: slide-up 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    )
}

export default UserProfile