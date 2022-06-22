import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Invoices from './Invoices'
import InvoiceForm from './InvoiceForm'
import Header from './Header'
import Overlay from './common/Overlay'
import { setDisableInvoiceForm } from '../app/ui'

function Home() {
  const dispatch = useDispatch()
  const invoiceForm = useSelector(state => state.ui.invoiceForm)


  const handleDisableInvoiceForm = () => {
    dispatch(setDisableInvoiceForm())
  }
  return (
    <div className={`h-full w-full ${invoiceForm ? "": "" } `}>

      <Overlay onClick={handleDisableInvoiceForm} invoiceForm={invoiceForm}/>
      <main className={`w-full h-full  lg:max-w-[768px] 2xl:max-w-[1280px] container  mx-auto`}>
        <Header />
        <Invoices />
      </main>
      <InvoiceForm />
    </div>
  )
}

export default Home