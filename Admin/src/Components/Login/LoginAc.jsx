import React, { useContext } from 'react'
import { admincontext } from '../../UserContex'
import { Link } from 'react-router-dom'

function LoginAc() {
  const{AdminForm,HandleChange,HandleSubmit,SetisLogin,isLogin} = useContext(admincontext)
  
  return (
    <div className='flex h-screen justify-center items-center bg-[#ECF8E6]'>
      <div className=' m-auto w-130 pb-10 bg-[#ebfbe3] shadow-2xl'>
        <p className='text-center text-xl font-bold text-[#374151] mb-3 py-5'>LogIn</p>
        <form action="" onSubmit={HandleSubmit} className='px-8 flex flex-col gap-4'>
          <input type="text" name="email" value={AdminForm.email} onChange={HandleChange} placeholder='Enter Email'  className='border w-full text-sm px-3 py-1 border-[#556175]'/>
          <input type="password" name="password" value={AdminForm.password} onChange={HandleChange} placeholder='Password'  className='border w-full text-sm px-3 py-1 border-[#556175]'/>
          <button type='submit' className='bg-[#c3ecae] py-1 text-[#3f4a5c] font-bold'>Login</button>
          <p className='text-sm text-end'>Don't Have An account <Link to='/createac' onClick={() => SetisLogin("adminregister")} className='text-blue-600 hover:underline font-semibold'>SignUp</Link></p>
        </form>
      </div>
    </div>
  )
}


export default LoginAc