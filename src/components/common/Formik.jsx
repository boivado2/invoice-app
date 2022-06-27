import React from 'react'
import { Formik, FieldArray } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import Input from './Input'
import Select from './Select'
import plusSvg from '../../assets/icon-plus.svg'
import deleteIcon from '../../assets/icon-delete.svg'
import { addBug } from '../../app/invoices';
import { setDisableInvoiceForm } from '../../app/ui'



const generateRandomId = () => {
  return Math.random().toString(16).substring(5, 11).toLocaleUpperCase()
}

const formValues = {
  clientAddress: {
    street: "",
    postCode: "",
    city: "",
    country: "",
  },

  senderAddress: {
    street: "",
    postCode: "",
    city: "",
    country: "",
  },

  id:"",
  clientName: "",
  clientEmail: "",
  paymentDue: '',
  paymentTerms: "",
  description: "",
  status: "pending",
  total: "",
  items: [ ]
    
}





const paymentTermsList = [{ title: "Net 1 day", paymentTerms: 1 }, { title: "Net 7 days", paymentTerms: 7 }, { title: "Net 14 days", paymentTerms: 14 }, { title: "Net 30 days", paymentTerms: 30 }]

function InvoiceFormik() {
  const dispatch = useDispatch()
  const invoiceForm = useSelector(state => state.ui.invoiceForm)


  const handleDisableInvoiceForm = () => {
    dispatch(setDisableInvoiceForm())
  }

  return (
    <Formik initialValues={formValues} onSubmit={(values) => {
      const invoice = { ...values, id: generateRandomId() }
      invoice.total = invoice.items.reduce((pre, cur) => pre  + cur.total, 0)      
      console.log(invoice)
      dispatch(addBug(invoice))
    }} >

      {({ handleChange, handleSubmit,  values, setFieldValue }) => (

          <section className={` ${invoiceForm ? ' visible' : "invisible"} absolute top-16 lg:top-0  z-30 h-full overflow-y-hidden  bg-custom-ligth-100 rounded-r-3xl w-full sm:w-[600px] lg:w-[700px]`}>
          <div className=' h-full  pb-8 '>
            <form className='py-6 h-full overflow-auto' onSubmit={handleSubmit}>
            <fieldset className='grid grid-cols-2 gap-3 px-8'>
                
                <legend className=' text-xl py-5'>Bill From</legend>
                
                <div className='col-span-2'>
                <Input onChange={handleChange} style={`col-span-2`} label="Street Address" name="senderAddress.street" type="text" value={values.senderAddress.street} />
                </div>
                
                
                <Input onChange={handleChange} style={``} label="City" name="senderAddress.city" type="text" value={values.senderAddress.city} />
                
                <Input onChange={handleChange} label="Post Code" name="senderAddress.postCode" type="text" value={values.senderAddress.postCode} />
                <div className='col-span-2'>
                <Input onChange={handleChange} style={``} label="Country" name="senderAddress.country" type="text" value={values.senderAddress.country} />
                </div>
                
              </fieldset>
              

              <fieldset className='grid grid-cols-2 gap-3 mb-12 px-8 w-full'>
                
                <legend className='text-xl py-7'>Bill To</legend>

                
                <div className="col-span-2">
                <Input onChange={handleChange} style={``} label="Client's Name" name="clientName" type="text" value={values.clientName} />
                </div>
                
                <div className="col-span-2">
                <Input onChange={handleChange} style={``} label="Client's Email" name="clientEmail" type="email" value={values.clientEmail} />

                </div>

                <div className="div col-span-2">
                <Input onChange={handleChange} style={``} label="Street Address" name="clientAddress.street" type="text" value={values.clientAddress.street} />
                </div>
            
                <Input onChange={handleChange} style={``} label="City" name="clientAddress.city" value={values.clientAddress.city} type="text" />
                
                <Input onChange={handleChange} label="Postal Code" name="clientAddress.postCode" type="text" value={values.clientAddress.postCode} />
                
                  
                <div className="col-span-2">
                <Input onChange={handleChange} style={``} label="Country" name="clientAddress.country" type="text" value={values.clientAddress.country} />
                </div>

                <div className='col-span-2 md:col-span-1'>
                <Input onChange={handleChange} style={` `} label="Invoice Date" name="paymentDue" type="date" value={values.paymentDue} />

                </div>

                <div className="col-span-2 md:col-span-1 w-full">
                <Select value={values.paymentTerms} name="paymentTerms" label="Payment Terms" onChange={handleChange} items={paymentTermsList} styles={ ``}/>

                </div>
                            
                <div className="col-span-2">
                <Input onChange={handleChange} style={``} label="Project Description" name="description" type="text"  value={values.description} />

                </div>

              </fieldset>

            
              <FieldArray name='items' >
                {({ insert, push, remove }) => (

                  <fieldset className='flex flex-col justify-center px-8 mb-14'>
                    
                        <legend className='text-xl py-7'>Item List</legend> 
                        {values.items.map((item, index) => (
                          <aside className='grid grid-cols-5 md:grid-cols-6 gap-3 my-8 w-full' key={index}>
                            <div className="col-span-5 md:col-span-2">
                            <Input onChange={handleChange} style={`  px-2`} label="Item Name" name={`items.${index}.name`} type="text" value={item.name} />
                            
                            </div>
                            
                            <Input onChange={(e) => {
                              handleChange(e)
                              const total = e.target.value * item.price
                              setFieldValue(`items.${index}.total`,total )
                            }} style={`px-1 text-center`} label="Qty" name={`items.${index}.quantity`} type="number" value={item.quantity} />
                            
                            <div className='col-span-2 md:col-span-1'>
                              <Input onChange={(e) => {
                                handleChange(e)
                                const total = e.target.value * item.quantity
                                setFieldValue(`items.${index}.total`,total )
                              }} style={`px-1 text-center`} label="Price" name={`items.${index}.price`} type="number" value={item.price} />
                          </div>
                            
                            <Input readOnly={true} style={`px-1 text-center`} label="Total" name={`items.${index}.total`} type="tel" value={item.total} />
                            
                            <div onClick={() => remove(index)} className='p-3 md:px-6 md:py-3 flex items-end justify-center cursor-pointer'> <img className='w-7 h-7 md:w-8 md:h-10' src={deleteIcon} alt="" /></div>

                            </aside>
                        ))}

                        <div onClick={() => push({ name: "",price: "",quantity: "",total: "" })} className='rounded-full bg-custom-ligth-200 py-3 px-5 text-center ' role="button"
                        >
                          <img className='inline-block' src={plusSvg} alt="" />
                          <span className='text-lg pl-3'>Add New Item</span>
                        </div>

                  </fieldset>
                )}
            </FieldArray>
              
              
              <aside className=' lg:absolute bottom-0 left-0 w-full   flex gap-3 justify-around  bg-white py-7 h-24'>
                
                <div className=' self-center'>
                  
                  <Button type="button" styles=" rounded-full bg-custom-ligth-200 text-sm" onClick={handleDisableInvoiceForm} >
                    <span>Discard</span>
                  </Button>
                  
                </div>

                
                <div className=' flex gap-3'>
                  <Button  styles="bg-custom-dark-blue-200 rounded-full" >
                    <span className=''>Save as Draf</span>
                  </Button>

                  <Button styles="bg-custom-dark-purple rounded-full" >
                    <span className=''>Save & Send</span>
                  </Button>  
                </div>
                
              </aside>
            </form>
          </div>
        </section>      
      )}
      
   </Formik>
  )
}

export default InvoiceFormik