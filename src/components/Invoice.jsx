import React from 'react'
import arrowRightSvg from '../assets/icon-arrow-right.svg'

function Invoice({ invoice }) {
  const statusColor = (status) => {
    switch (status) {
      case "paid":
        return "bg-green-600"
      case "pending":
        return "bg-orange-400"
      case "draft": 
        return "bg-custom-dark-blue-100"
      default:
        break;
    }
  }
  return (
    <aside className='grid grid-cols-2 sm:flex gap-2  sm:gap-5 bg-custom-ligth-100 w-full px-4 md:px-8 py-4 rounded-lg my-4 items-center text-sm md:text-base'>
      <div className='py-2  px-2 w-full'>
        <p className=' font-semibold'><span className=' text-custom-dark-purple'>#</span>{ invoice.id}</p>
      </div>

      <div className='py-2 whitespace-nowrap px-2 w-full hidden sm:block'>{invoice.paymentDue}</div>
      
      <div className='py-2 flex  px-2 w-full text-sm md:text-lg  text-center md:text-left whitespace-nowrap justify-end '>{invoice.clientName}</div>
      
      <div className='py-2  px-2  flex flex-col w-full'>
        <p className='sm:hidden'>{ invoice.paymentDue}</p>
        <p className='font-semibold text-lg '><span className=''>&#8358;</span>{invoice.total}</p>
      </div>

      <div className='w-full   flex justify-end  items-center md:justify-start'>
        <div className='flex w-[50%] sm:w-full justify-center items-center bg-custom-ligth-200 py-3 px-4 gap-1'>
        <span className={`p-1 inline-block rounded-full ${statusColor(invoice.status)}`}></span>
        <p className=''>
          {invoice.status}
        </p>
        </div>
      </div>

      <div className='hidden  sm:flex justify-end w-[20%]'>
      <img className='invisible sm:visible' src={arrowRightSvg} alt="" />
      </div>
    </aside>
  )
}

export default Invoice