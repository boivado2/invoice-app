import React from 'react'
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';


function Select({ items, name, label, styles }) {
  const {errors, setFieldTouched, touched, setFieldValue, values, } = useFormikContext()

  return (
    <div className='flex flex-col gap-3  my-3'>
      <label className='text-md'>{label}</label>
      <select  value={values[name]} onChange={(e) => setFieldValue(name, e.target.value) } name={name} onBlur={() => setFieldTouched(name)} className={` px-9 py-4 w-full bg-custom-color-white-100 outline-none ${styles}`} >
      <option className='w-full' value="" >select</option>
        {items.map(item => (
            <option className='w-full' key={item.paymentTerms} value={item.paymentTerms}>{item.title}</option>
    ))}
      </select>
      <ErrorMessage style={`hidden md:block text-custom-ligth-red-100`} visible={touched[name]} error={errors[name]} />
      </div>
  )
}

export default Select