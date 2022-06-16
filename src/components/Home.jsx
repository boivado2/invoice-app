import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'
import Invoices from './Invoices'
import InvoiceForm from './InvoiceForm'
import {setDisableInvoiceForm} from '../app/ui'
import Header from './Header'

function Home() {
  const dispatch = useDispatch()
  const invoiceForm = useSelector(state => state.ui.invoiceForm)

  const handleDisableInvoiceForm = () => {
    dispatch(setDisableInvoiceForm())
  }
  return (
    <div className={`${invoiceForm  ? 'overflow-hidden fixed' : "relative"} flex flex-col lg:flex-row font-spartan bg-custom-ligth-200 h-full min-h-screen scroll-smooth  w-full`}>
      <Navbar invoiceForm={invoiceForm} />
      <div onClick={handleDisableInvoiceForm} className={` ${invoiceForm  ? "fixed  top-0 left-0 h-full w-full z-30  overlay overflow-hidden " : " "} `}></div>
       <InvoiceForm />

      
      <main className={`w-full h-full   lg:max-w-[768px] 2xl:max-w-[1280px] container  mx-auto ${invoiceForm ? '' : ""}`}>
        <Header />
        <Invoices />
      </main>

   
    </div>
  )
}

export default Home