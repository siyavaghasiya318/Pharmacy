import React, { useContext } from 'react'
import { admincontext } from '../../UserContex'
import { Link } from 'react-router-dom'

function CreateAc() {
  const{AdminForm,HandleChange,HandleSubmit,SetisLogin} = useContext(admincontext)

  return (
    <div className='flex h-screen justify-center items-center bg-[#ECF8E6]'>
      <div className=' m-auto w-130 pb-10 bg-[#ebfbe3] shadow-2xl'>
        <p className='text-center text-xl font-bold text-[#374151] mb-3 py-5'>Create Account</p>
        <form action="" className='px-8 flex flex-col gap-4'>
          <div className='flex  gap-5'>
            <input type="text" name='firstname' value={AdminForm.firstname} onChange={HandleChange} placeholder='Enter First Name'  className='border w-full text-sm px-3 capitalize py-1 border-[#556175]'/>
            <input type="text" name='lastname' value={AdminForm.lastname} onChange={HandleChange} placeholder='Enter Last Name'  className='border w-full text-sm px-3 capitalize py-1 border-[#556175]'/>
          </div>
          <input type="text" name="email" value={AdminForm.email} onChange={HandleChange} placeholder='Enter Email'  className='border w-full text-sm px-3 py-1 border-[#556175]'/>
          <input type="text" name="password" value={AdminForm.password} onChange={HandleChange} placeholder='Password'  className='border w-full text-sm px-3 py-1 border-[#556175]'/>
          <button type='submit' onClick={HandleSubmit} className='bg-[#c3ecae] py-1 text-[#3f4a5c] font-bold'>Submit</button>
          <p className='text-sm text-end'>Already Have An account <Link to='/login' onClick={() => SetisLogin("adminlogin")} className='text-blue-600 hover:underline font-semibold'>SignIn</Link></p>
        </form>
      </div>
    </div>
  )
}

export default CreateAc