import React from 'react'
import { FieldArray, useFormikContext } from 'formik'
import plusSvg from '../../assets/icon-plus.svg'
import deleteIcon from '../../assets/icon-delete.svg'


import Input from './Input';

const item = {
  name: "",
  price: "",
  quantity: "",
  total: "",
}

function ItemsFieldArray() {
  const { values, errors } = useFormikContext()

  // within a `FieldArray`'s render
  const itemsArrayErrors = (errors) => typeof errors.items === 'string' ? <div>{errors.items}</div> : null;
  
  return (



    <>
        <FieldArray  name='items'>
        {({ push, remove }) => (
          <fieldset className='flex flex-col justify-center px-8 mb-36'>
            <legend className='text-xl py-7 text-custom-dark-blue-300 dark:text-custom-ligth-200'>Item List</legend> 
            {
              values.items.map((item, index) => (
                <aside className='grid grid-cols-4 md:grid-cols-6 gap-3 my-5 w-full' key={index}> 
                  <div className='col-span-4 md:col-span-2'>
                  <Input style={`px-2`} label="Item Name" name={`items[${index}].name`} value={item.name} />
                  </div>

                  <Input type="number" style={`px-1`} label="Price" name={`items.${index}.price`} value={item.price} />
                  
                  <Input type="number" style={`px-1`} index={index} label="Quantity" name={`items.${index}.quantity`} value={item.quantity} />

         
                  <Input readOnly={true} style={`px-1`} label="Total" name={`items.${index}.total`} value={item.total} />
                  
                  <div onClick={() => remove(index)} className='p-3 md:px-6 md:py-3 flex items-end justify-center cursor-pointer'> <img className='w-7 h-7 md:w-8 md:h-10' src={deleteIcon} alt="" /></div>

                </aside>

              ))}
            
            
            <div onClick={() => push(item)} className='rounded-full dark:text-custom-ligth-200 text-custom-dark-blue-300 py-3 px-5 text-center dark:bg-custom-dark-blue-100 bg-custom-ligth-300 ' role="button">

              <img className='inline-block' src={plusSvg} alt="" />
              
              <span className='text-lg pl-3'>Add New Item</span>
              
            </div>
            
            <div className=' text-custom-ligth-red-100 py-4'>
                  {errors.items && <p>- All fields must be added</p>}
                   {itemsArrayErrors(errors)}
                    </div>
          </fieldset>
          

  )}
      </FieldArray>
      </>
  )
}

export default ItemsFieldArray