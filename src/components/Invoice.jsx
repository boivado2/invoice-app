import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { currentInvoiceSet } from '../app/invoices'
import { setShowIvoiceDetailPage } from '../app/ui'
import arrowRightSvg from '../assets/icon-arrow-right.svg'

function Invoice({ invoice }) {
  
  const dispatch = useDispatch()

  const bgStatusColor = (status) => {
    switch (status) {
      case "paid":
        return `bg-green-600`
      case "pending":
        return `bg-orange-400`
      case "draft": 
        return `bg-custom-dark-blue-400 dark:bg-custom-ligth-100`
      default:
        break;
    }
  }


  const textStatusColor = (status) => {
    switch (status) {
      case "paid":
        return `text-green-600`
      case "pending":
        return `text-orange-400`
      case "draft": 
        return `text-custom-dark-blue-400 dark:text-custom-ligth-100`
      default:
        break;
    }
  }

  const handleInvoiceDetailPage = () => {
    dispatch(currentInvoiceSet(invoice))
    dispatch(setShowIvoiceDetailPage())
  }
  
  
  return (
    <aside  onClick={handleInvoiceDetailPage} className='grid grid-cols-2 sm:flex gap-2  sm:gap-5 dark:bg-custom-dark-blue-200 bg-custom-ligth-100 w-full px-4 md:px-8 py-4 rounded-lg my-4 items-center text-sm md:text-base cursor-pointer transition-all '>
      <div className='py-2  px-2 w-full'>
        <p className=' text-custom-dark-blue-400 dark:text-custom-ligth-100 font-semibold'><span className=' text-custom-dark-purple'>#</span>{ invoice.id}</p>
      </div>

      <div className='py-2 whitespace-nowrap px-2 text-custom-dark-gray-100 w-full hidden sm:block'>{invoice.paymentDue}</div>
      
      <div className='py-2 flex text-custom-dark-gray-100 px-2 w-full text-sm md:text-lg  text-center md:text-left whitespace-nowrap justify-end sm:justify-start'>{invoice.clientName}</div>
      
      <div className='py-2  px-2  flex flex-col w-full'>
        <p className='sm:hidden text-custom-dark-gray-100'>{ invoice.paymentDue}</p>
        <p className='font-semibold text-lg text-custom-dark-blue-400 dark:text-custom-ligth-100'><span className=''>&#8358;</span>{invoice.total}</p>
      </div>

      <div className='w-full   flex justify-end  items-center md:justify-start'>
        <div className={` relative flex w-[50%] sm:w-full justify-center items-center  py-3 px-4 gap-1  after:absolute after:top-0 after:left-0 after:h-full after:w-full after:opacity-[0.3] after:z-[2]  `} id={`invoice_${invoice.status}`}>

        <span className={`p-1 inline-block rounded-full ${bgStatusColor(invoice.status)} `} role="cell"></span>
          <p className={`${textStatusColor(invoice.status)}`}>
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