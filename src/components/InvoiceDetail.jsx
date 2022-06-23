import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './common/Button'
import { setHideIvoiceDetailPage, setEnableInvoiceForm } from './../app/ui';
import arrowLeftSvg from '../assets/icon-arrow-left.svg'



function InvoiceDetail() {
  const dispatch = useDispatch()
  const invoice = useSelector(state => state.invoices.invoice)
  const invoiceDetailPage = useSelector(state => state.ui.invoiceDetailPage)

  const handleInvoiceDetailPage = () => {
    dispatch(setHideIvoiceDetailPage())
  }

  const handleEnableInvoiceForm = () => {
    dispatch(setEnableInvoiceForm())
  }

  return (
    <section className={`h-full  w-full ${invoiceDetailPage ? ' translate-x-0' :  'translate-x-[-130%] fixed'} transition-all `}>
      <article className='h-full container w-full mx-auto flex flex-col py-8 items-center px-4 sm:px-10 gap-6'>

        <div className=' flex items-center gap-5 self-start cursor-pointer' onClick={handleInvoiceDetailPage}>
          <img src={arrowLeftSvg} alt="" />
          <p>Go back</p>
        </div>

        <header className='flex w-full  flex-row items-center bg-custom-ligth-100 dark:bg-custom-dark-blue-200 px-10 py-8'>
          <aside className='flex flex-row flex-grow justify-between sm:justify-start gap-5 '>
            <h4 className=' text-custom-dark-blue-100 dark:text-custom-ligth-100 '>status</h4>
            <div>{ invoice?.status}</div>
          </aside>

          <aside className='flex-row flex-grow gap-5  items-center justify-end hidden sm:flex'>
              <Button onClick={handleEnableInvoiceForm} type="button" styles=" rounded-full bg-custom-ligth-200 text-sm" >
                <span>Edit</span>
            </Button>
              <Button  styles=" bg-custom-ligth-red-100 rounded-full" >
                <span className=''>Delete</span>
              </Button>

              <Button styles="bg-custom-dark-purple rounded-full" >
                 <span className=''>Mark as Paid</span>
              </Button>  
          </aside>
        </header>

        <aside className='flex flex-col h-full w-full bg-custom-ligth-100 dark:bg-custom-dark-blue-100 px-4 sm:px-10 py-8 gap-5'>
          <div className=' sm:flex  justify-between'>
            <div>
              <h2>{invoice?.id}</h2>
              <p>{ invoice?.description}</p>
            </div>
            <div>
              <p>{ invoice?.senderAddress.street}</p>
              <p>{invoice?.senderAddress.city}</p>
              <p>{invoice?.senderAddress.postCode}</p>
              <p>{ invoice?.senderAddress.country}</p>
            </div>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3'>
            <div>
              <div>
                <h5>Invoice Date</h5>
                <p>{ invoice?.createdAt}</p>
              </div>
              <div>
                <h5>Payment Due</h5>
                <p>{invoice?.paymentDue }</p>
              </div>
            </div>
            <div>
              <h5>Bill To</h5>
              <p>{invoice?.clientName}</p>
              <p>{invoice?.clientAddress.street }</p>
              <p>{invoice?.clientAddress.city }</p>
              <p>{invoice?.clientAddress.postCode }</p>
              <p>{invoice?.clientAddress.country }</p>
              
            </div>
            <div>
              <h5>Sent To</h5>
              <p>{ invoice?.clientEmail}</p>
            </div>
          </div>

          <aside>
            <div className=' invisible sm:visible sm:flex sm:gap-4 sm:justify-between items-center mb-4'>
              <h6>Item Name</h6>
              <h6>Qty</h6>
              <h6>Price</h6>
              <h6>Total</h6>
            </div>

            {invoice?.items.map(i => (
              <div className='mb-4'>
                <div className=' flex  justify-between items-center gap-4'>
                  <div>
                    <p className=' w-full whitespace-nowrap'>{i.name}</p>
                    <div>
                    <p className='sm:invisible'> <span>{i.quantity}</span>x <span>&#8358;{i.price}</span></p>
                    </div>
                  </div>
                  <p className=' hidden sm:block'>{ i.quantity}</p>
                  <p className=' hidden sm:block'>&#8358;{i.price}</p>
                  <p className=''>&#8358;{i.total}</p>

                </div>
              </div>
            ))}
            

            <div className='px-4 flex justify-between py-5 dark:bg-custom-dark-blue-400'>
              
              <h3>Grand Toal</h3>
              
              <p>&#8358;{invoice?.total}</p>
              
            </div>
            
        </aside>
        </aside>

      </article>
      <footer className=' sm:hidden sticky bottom-0 px-4 py-7 w-full bg-custom-ligth-100 dark:bg-custom-dark-blue-100'>
        <aside className='flex flex-row flex-grow gap-5  items-center justify-around'>
              <Button type="button" styles=" rounded-full bg-custom-ligth-200 text-sm" >
                <span>Edit</span>
            </Button>
              <Button  styles=" bg-custom-ligth-red-100 rounded-full" >
                <span className=''>Delete</span>
              </Button>

              <Button styles="bg-custom-dark-purple rounded-full" >
                 <span className=''>Mark as Paid</span>
              </Button>  
          </aside>
        </footer>
    </section>
  )
}

export default InvoiceDetail