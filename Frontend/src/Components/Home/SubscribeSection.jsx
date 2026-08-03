import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion"

const SubscribeSection = () => {
    return (
        <motion.div initial={{y:100}} viewport={{ once: true }} whileInView={{y:0}} transition={{duration:0.5}} className="bg-[#374151] rounded-[40px] px-5 py-20 md:p-28 my-25">
            <motion.div initial={{y:100}} viewport={{ once: true }} whileInView={{y:0}} transition={{duration:0.5}} className='w-full md:w-130 text-white flex flex-col text-center justify-center  gap-3  m-auto'>
                <i className='bg-gray-600 text-3xl p-4 w-fit rounded-lg flex flex-colr m-auto'><MdOutlineEmail /></i>
                <p className="text-3xl font-bold">Subscribe to Health Updates</p>
                <p className="text-gray-400">Get expert health tips, exclusive offers, and latest product updates delivered straight to your inbox.</p>

                <div className="md:flex gap-5 w-full items-center m-auto mt-5">
                    <div className="w-full"><input className="bg-gray-600 border w-full border-gray-500 py-4 px-8 rounded-lg outline-0" placeholder='Enter your email'></input></div>
                    <button className='bg-[#61AE38] w-full mt-3 md:mt-0 capitalize px-8 py-4 font-bold  rounded-lg'>join now</button>
                </div>
                <p className="text-xs my-4 text-gray-400">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
            </motion.div>
        </motion.div>
    )
}

export default SubscribeSection
