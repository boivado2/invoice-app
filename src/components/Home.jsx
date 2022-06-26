import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Invoices from './Invoices'
import InvoiceForm from './InvoiceForm'
import Header from './Header'
import Overlay from './common/Overlay'
import { disableOverlay, hideModal, setDisableInvoiceForm } from '../app/ui'
import InvoiceDetail from './InvoiceDetail'

function Home() {
  const dispatch = useDispatch()
  const invoiceForm = useSelector(state => state.ui.invoiceForm)
  const invoiceDetailPage = useSelector(state => state.ui.invoiceDetailPage)
  const modal = useSelector(state => state.ui.modal)


  const handleDisableInvoiceForm = () => {
    dispatch(setDisableInvoiceForm())
    dispatch(disableOverlay())
    dispatch(hideModal())
  }


  return (
    <div className={`h-full w-full transition-all flex-1  overflow-y-hidden ${modal ? 'fixed overflow-hidden' : "relative"}`}>

      <main className={`w-full flex flex-col justify-center items-center h-full overflow-hidden  lg:max-w-[768px] 2xl:max-w-[1280px] container  mx-auto `}>
        <Overlay onClick={handleDisableInvoiceForm} invoiceForm={invoiceForm} />
        <InvoiceDetail />
        <div className={`${invoiceDetailPage ? 'translate-x-[150%] fixed invisible' : "translate-x-0 transform visible"} transition-all w-full `}>
        <Header />
        <Invoices />
        </div>
      </main>
      <InvoiceForm />
    </div>
  )
}

export default Home