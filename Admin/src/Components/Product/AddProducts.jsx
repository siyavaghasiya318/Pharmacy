import React, { useRef } from 'react'
import { useContext } from 'react';
import { FiBox } from "react-icons/fi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { TbPhoto } from "react-icons/tb";
import { TbUpload } from "react-icons/tb";
import { admincontext } from '../../UserContex';
import { LiaSpinnerSolid } from "react-icons/lia";
import { MdOutlineLaunch } from "react-icons/md";


function AddProducts() {
  const { prev, handleimg, ProductSubmit, ProductChange, ProductForm, load } = useContext(admincontext)
  const imgref = useRef(null)
  return (
    <div className='text-[#2e6e0b] p-10'>
      <div className='text-2xl font-bold text-[#2e6e0b]'>Add New Products</div>
      <p>Create a professional listing with dynamic fields</p>

      <div className='grid grid-cols-3 gap-5'>
        <div className='rounded-lg p-8 col-span-2 shadow-xl '>

          <div className='flex items-center text-[14px]  font-semibold gap-3 uppercase'>
            <p className='bg-[#6a9f4d]/20 text-[18px] rounded-md p-2'><FiBox /></p>
            <p>Basic Information</p>
          </div>

          <form action="" className='flex flex-col gap-4 mt-5'>
            <div>
              <label htmlFor="" className='text-[13px] uppercase font-semibold'>Product Name</label>
              <input type="text" name='name' value={ProductForm.name} onChange={ProductChange} placeholder='e.g Crocin Advance fast Release' className='w-full border border-[#6a9f4d]/40 px-4 py-2 rounded-md' />
            </div>

            <div className='flex gap-5 w-full '>
              <div className='w-full'>
                <label htmlFor=" " className='text-[13px] uppercase font-semibold'>Category</label>
                <select name='category' value={ProductForm.category} onChange={ProductChange} id="" className=' border py-2 rounded-md text-sm px-4 w-full'>
                  <option value="">Select Category</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Personal care">Personal Care</option>
                  <option value="Skin Care">Skin Care</option>
                  <option value="Baby Care">Baby Care</option>
                  <option value="Ayurvedic Care">Ayurvedic Care</option>
                  <option value="Oracle Care">Oracle Care</option>
                  <option value="First Aid">First Aid</option>
                </select>
              </div>

              <div className='w-full'>
                <label htmlFor="" className='text-[13px] uppercase font-semibold'>Brand Name</label>
                <input type="text" name='brandname' value={ProductForm.brandname} onChange={ProductChange} placeholder='e.g. GlaxoSmithKline' className='w-full border border-[#6a9f4d]/40 px-4 py-2 rounded-md' />
              </div>
            </div>

            <div className='flex gap-5 w-full '>
              <div className='w-full'>
                <label htmlFor=" " className='text-[13px] uppercase font-semibold'>Sub Category / Type</label>
                <input type="text" name='Subcategory' value={ProductForm.Subcategory} onChange={ProductChange} placeholder='e.g. Fever & Pain' className='w-full border border-[#6a9f4d]/40 px-4 py-2 rounded-md' />
              </div>
            </div>

            <div className='w-full '>
              <label htmlFor="" className='text-[13px] uppercase font-semibold'>Short Description</label>
              <textarea name='description' value={ProductForm.description} onChange={ProductChange} rows={1} id="" className='w-full border border-[#6a9f4d]/40 px-4 py-2 rounded-md '></textarea>
            </div>

            <div className='w-full '>
              <label htmlFor="" className='text-[13px] font-semibold uppercase'>Long Description</label>
              <textarea name="longdescription" value={ProductForm.longdescription} onChange={ProductChange} rows={3} id="" className='w-full border border-[#6a9f4d]/40 px-4 py-2 rounded-md '></textarea>
            </div>
          </form>
        </div>


        <div className='flex flex-col gap-5 shadow-xl rounded-md p-8'>
          <div className='flex items-center text-[16px]  font-semibold gap-3 uppercase'>
            <p className='bg-[#6a9f4d]/20 text-[18px] rounded-md p-2'><RiMoneyDollarBoxLine /></p>
            <p>Pricing & Stock</p>
          </div>

          <div className="flex gap-3 mt-5 w-full">

            <div className='w-full '>
              <label htmlFor="" className='text-[13px] font-semibold uppercase'>Sale Price(₹)</label>
              <input type="number" name='price' value={ProductForm.price} onChange={ProductChange} placeholder='0..00' className='border rounded-md border-[#6a9f4d]/20 w-full py-2 px-2' id="" />
            </div>

            <div className='w-full'>
              <label htmlFor="" className='text-[13px] font-semibold uppercase'>Tax (%)</label>
              <input type="number" value={ProductForm.tax} name='tax' onChange={ProductChange} placeholder='0..00' className='border rounded-md border-[#6a9f4d]/20 w-full py-2 px-2' id="" />
            </div>

          </div>

          <div>
            <label htmlFor="" className='text-[13px] font-semibold uppercase'>Total Stock</label>
            <input type="number" name='stock' value={ProductForm.stock} onChange={ProductChange} placeholder='0' className='border rounded-md border-[#6a9f4d]/20 w-full py-2 px-2' id="" />
          </div>

          <div>
            <label htmlFor="" className='text-[13px] font-semibold uppercase'>Min Qty</label>
            <input type="number" name='qty' value={ProductForm.qty} onChange={ProductChange} placeholder='1' className='border rounded-md border-[#6a9f4d]/20 w-full py-2 px-2' id="" />
          </div>

          <div className='border border-[#6a9f4d]/30 rounded-md p-5'>
            <div className='flex items-center text-[14px]  font-bold gap-3 uppercase'>
              <p className='bg-[#6a9f4d]/20 text-[18px] rounded-md p-2'><TbPhoto /></p>
              <p>Photos</p>
            </div>
            <div className='bg-[#6a9f4d]/10 w-full p-10 rounded-md mt-5 cursor-pointer' onClick={() => imgref.current.click()}>
              {prev ?
                (<> <img src={prev} alt="" />
                  <input type="file" hidden onChange={handleimg} ref={imgref} /></>
                ) :
                (<>
                  <input type="file" hidden onChange={handleimg} ref={imgref} />
                  <div className='flex gap-2 flex-col items-center'>
                    <p className='rounded-md p-2 text-[18px] bg-[#6a9f4d]/20'><TbUpload /></p>
                    <p className='text-sm'>Upload Image</p>
                  </div>
                </>)
              }
          
            </div>
            
          </div>
        </div>
      </div>
      <div className='flex flex-col items-end '>
        <button type='submit' onClick={ProductSubmit} disabled={load} className='flex items-center gap-5 px-10 py-5 mt-8 bg-[#6a9f4d]/20 font-semibold text-[20px] rounded-lg w-fit'>
          {load ?
            (<><div className='w-5 h-5 border-4 border-green-700 border-t-transparent rounded-full animate-spin'></div>Loading...</>)
            :
            (<><MdOutlineLaunch className='text-[25px]' />Launch Product</>)}
        </button>
      </div>
    </div>
  )
}

export default AddProducts