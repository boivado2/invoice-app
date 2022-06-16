import React from 'react'
import { useDispatch } from 'react-redux'
import DropDown from './common/DropDown'
import Button from './common/Button'
import plusSvg from '../assets/icon-plus.svg'
import { setEnableInvoiceForm } from '../app/ui'



function Header() {
  const dispatch = useDispatch()

  const handleEnableInvoiceForm = () => {
    dispatch(setEnableInvoiceForm())
  }
  return (
    <header className='flex justify-between py-8 px-3 '>
    <div className=''>
      <h1  className=' text-3xl'>Invoice</h1>
      <p className='text-md'>7 invoices</p>
    </div>
    <div className='flex gap-2'>
      <DropDown title="Filter" bTitle="Filter by Status"/>
      <Button  styles="bg-custom-dark-purple rounded-full" icon={plusSvg} iconAlt="plus icon for showing form" onClick={handleEnableInvoiceForm}>
        <span className='hidden sm:block'>New Invoice</span>
        <span className=' sm:hidden'>New</span>
      </Button>
    </div>
  </header>
  )
}

export default Header