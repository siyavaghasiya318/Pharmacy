import React, { useContext } from 'react'
import {
  FaPills,
  FaHandsBubbles,
  FaLeaf,
  FaBabyCarriage,
  FaSeedling,
  FaKitMedical,
  FaSprayCanSparkles
} from "react-icons/fa6";
import { BsGrid } from "react-icons/bs";
import { Usercontext } from '../../Context/Usercontext';


function AllCategories() {
    const{Setdata} = useContext(Usercontext)

    const category = [
        { name: "All", icon: <BsGrid /> },
        { name: "Medicine", icon: <FaPills /> },
        { name: "Personal Care", icon: <FaHandsBubbles /> },
        { name: "Skin Care", icon: <FaSprayCanSparkles /> },
        { name: "Baby Care", icon: <FaBabyCarriage /> },
        { name: "Ayurvedic Care", icon: <FaLeaf /> },
        { name: "Oracle Care", icon: <FaSeedling /> },
        { name: "First Aid", icon: <FaKitMedical /> },
    ];

    return (
        <div className="rounded-lg bg-[#f5f9f4] p-5">
            <p className="text-[18px] font-semibold mb-3 text-[#2e6e0b]">
                Categories
            </p>

            <ul className="flex flex-col gap-1">
                {category.map((item) => (
                    <li
                        key={item.name}
                        onClick={() => {Setdata(item.name)}}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-600 hover:bg-white hover:text-[#427C23] transition-all duration-200"
                    >
                        <span className="text-gray-400 text-[16px]">
                            {item.icon}
                        </span>

                        <span className="text-[15px]">
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllCategories