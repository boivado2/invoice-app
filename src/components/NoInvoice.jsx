import React from 'react'
import noInvoiceSvg from '../assets/illustration-empty.svg'

function NoInvoice() {
  return (
    <aside className='flex flex-col items-center justify-center py-8 px-4 h-full  2xl:h-[500px]  3xl:h-[800px] w-full'>
      <img className='md:h-[250px] lg:h-[280px] 3xl:h-[600px]' src={noInvoiceSvg} alt="" />
      <h2 className='text-xl md:text-3xl 2xl:text-4xl font-medium mt-12 mb-3'>There is nothing here</h2>
      <p className='text-md md:text-xl 2xl:text-2xl text-center'>
        Create an invoice by clicking the New button and get started
      </p>
    </aside>
  )
}

export default NoInvoice