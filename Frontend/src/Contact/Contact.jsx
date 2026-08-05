import React from 'react'

const Contact = () => {
  return (
    <div className=' pb-15'>
      <div className="text-4xl font-bold text-center py-10 bg-[#e2f7d7]">Contact </div>
      <div className="grid grid-cols-2 mt-10 px-20 bg-white gap-20">
        <div className="">
          <p className="font-bold text-2xl ">Contact Us</p>
          <p className="mt-4">For inquiry support, or collaboration opportunities, simply email us or use the contact from provided. at PharmaOn shop, we're committed to transparency and excellence in all customer communications.</p>
        </div>
        <div className="border-2 border-[#b6e39e] rounded-lg p-5">
          <p className="font-bold text-2xl">Get in Touch</p>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder='Name' className='w-full py-2 px-5 border outline-0 rounded-md mt-6' name="" id="" />
            <input type="text" placeholder='Email' className='w-full py-2 px-5 border outline-0 rounded-md' name="" id="" />
            <textarea placeholder='Message' rows={3} className='w-full px-5  py-2 border outline-0 rounded-md'></textarea>
            <button className='bg-[#86d15e] text-white font-bold border px-10 py-1 w-fit rounded-sm text-left'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
