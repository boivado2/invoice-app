import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './common/Button'
import { setHideIvoiceDetailPage, setEnableInvoiceForm, hideModal, showModal, hideInvoiceDetailPage } from './../app/ui';
import arrowLeftSvg from '../assets/icon-arrow-left.svg'
import { deleteInvoice, getSingleInvoice, updatePaymentStatus } from '../app/invoices';
import Modal from './common/Modal';




function InvoiceDetail() {
  const dispatch = useDispatch()
  const invoice = useSelector(getSingleInvoice())
  const modal = useSelector(state => state.ui.modal)
  const invoiceDetailPage = useSelector(state => state.ui.invoiceDetailPage)

  const handleInvoiceDetailPage = () => {
    dispatch(setHideIvoiceDetailPage())
  }

  const handleEnableInvoiceForm = () => {
    dispatch(setEnableInvoiceForm())

  }

  const handleUpdateInvoiceStatus = () => {
    dispatch(updatePaymentStatus(invoice.id))

  }

  const hadnleModalDelete = () => {
    dispatch(showModal())
  }

  const hadnleDeleteInvoice = () => {
    dispatch(deleteInvoice(invoice.id))
    dispatch(hideInvoiceDetailPage())
    dispatch(hideModal())


  }

  const handleCancelModal = () => {
    dispatch(hideModal())
  }


  return (
    <>
      {modal ?  
        <Modal title="Confirm Deleteion" desc={`Are you sure you want to delete invoice #${invoice.id}? This action cannot be undone.`}>
        <Button type='button' onClick={handleCancelModal}>Cancel</Button>
        <Button type='button' onClick={hadnleDeleteInvoice}>Delete</Button>
        </Modal>
        :
        null
      }
    <section className={`h-full  w-full ${invoiceDetailPage ? ' translate-x-0' : 'translate-x-[-130%] fixed'} transition-all flex flex-col justify-center items-center `}>
  

      <article className='h-full container w-full mx-auto flex flex-col py-8 items-center px-4 sm:px-10 gap-6'>

        <div className=' flex items-center gap-5 self-start cursor-pointer' onClick={handleInvoiceDetailPage}>
          <img src={arrowLeftSvg} alt="" />
          <p className=' text-custom-dark-blue-400 dark:text-custom-ligth-100'>Go back</p>
        </div>

        <header className='flex w-full  flex-row items-center bg-custom-ligth-100 dark:bg-custom-dark-blue-200 px-10 py-8 gap-8'>
          <aside className='flex flex-row flex-grow justify-between items-center sm:justify-start gap-5 '>
            <h4 className=' text-custom-dark-gray-100 '>Status</h4>

            <div className='relative   flex justify-center items-center px-2'>
              <div className={` relative flex  sm:w-full justify-center items-center  py-3 px-4  w-full rounded-lg gap-4 max-w-[120px] sm:mx-auto`} id={`invoice_${invoice?.status}`}>
                <span className={`p-1 inline-block  rounded-full invoice_box_${invoice?.status}`} role="cell"></span>
                
                <p className={``}>
                  
                  {invoice?.status}
                  
                </p>
                
        </div>

            </div>
          </aside>

          <aside className='flex-row flex-grow gap-5  items-center justify-end hidden sm:flex '>
              <Button onClick={handleEnableInvoiceForm} type="button" styles=" rounded-full bg-custom-ligth-200 text-sm" >
                <span>Edit</span>
            </Button>
              <Button onClick={hadnleModalDelete}  styles=" bg-custom-ligth-red-100 rounded-full" >
                <span className=''>Delete</span>
              </Button>

            {invoice?.status !== 'paid' ?
              (
                <Button type='button' onClick={handleUpdateInvoiceStatus} styles={` ${invoice?.status === 'draft' ? 'cursor-not-allowed' : ""} bg-custom-dark-purple rounded-full `} >
              <span className=''>Mark as Paid</span>
                </Button>
              )
                :
              null} 
          </aside>
        </header>

        <aside className='flex flex-col h-full w-full bg-custom-ligth-100 dark:bg-custom-dark-blue-200 px-4 sm:px-10 py-8 gap-5'>
          <div className='flex flex-col sm:flex-row  justify-between gap-4'>
            <div>
              <h2 className='text-custom-dark-blue-400 dark:text-custom-ligth-100 font-semibold'>{invoice?.id}</h2>
              <p className=' text-custom-dark-gray-100'>{ invoice?.description}</p>
            </div>

            <div className=' text-custom-dark-gray-100'>
              <p>{ invoice?.senderAddress.street}</p>
              <p>{invoice?.senderAddress.city}</p>
              <p>{invoice?.senderAddress.postCode}</p>
              <p>{ invoice?.senderAddress.country}</p>
            </div>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
            <div>
              <div>
                <h5 className=' text-custom-dark-gray-100'>Invoice Date</h5>
                <p className='text-custom-dark-blue-400 dark:text-custom-ligth-100 font-semibold'>{ invoice?.createdAt}</p>
              </div>
              <div>
                <h5 className=' text-custom-dark-gray-100'>Payment Due</h5>
                <p className='text-custom-dark-blue-400 dark:text-custom-ligth-100 font-semibold'>{invoice?.paymentDue }</p>
              </div>
            </div>
            <div className=' text-custom-dark-gray-100'>
                <h5 className=''>Bill To</h5>
              <p className=' my-3 text-custom-dark-blue-400 dark:text-custom-ligth-100 font-semibold'>{invoice?.clientName}</p>
              <p>{invoice?.clientAddress.street }</p>
              <p>{invoice?.clientAddress.city }</p>
              <p>{invoice?.clientAddress.postCode }</p>
              <p>{invoice?.clientAddress.country }</p>
              
            </div>
            <div className=''>
              <h5 className=' text-custom-dark-gray-100'>sent to</h5>
              <p className=' my-3 text-custom-dark-blue-400 dark:text-custom-ligth-100 font-semibold'>{ invoice?.clientEmail}</p>
            </div>
          </div>

          <aside className='mt-6 bg-custom-ligth-200 dark:bg-custom-dark-blue-100 rounded-lg overflow-hidden '>
            <div className='py-6 px-4'>
            <div className=' hidden  sm:flex sm:gap-4 sm:justify-between items-center mb-4 text-custom-dark-gray-100'>
              <h6>Item Name</h6>
              <h6>Qty</h6>
              <h6>Price</h6>
              <h6>Total</h6>
            </div>

            
            {invoice?.items.map(i => (
              <div key={i.name} className='mb-4'>
                <div className=' flex  justify-between items-center gap-4'>
                  <div className=''>
                    <p className=' text-custom-dark-blue-400 dark:text-custom-ligth-100 font-semibold w-full whitespace-nowrap'>{i.name}</p>
                    <div className=' text-custom-dark-gray-100'>
                    <p className='sm:hidden'> <span>{i.quantity}</span> x <span>&#8358;{i.price}</span></p>
                    </div>
                  </div>
                  <p className='text-custom-dark-gray-100 hidden sm:block'>{ i.quantity}</p>
                  <p className='text-custom-dark-gray-100 hidden sm:block'>&#8358;{i.price}</p>
                  <p className=' text-custom-dark-blue-400 dark:text-custom-ligth-100 font-semibold'>&#8358;{i.total}</p>
                </div>
              </div>
            ))}
              </div>
            <div className='px-4 flex justify-between py-5 bg-custom-dark-blue-400 text-custom-ligth-100 font-semibold'>
              
              <h3>Amount Due</h3>
              
              <p>&#8358;{invoice?.total}</p>
              
            </div>
            
        </aside>
        </aside>

      </article>
      <footer className=' sm:hidden sticky bottom-0 px-4 py-7 w-full bg-custom-ligth-100 dark:bg-custom-dark-blue-100'>
        <aside className='flex flex-row flex-grow gap-5  items-center justify-around'>
              <Button onClick={handleEnableInvoiceForm} type="button" styles=" rounded-full bg-custom-ligth-200 text-sm" >
                <span>Edit</span>
            </Button>
              <Button onClick={hadnleModalDelete}  styles=" bg-custom-ligth-red-100 rounded-full" >
                <span className=''>Delete</span>
              </Button>

              <Button onClick={handleUpdateInvoiceStatus} styles="bg-custom-dark-purple rounded-full" >
                 <span className=''>Mark as Paid</span>
              </Button>  
          </aside>
        </footer>
      </section>
      </>
  )
}

export default InvoiceDetail