import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux';
import { getFilterByStatus } from '../app/invoices';
import Invoice from './Invoice';
import NoInvoice from './NoInvoice';


function Invoices() {
  // const invoices = useSelector(state => state.invoices.lists)
  const selectedDropItems = useSelector(state => state.ui.selectedDropItems)
  const filterInvoice = useSelector(getFilterByStatus(selectedDropItems))

  useEffect(() => {
  }, [])

  if (filterInvoice.length === 0) return  <NoInvoice />

  return (
    <section className='h-full w-full mx-auto  py-8 px-3 '>
      {filterInvoice.map(invoice => <Invoice key={invoice.id} invoice={invoice}/>)}
    </section>
  )
}

export default Invoices