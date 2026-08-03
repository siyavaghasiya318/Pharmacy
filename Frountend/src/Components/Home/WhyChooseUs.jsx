import React from 'react'
import { whyChoosePharmOn } from '../../assets/List'
import { motion } from "framer-motion"

const WhyChooseUs = () => {
    return (
        <>
            <div  className="py-10 px-4 sm:px-6 lg:px-8">
                <motion.div initial={{y:100}} viewport={{ once: true }} whileInView={{y:0}} transition={{duration:0.5}}  className="flex flex-col py-10 gap-2">
                    <div className="text-center font-bold text-2xl sm:text-3xl ">Why Choose PharmOn</div>
                    <p className="text-center w-full max-w-2xl flex flex-col m-auto">Experience the most reliable healthcare delivery service with a focus on trust, speed, and quality.</p>
                </motion.div>

                <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 text-gray-700">
                    {whyChoosePharmOn.map((item, index) => {
                        return(
                            <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} key={index} className="p-8 bg-white rounded-2xl flex flex-col gap-2">
                                <div className={`p-5 bg-gray-50 ${item.color} ${item.bgColor} rounded-lg text-3xl w-fit flex flex-col`}>
                                    <i>{item.icon}</i>
                                </div>
                                <p className="text-xl font-bold">{item.title}</p>
                                <div className="text-sm w-full">{item.description}</div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs