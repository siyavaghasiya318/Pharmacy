import React, { useContext } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Usercontext } from '../../Context/Usercontext';

function AddAddress({ onClose }) {
    const { AddressSubmit, AddressChange, AddressForm } = useContext(Usercontext)

    return (
        <div className="fixed inset-0 bg-black/40 flex backdrop-blur-[5px] items-center justify-center z-50 p-4 animate-backdrop-fade">
            <div className="bg-white w-full sm:w-115 max-w-full rounded-xl max-h-[90vh] overflow-y-auto animate-modal-in">

                <div className="flex justify-between items-center px-5 py-3">

                    <div className="bg-[#FCFCFD] text-[16px] sm:text-[18px] font-bold flex items-center gap-2">
                        <p><IoLocationSharp className='mt-1' /></p>
                        Add New Address
                    </div>

                    <button
                        onClick={onClose}
                        className="text-[20px] text-[#b6ccaa] transition-all duration-200 hover:text-red-400 hover:rotate-90"
                        aria-label="Close"
                    >
                        <IoCloseSharp />
                    </button>

                </div>

                <hr />

                <div className="m-auto justify-center flex flex-col">
                    <form action="" className='w-full px-5 py-5' onSubmit={AddressSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                            <div className="w-full">
                                <p className='text-sm mb-1'>Street Address</p>
                                <input
                                    type="text"
                                    name='address'
                                    value={AddressForm.address}
                                    onChange={AddressChange}
                                    placeholder='Flat, House no, Building'
                                    className='border rounded-md border-[#bde0ab] px-2 py-2 w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#61AE38]/40'
                                />
                            </div>

                            <div className="w-full">
                                <p className='text-sm mb-1'>City</p>
                                <input
                                    type="text"
                                    name='city'
                                    value={AddressForm.city}
                                    onChange={AddressChange}
                                    placeholder='city/town'
                                    className='border rounded-md border-[#bde0ab] px-2 py-2 w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#61AE38]/40'
                                />
                            </div>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-3">

                            <div className="w-full">
                                <p className='text-sm mb-1'>Postal Code</p>
                                <input
                                    type="number"
                                    name='pincode'
                                    value={AddressForm.pincode}
                                    onChange={AddressChange}
                                    placeholder='Pincode'
                                    className='border rounded-md border-[#bde0ab] px-2 py-2 w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#61AE38]/40'
                                />
                            </div>

                            <div className="w-full">
                                <p className='text-sm mb-1'>Country</p>
                                <input
                                    type="text"
                                    name='country'
                                    value={AddressForm.country}
                                    onChange={AddressChange}
                                    placeholder='city/town'
                                    className='border rounded-md border-[#bde0ab] px-2 py-2 w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#61AE38]/40'
                                />
                            </div>

                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:gap-5 mt-3">

                            <div className="w-full">
                                <p className='text-sm mb-1'>Contact</p>
                                <input
                                    type="tel"
                                    name='phoneno'
                                    value={AddressForm.phoneno}
                                    onChange={AddressChange}
                                    placeholder='+91 99056 78567'
                                    className='border rounded-md border-[#bde0ab] px-2 py-2 w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#61AE38]/40'
                                />
                            </div>

                        </div>

                        <button
                            type='submit'
                            className='bg-[#61AE38] mt-5 text-white font-semibold px-12 rounded-lg py-2 w-full sm:w-auto transition-all duration-300 hover:bg-[#4f9a2b] hover:shadow-lg hover:shadow-[#61AE38]/30 active:scale-95'
                        >
                            Save Address
                        </button>

                    </form>
                </div>
            </div>

            <style>{`
                @keyframes backdrop-fade {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes modal-in {
                    from { opacity: 0; transform: translateY(16px) scale(0.97); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-backdrop-fade {
                    animation: backdrop-fade 0.25s ease-out both;
                }
                .animate-modal-in {
                    animation: modal-in 0.3s ease-out both;
                }
            `}</style>
        </div>
    )
}

export default AddAddress