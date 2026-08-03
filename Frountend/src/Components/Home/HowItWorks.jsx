import React from 'react'
import { howItWorksData } from '../../assets/List';
import { motion } from "framer-motion"

const HowItWorks = () => {
    return (
        <>
            <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.5}} className="flex flex-col py-20 px-4 sm:px-6 lg:px-8 text-gray-700 gap-2">
                <div className="text-center font-bold text-2xl sm:text-3xl">Ordering Made Simple</div>
                <p className="text-center w-full max-w-2xl flex flex-col m-auto">Getting your healthcare essentials has never been easier. Follow these three simple steps.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8">
                {howItWorksData.map((item) => {
                    const Icon = item.icon;

                    return (
                        <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.5}} key={item.id} className="relative  text-center">
                            <span className="absolute hidden md:block -top-3 left-1/2 -translate-x-1/2 text-3xl font-bold text-gray-100">
                                {item.step}
                            </span>

                            <div
                                className={`w-18 h-18 sm:w-20 sm:h-20 mx-auto rounded-full shadow-lg border ${item.borderColor} bg-white flex items-center justify-center`}
                            >
                                <div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${item.iconBg}`}
                                >
                                    <Icon className={`text-2xl ${item.iconColor}`} />
                                </div>
                            </div>

                            <h3 className="mt-8 text-xl sm:text-2xl font-bold text-slate-800">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-gray-500 leading-7">
                                {item.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </>
    )
}

export default HowItWorks