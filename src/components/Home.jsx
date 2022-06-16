import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from './common/Button'
import DropDown from './common/DropDown'
import Navbar from './Navbar'
import plusSvg from '../assets/icon-plus.svg'
import Invoices from './Invoices'
import InvoiceForm from './InvoiceForm'
import {setDisableInvoiceForm, setEnableInvoiceForm} from '../app/ui'

function Home() {
  const dispatch = useDispatch()
  const invoiceForm = useSelector(state => state.ui.invoiceForm)


  const handleEnableInvoiceForm = () => {
    dispatch(setEnableInvoiceForm())
  }

  const handleDisableInvoiceForm = () => {
    dispatch(setDisableInvoiceForm())
  }
  return (
    <div className={`${invoiceForm  ? 'overflow-hidden fixed' : "relative"} flex flex-col lg:flex-row font-spartan bg-custom-ligth-200 h-full min-h-screen scroll-smooth  w-full`}>
      <Navbar invoiceForm={invoiceForm} />
      <div onClick={handleDisableInvoiceForm} className={` ${invoiceForm  ? "fixed  top-0 left-0 h-full w-full z-30  overlay overflow-hidden " : " "} `}></div>
       <InvoiceForm />

      
      <main className={`w-full h-full   lg:max-w-[768px] 2xl:max-w-[1280px] container  mx-auto ${invoiceForm ? '' : ""}`}>
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

        <Invoices />
        
      </main>

   
    </div>
  )
}

export default Home