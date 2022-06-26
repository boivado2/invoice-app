import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DropDown from './common/DropDown'
import Button from './common/Button'
import plusSvg from '../assets/icon-plus.svg'
import { getFilterByStatus } from '../app/invoices';
import { enableOverlay, setEnableInvoiceForm } from '../app/ui'



function Header() {
  const dispatch = useDispatch()
  const selectedDropItems = useSelector(state => state.ui.selectedDropItems)
  const filterInvoice = useSelector(getFilterByStatus(selectedDropItems))


  const handleEnableInvoiceForm = () => {
    dispatch(setEnableInvoiceForm())
    dispatch(enableOverlay())
  }
  const {length : count} = filterInvoice
  return (
    <header className='flex justify-between py-8 px-3 '>
    <div className=''>
      <h1  className='text-3xl dark:text-custom-ligth-100 text-custom-dark-blue-400'>Invoice</h1>
        <p className='text-md text-custom-dark-gray-100 hidden sm:block'>{ count <= 1 ? `There is ${count} total invoice` : `There are ${count} total invoices`}</p>
        <p className='text-md text-custom-dark-gray-100 sm:hidden'>{ count <= 1 ? `${count} invoice` : `${count} invoices`}</p>

    </div>
    <div className='flex gap-2'>
      <DropDown title="Filter" bTitle="Filter by Status"/>
      <Button type='button' styles="bg-custom-dark-purple rounded-full" icon={plusSvg} iconAlt="plus icon for showing form" onClick={handleEnableInvoiceForm}>
        <span className='hidden sm:block text-custom-ligth-100 '>New Invoice</span>
        <span className=' sm:hidden text-custom-ligth-100'>New</span>
      </Button>
    </div>
  </header>
  )
}

export default Header