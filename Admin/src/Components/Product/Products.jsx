import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";
import { admincontext } from '../../UserContex'

function Products() {
  const{GetProduct,UpdateProduct,ProductDelete} = useContext(admincontext)
  return (
    <div className='p-10'>
      <div className='flex items-center  justify-between'>
        <div>
          <p className='font-bold text-[25px]'>Products</p>
          <p>Manage your product inventory ({GetProduct.length})</p>
        </div>

        <Link to='/addproduct'><button className='bg-[#6a9f4d]/20 px-10 py-2 font-semibold font-[18px] rounded-md'>Add New Product</button></Link>

      </div>

      <div className='border border-[#6a9f4d]/20 rounded-lg overflow-hidden  flex flex-col gap-5 mt-10'>
        <div className='flex bg-[#ecf8e6] py-2 px-5 text-sm uppercase'>Products</div>
        
        <div className='flex flex-col gap-5 p-5'>
          {GetProduct.map((item) => {
          return(
            <>
              <div className='grid grid-cols-2 py-2 shadow-sm px-5 h-20 overflow-auto'>

                <div className='flex items-center gap-5'>
                  <div className='w-12 h-12'><img src={item.image} className='w-full h-full' alt="" /></div>
                  <div className='text-[14px] '>
                    <p>{item.name}</p>
                    <p>{item.Subcategory}</p>
                  </div>
                </div>
                
                <div className='grid grid-cols-4 text-[14px] items-center w-full justify-between'>
                  
                  <div className="col-span-3 ">
                    <div className="grid grid-cols-3 justify-between">
                    <div className=' bg-[#edf7ed] px-4 py-1 m-auto  rounded-full'>{item.category}</div>
                    <div className='text-[15px] font-semibold m-auto'>₹ {item.price}</div>
                    <div className='bg-[#edf7ed] px-2 font-semibold uppercase text-[12px] m-auto leading-4 py-1'>{item.stock} In<br /> Stock</div>
                  </div>
                  </div>

                  <div className="flex gap-5 items-center justify-end text-[20px]">

                    <div onClick={()=> UpdateProduct(item)}><FiEdit /></div>
                    <div onClick={() => ProductDelete(item._id)}><RiDeleteBin4Line /></div>
                    
                  </div>

                </div>
                
              </div>
            </>
          )
          })}
        </div>

      </div>
    </div>
  )
}

export default Products