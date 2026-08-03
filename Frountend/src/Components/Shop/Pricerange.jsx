import React from 'react'

function Pricerange() {
  return (
    <div>
        <div className='rounded-lg p-5 shadow-lg bg-[#f5f9f4]'>
            <div className='text-[18px] font-semibold'>Price</div>
            <input type="range" className='border w-full text-[#86e96d]' />
        </div>
    </div>
  )
}

export default Pricerange