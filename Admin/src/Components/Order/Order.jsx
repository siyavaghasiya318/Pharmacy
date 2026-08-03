import React, { useContext } from 'react'
import { admincontext } from '../../UserContex'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';


function Order() {
  const { FetchOrder, OrderDetail, OrderUpdate ,isOpen,SetisOpen} = useContext(admincontext)
  const headers = ["Order ID", "Customer", "Date", "Amount", "Status", "Payment", "Actions"]




  const total = FetchOrder.map((item) => {
    let totalPrice = item.item.reduce((acc, val) => acc + val.totalPrice, 0)

    return totalPrice


  })

  return (
    <div className='px-10 py-6'>
      <div className=''>
        <p className='text-[25px] font-bold'>Order Management</p>
        <div className="overflow-x-auto">
        <table className='w-full text-center  rounded-t-3xl no-scrollbar overflow-hidden  bg-[#f2faef] mt-5 '>
          <thead >

            <tr className=''>
              {headers.map((head, index) => (
                <th key={index} className="p-5">{head}</th>
              ))}
            </tr>

          </thead>
          <tbody>
            {FetchOrder?.map((items, index) => {

              const totalPrice = items.item.reduce(
                (acc, val) => acc + val.totalPrice,
                0
              )

              return (
                <tr key={index} className='px-10 text-sm '>
                  <td className='ps-10 py-8'>#{items._id.slice(0, 6).toUpperCase()}</td>
                  <td>{items.user.firstname}</td>
                  <td>{new Date(items.orderDate).toLocaleDateString()}</td>

                  <td className='font-semibold'>₹ {totalPrice.toFixed(2)}</td>

                  <td>
                    <select name='' value={items.orderStatus} onChange={(e) => OrderUpdate(items._id, e.target.value)} className='bg-[#d4f1c4] rounded-2xl px-4 uppercase text-[10px] text-center font-bold  py-1'>
                      <option value="Processing" >Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Deliverd">Deliverd</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                  <td className='uppercase text-[12px] font-semibold'>
                    <p className='text-[10px] font-bold'>{items.paymentMethod}</p>
                    <p className='text-orange-500'>{items.paymentStatus}</p>
                  </td>

                  <td className='   group '>
                    <Link to="/orderdetail" onClick={() => OrderDetail(items.user._id)} className='flex flex-col  w-fit  m-auto'><p className='hover:bg-[#B1D89C] p-2 rounded'><MdOutlineRemoveRedEye /></p></Link>

                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Order