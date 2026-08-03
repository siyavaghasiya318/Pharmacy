import React from 'react'
import { useContext } from 'react'
import { admincontext } from '../../UserContex'

function ProfileAdmin() {
    const{ShowProfile} = useContext(admincontext)
  return (
    <>
        <div className='p-10'>
            <div className='font-bold text-[25px]'>Personal Detail</div>
            <div className="border flex flex-col gap-5 rounded-lg p-5 mt-10">
                <div className="flex w-full gap-10">
                    <div  className='w-full'>
                        <p className='uppercase text-[12px]'>First name</p>
                        <div className='border w-full px-5 py-2'>
                            {ShowProfile?.firstname}
                        </div>
                    </div>
                    <div className='w-full'>
                        <p className='uppercase text-[12px]'>last name</p>
                        <div className='border w-full px-5 py-2'>{ShowProfile?.lastname}</div>
                    </div>
                </div>
                <div className='w-full'>
                    <p className='uppercase text-[12px]'>Email:</p>
                    <p className='border w-full px-5 py-2'>{ShowProfile?.email}</p>
                </div>

                <div> <button className='border px-4'>Edit</button></div>
            </div>
        </div>
    </>
  )
}

export default ProfileAdmin