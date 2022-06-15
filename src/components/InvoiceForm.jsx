import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import Button from './common/Button'
import Input from './common/Input';
import plusSvg from '../assets/icon-plus.svg'
import deleteIcon from '../assets/icon-delete.svg'
import { setDisableInvoiceForm } from '../app/ui';
import Select from './common/Select';
import { addBug } from '../app/invoices';


function InvoiceForm() {

  const generateRandomId = () => {
    return Math.random().toString(16).substring(5, 11).toLocaleUpperCase()
  }


  const [billingForm, setBillingForm] = useState({
    clientAddress: {
      clientStreetAddress: "",
      clientPostalCode: "",
      clientCity: "",
      clientCountry: "",
    },
    senderAddress: {
      streetAddress: "",
      postalCode: "",
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
      
  })

  const dispatch = useDispatch()
  const invoiceForm = useSelector(state => state.ui.invoiceForm)


  const handleDisableInvoiceForm = () => {
    dispatch(setDisableInvoiceForm())
  }

  const handleSubmit = (e) => {
    const billingFormCopy = { ...billingForm, id: generateRandomId() }
    
    e.preventDefault()
    
    dispatch(addBug(billingFormCopy))
    
  }
  
  const hadnleChange = (e) => {
    const { name, value } = e.target 
    setBillingForm({...billingForm, [name]: value })
  }

  const handleSenderAddressInputChange = (e) => {
    const { name, value } = e.target 
    const senderAddress = { ...billingForm.senderAddress, [name]: value }
    setBillingForm({...billingForm, senderAddress})
  }

  const handleClientAddressInputChange = (e) => {
    const { name, value } = e.target 
    const clientAddress = { ...billingForm.clientAddress, [name]: value }
    setBillingForm({...billingForm, clientAddress})
  }

  const handleItemIputChange = (e, index) => {
    const { name, value } = e.target 
    const items = [...billingForm.items]
    items[index][name] = value 
    items[index]['total'] = items[index]['price'] * items[index]['qty']
    billingForm.total = items[index].total
    setBillingForm({...billingForm, items})
  }


  const handleAddItemList = () => {
    const item = {
      itemName: "",
      price: "",
      qty: "",
      total: ""
    }
    const items = [...billingForm.items, item]
    setBillingForm({...billingForm, items})
  }

  const handleRemoveItemList = (index) => {
    console.log(index)
    const items = [...billingForm.items]
   items.splice(index, 1)
   setBillingForm({...billingForm, items})
  }

  const { clientAddress, clientEmail, clientName, senderAddress, items, paymentDue, paymentTerms, description} = billingForm


  const paymentTermsList = [{ title: "Net 1 day", paymentTerms: 1 }, { title: "Net 7 days", paymentTerms: 7 }, { title: "Net 14 days", paymentTerms: 14 }, { title: "Net 30 days", paymentTerms: 30 },]
  

  return (
    <section className={` ${invoiceForm ? ' visible' : "invisible"} absolute top-20 lg:top-0 lg:left-28 z-30 h-full overflow-y-hidden  bg-custom-ligth-100 rounded-r-3xl w-full sm:w-[600px] lg:w-[700px]`}>
      <div className=' h-full  pb-8'>
        
        <form onSubmit={handleSubmit} className='py-6 pb-7 h-full overflow-auto '>
          
        <fieldset className='grid grid-cols-2 gap-3 px-8'>
            <legend className=' text-xl py-5'>Bill From</legend>
            
            <div className='col-span-2'>
            <Input onChange={handleSenderAddressInputChange} style={`col-span-2`} label="Street Address" name="streetAddress" type="text" value={senderAddress.streetAddress} />
            </div>
            
            
            <Input onChange={handleSenderAddressInputChange} style={``} label="City" name="city" type="text" value={senderAddress.city} />
            
            <Input onChange={handleSenderAddressInputChange} label="Postal Code" name="postalCode" type="text" value={senderAddress.postalCode} />
            <div className='col-span-2'>
            <Input onChange={handleSenderAddressInputChange} style={``} label="Country" name="country" type="text" value={senderAddress.country} />
            </div>
            
        </fieldset>

        <fieldset className='grid grid-cols-2 gap-3 mb-12 px-8 w-full'>
            <legend className='text-xl py-7'>Bill To</legend>
            
            <div className="col-span-2">
            <Input onChange={hadnleChange} style={``} label="Client's Name" name="clientName" type="text" value={clientName} />
            </div>
            
            <div className="col-span-2">
            <Input onChange={hadnleChange} style={``} label="Client's Email" name="clientEmail" type="email" value={clientEmail} />

            </div>

            <div className="div col-span-2">
            <Input onChange={handleClientAddressInputChange} style={``} label="Street Address" name="clientStreetAddress" type="text" value={clientAddress.clientStreetAddress} />
            </div>
         
            <Input onChange={handleClientAddressInputChange} style={``} label="City" name="clientCity" value={clientAddress.clientCity} type="text" />
            
            <Input onChange={handleClientAddressInputChange} label="Postal Code" name="clientPostalCode" type="text" value={clientAddress.clientPostalCode} />
            
               
            <div className="col-span-2">
            <Input onChange={handleClientAddressInputChange} style={``} label="Country" name="clientCountry" type="text" value={clientAddress.clientCountry} />
            </div>

            <div className='col-span-2 md:col-span-1'>
            <Input onChange={hadnleChange} style={` `} label="Invoice Date" name="paymentDue" type="date" value={paymentDue} />

            </div>

            <div className="col-span-2 md:col-span-1 w-full">
            <Select value={paymentTerms} name="paymentTerms" label="Payment Terms" onChange={hadnleChange} items={paymentTermsList} styles={ ``}/>

            </div>
                        
            <div className="col-span-2">
            <Input onChange={hadnleChange} style={``} label="Project Description" name="description" type="text"  value={description} />

            </div>
  
          </fieldset>

         

          <fieldset className='flex flex-col justify-center px-8 mb-14'>
            <legend className='text-xl py-7'>Item List</legend> 
            {items.map((item, index) => (
              <aside className='grid grid-cols-5 md:grid-cols-6 gap-3 my-8 w-full' key={index}>
                <div className="col-span-5 md:col-span-2">
                <Input onChange={(e) => handleItemIputChange(e, index)} style={`  px-2`} label="Item Name" name="itemName" type="text" value={item["itemName"]} />
                
                </div>
                
                <Input onChange={(e) => handleItemIputChange(e, index)} style={`px-1 text-center`} label="Qty" name="qty" type="number" value={item['qty']} />
                
                <div className='col-span-2 md:col-span-1'>
                <Input onChange={(e) => handleItemIputChange(e, index)} style={`px-1 text-center`} label="Price" name="price" type="number" value={item["price"]} />
               </div>
                
                <Input onChange={(e) => handleItemIputChange(e, index)} style={`px-1 text-center`} label="Total" name="total" type="number" value={ item["total"]} />
                
                 <div onClick={() => handleRemoveItemList(index)} className='p-3 md:px-6 md:py-3 flex items-end justify-center cursor-pointer'> <img className='w-7 h-7 md:w-8 md:h-10' src={deleteIcon} alt="" /></div>
    
                </aside>
            ))}

            <div onClick={handleAddItemList} className='rounded-full bg-custom-ligth-200 py-3 px-5 text-center ' role="button"
            >
              <img className='inline-block' src={plusSvg} alt="" />
              <span className='text-lg pl-3'>Add New Item</span>
            </div>
          </fieldset>

          

          
          
        <aside className=' lg:absolute bottom-0 left-0 w-full   flex gap-3 justify-around  bg-white py-7 h-24'>
            <div className=' self-center'>
            <Button title="Discard" bTitle="Discard" styles=" rounded-full bg-custom-ligth-200 text-sm" onClick={handleDisableInvoiceForm} />
          </div>
            <div className=' flex gap-3'>
            <Button title="Save & send" bTitle="Save & Send" styles="bg-custom-dark-purple rounded-full" />
              <Button title="Save as Draft" bTitle="Save as Draft" styles="bg-custom-dark-blue-200 rounded-full" />
              <button type="submit">Submit</button>
         </div>
          </aside>
        </form> 
        
     
      </div>

    </section>
  )
}

export default InvoiceForm

