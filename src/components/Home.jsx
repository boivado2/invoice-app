import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from './Navbar'
import Invoices from './Invoices'
import InvoiceForm from './InvoiceForm'
import {setDisableInvoiceForm} from '../app/ui'
import Header from './Header'
import { getFilterByStatus } from '../app/invoices'

function Home() {
  const dispatch = useDispatch()
  const invoiceForm = useSelector(state => state.ui.invoiceForm)
  const selectedDropItems = useSelector(state => state.ui.selectedDropItems)
  const {length : count} = useSelector(getFilterByStatus(selectedDropItems))

  const handleDisableInvoiceForm = () => {
    dispatch(setDisableInvoiceForm())
  }
  return (
    <div className={`h-full w-full`}>

      <div onClick={handleDisableInvoiceForm} className={` ${invoiceForm  ? "absolute  top-0 left-0 h-full w-full z-30  overlay overflow-hidden " : " "} `}></div>
      <main className={`w-full h-full   lg:max-w-[768px] 2xl:max-w-[1280px] container  mx-auto`}>
        <Header />
        <Invoices />
      </main>
      <InvoiceForm />
    </div>
  )
}

export default Home