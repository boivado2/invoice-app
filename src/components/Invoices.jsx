/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux';
import { getFilterByStatus, loadInvoice } from '../app/invoices';
import Invoice from './Invoice';
import NoInvoice from './NoInvoice';
import data from '../data.json'


function Invoices() {
  const dispatch = useDispatch()
  const selectedDropItems = useSelector(state => state.ui.selectedDropItems)
  const filterInvoice = useSelector(getFilterByStatus(selectedDropItems))

  useEffect(() => {
    dispatch(loadInvoice(data))
  }, [])

  if (filterInvoice.length === 0) return  <NoInvoice />

  return (
    <section className='h-full w-full mx-auto  py-8 px-3 '>
      {filterInvoice.map(invoice => <Invoice key={invoice.id} invoice={invoice}/>)}
    </section>
  )
}

export default Invoices