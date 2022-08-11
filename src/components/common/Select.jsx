import React from 'react'
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';


function Select({ items, name, label, styles }) {
  const {errors, setFieldTouched, touched, setFieldValue, values, } = useFormikContext()

  return (
    <div className='flex flex-col gap-3  my-3'>
      <div className='flex justify-between'>

        <label className={`text-md  ${errors[name] ? ' text-custom-ligth-red-100' : "dark:text-custom-ligth-200 text-custom-dark-blue-300"}`} htmlFor={name}>{label}</label>
        

        <ErrorMessage style={`hidden md:block text-custom-ligth-red-100`} visible={touched[name]} error={errors[name]} />
      </div>
      
      <select  value={values[name]} onChange={(e) => setFieldValue(name, e.target.value) } name={name} onBlur={() => setFieldTouched(name)} className={` px-9 py-4 w-full  dark:bg-custom-dark-blue-100 bg-custom-ligth-100 dark:text-custom-ligth-200  outline  outline-[0.3px] focus:dark:outline-custom-dark-purple focus:outline-custom-dark-purple dark:outline-custom-dark-blue-300  text-base ${errors[name] ? ' dark:outline-custom-ligth-red-100 outline-custom-ligth-red-100' :  "outline-custom-ligth-200"} ${styles}`} >
      <option className='w-full' value="" >select</option>
        {items.map(item => (
            <option className='w-full' key={item.paymentTerms} value={item.paymentTerms}>{item.title}</option>
    ))}
      </select>
      <ErrorMessage style={`md:hidden text-custom-ligth-red-100`} visible={touched[name]} error={errors[name]} />
      </div>
  )
}

export default Select