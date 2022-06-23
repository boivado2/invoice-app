import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Invoices from './Invoices'
import InvoiceForm from './InvoiceForm'
import Header from './Header'
import Overlay from './common/Overlay'
import { setDisableInvoiceForm } from '../app/ui'
import InvoiceDetail from './InvoiceDetail'
import { getFilterByStatus } from '../app/invoices'

function Home() {
  const dispatch = useDispatch()
  const invoiceForm = useSelector(state => state.ui.invoiceForm)
  const invoiceDetailPage = useSelector(state => state.ui.invoiceDetailPage)
  const selectedDropItems = useSelector(state => state.ui.selectedDropItems)
  const {length : count} = useSelector(getFilterByStatus(selectedDropItems))




  const handleDisableInvoiceForm = () => {
    dispatch(setDisableInvoiceForm())
  }
  return (
    <div className={`h-full w-full transition-all overflow-hidden flex-1`}>

      <Overlay onClick={handleDisableInvoiceForm} invoiceForm={invoiceForm} />
      <main className={`w-full h-full overflow-hidden  lg:max-w-[768px] 2xl:max-w-[1280px] container  mx-auto relative ${count <= 4 ? ' overflow-hidden relative': ""}`}>
        <InvoiceDetail />
        <div className={`${invoiceDetailPage ? 'translate-x-[150%] fixed invisible' : "translate-x-0 transform visible"} transition-all `}>
        <Header />
        <Invoices />
        </div>
      </main>
      <InvoiceForm />
    </div>
  )
}

export default Home