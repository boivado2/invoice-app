import React from 'react'
import { Formik } from 'formik'

import { useDispatch, useSelector } from 'react-redux'


import Input from '../common/Input';

import { setDisableInvoiceForm } from '../../app/ui';
import Select from '../common/Select';
import { addInvoice, getSingleInvoice, updateInvoice } from '../../app/invoices';
import { initialFormValues, schemaObject, paymentTermsList } from '../util/validationSchema';
import ItemsFieldArray from '../common/ItemsFieldArray';
import FormikSaveButton from '../common/FormikSaveButton';
import FormikDiscardButton from '../common/FormikDiscardButton';
import FormikDraftButton from '../common/FormikDraftButton';
import arrowLeftSvg from '../../assets/icon-arrow-left.svg'



const mapToModelView = (data) => ({
  clientAddress: {
    street: data?.clientAddress.street,
    city: data?.clientAddress.city,
    postCode: data?.clientAddress.postCode,
    country: data?.clientAddress.country
  },

  
  senderAddress: {
    street: data?.senderAddress.street,
    city: data?.senderAddress.city,
    postCode: data?.senderAddress.postCode,
    country: data?.senderAddress.country
  },
  id: data?.id,
  clientName: data?.clientName,
  clientEmail: data?.clientEmail,
  paymentDue: data?.paymentDue,
  createdAt: data?.createdAt,
  paymentTerms: data?.paymentTerms,
  description: data?.description,
  status:  data?.status,
  total: data?.total,
  items: data?.items,
    
})







function InvoiceFormik({visible}) {



  const dispatch = useDispatch()
  const invoice = useSelector(getSingleInvoice())

  const selectedInvoice = mapToModelView(invoice)

  const handleSubmit = (values, {resetForm}) => {
    
    if (selectedInvoice.id) {
      dispatch(updateInvoice(values))

    } else {
      dispatch(addInvoice(values))

    }

    resetForm()
  }



  

  return (
    <Formik
    initialValues={ !invoice ?  initialFormValues : selectedInvoice  }
    onSubmit={handleSubmit}
    validationSchema={ schemaObject}
    enableReinitialize={true}
    >

      {({values, errors, touched}) => (
        <>
          <section className={`${visible ? ' translate-x-0' : 'translate-x-[-130%]'} absolute top-16 lg:top-0 transition-all  z-30 h-full overflow-y-hidden  dark:bg-custom-dark-blue-300 bg-custom-ligth-100 rounded-r-3xl w-full sm:w-[600px] lg:w-[700px]`}>
            <div className='pt-6 pb-3 h-full overflow-auto relative'>      
              
              <div className=' flex items-center gap-5 self-start cursor-pointer px-8 my-10 md:hidden' onClick={() => dispatch(setDisableInvoiceForm())}>
                
                <img src={arrowLeftSvg} alt="" />
                
                <p className=' text-custom-dark-blue-400 dark:text-custom-ligth-100'>Go back</p>
                
              </div>              

              {selectedInvoice.id
                ?
                <h1 className='px-8 text-2xl my-11 text-custom-dark-blue-400 dark:text-custom-ligth-200'>Edit <span className=' text-custom-dark-purple'>#</span>{selectedInvoice.id}</h1>
                :
                <h1 className='px-8 text-2xl my-11 text-custom-dark-blue-400 dark:text-custom-ligth-200'>New Invoice</h1>
              }
              


              <fieldset className='grid grid-cols-2 md:grid-cols-3 gap-3 px-8'>
                

                <legend className=' text-xl py-5 text-custom-dark-blue-300 dark:text-custom-ligth-200'>Bill From</legend>
                

                <div className='col-span-3'>
                  
              
                  <Input
                    value={values.senderAddress.street}
                    label="Street Address"
                    name="senderAddress.street"
                    error={errors.senderAddress?.street}
                    touch={touched.senderAddress?.street}
                  />
            
                </div>
                


                <Input
                  value={values.senderAddress.city}
                  label="City"
                  name="senderAddress.city"
                  error={errors.senderAddress?.city}
                  touch={touched.senderAddress?.city}
                />

                <Input
                  value={values.senderAddress.postCode}
                  label="Post Code"
                  name="senderAddress.postCode"
                  error={errors.senderAddress?.postCode}
                  touch={touched.senderAddress?.postCode}
                />

                <div className='col-span-2 md:col-span-1'>
                  
                  <Input
                    value={values.senderAddress.country}
                    label="Country"
                    name="senderAddress.country"
                    error={errors.senderAddress?.country}
                    touch={touched.senderAddress?.country}
                  />

                </div>
                
            
          
              </fieldset>
              




          
          <fieldset className='grid grid-cols-2 md:grid-cols-3 gap-3 px-8'>

            
            <legend className=' text-xl py-5 text-custom-dark-blue-300 dark:text-custom-ligth-200'>Bill To</legend>
            
            <div className="col-span-3">
              <Input  value={values.clientName} label="Name" name="clientName" />
            </div>


            <div className="col-span-3">
              <Input  value={values.clientEmail} label="Email" name="clientEmail" />
            </div>

          
            <div className='col-span-3'>
                  
              
                  <Input
                    value={values.clientAddress.street}
                    label="Street Address"
                    name="clientAddress.street"
                    error={errors.clientAddress?.street}
                    touch={touched.clientAddress?.street}
                  />
            
                </div>
                


                <Input
                  value={values.clientAddress.city}
                  label="City"
                  name="clientAddress.city"
                  error={errors.clientAddress?.city}
                  touch={touched.clientAddress?.city}
                />

                <Input
                  value={values.clientAddress.postCode}
                  label="Post Code"
                  name="clientAddress.postCode"
                  error={errors.clientAddress?.postCode}
                  touch={touched.clientAddress?.postCode}
                />

                <div className='col-span-2 md:col-span-1'>
                  
                  <Input
                    value={values.clientAddress.country}
                    label="Country"
                    name="clientAddress.country"
                    error={errors.clientAddress?.country}
                    touch={touched.clientAddress?.country}
                  />

                </div>

            <div className=' col-span-3 grid grid-cols-1 md:grid-cols-2 gap-3 w-full'>
                  <Input  value={values.createdAt} label="Invoice Date" name="createdAt" type="date" />  
                  
                  <Select  value={values.paymentTerms} name="paymentTerms" label="Payment Terms" items={paymentTermsList}/>
                  
            </div>
            

            <div className="col-span-3">
                <Input  value={values.description}  label="Project Description" name="description" />

                </div>

          </fieldset>

              <ItemsFieldArray />
              
          
              
              
          <aside className='relative bottom-14 md:bottom-0 left-0 w-full   flex gap-3 justify-between  dark:bg-custom-dark-blue-100 z-30 bg-custom-ligth-300 pt-7 px-3 md:px-7 h-24'> 
            
            {
              !invoice ?
                <>
                  
                      <div className='flex items-center justify-center'>
                        <FormikDiscardButton  title="Discard" />
                        
                      </div>
                      
                  <div className='flex items-center gap-3 justify-center' >
            
                  
                        <FormikDraftButton />
                        
                        <FormikSaveButton title="Save & Send"/>

              
                </div>
                </>

                :

                <>
                  <div></div>
                  <div className='flex gap-3 items-center justify-center'>
                  <FormikDiscardButton disableForm={setDisableInvoiceForm} title="Cancel" />
                  
                  <FormikSaveButton title="Save Changes" />

                </div>
                  
                </>


            }
            

      

          </aside>



            </div>  

                
            {/* <aside className='absolute bottom-14 md:bottom-0 left-0 w-full   flex gap-3 justify-between  dark:bg-custom-dark-blue-100  bg-custom-ligth-300 pt-7 px-3 md:px-7 h-24'> 
            
            {
              !invoice ?
                <>
                  
                      <div className='flex items-center justify-center'>
                        <FormikDiscardButton disableForm={setDisableInvoiceForm} title="Discard" />
                        
                      </div>
                      
                  <div className='flex items-center gap-3 justify-center' >
            
                  
                        <FormikDraftButton />
                        
                        <FormikSaveButton title="Save & Send"/>

              
                </div>
                </>

                :

                <>
                  <div></div>
                  <div className='flex gap-3 items-center justify-center'>
                  <FormikDiscardButton disableForm={setDisableInvoiceForm} title="Cancel" />
                  
                  <FormikSaveButton title="Save Changes" />

                </div>
                  
                </>


            }
            

      

          </aside> */}

                    
          </section>
          
          
          
        </>
            
      )}
      
   </Formik>
  )
}

export default InvoiceFormik


