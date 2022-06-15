import React from 'react'

function Select({ value, onChange, items, name, label, styles }) {
  return (
    <div className='flex flex-col gap-3  my-3'>
      <label className='text-md'>{label}</label>
      <select  value={value} onChange={onChange} name={name} className={` px-9 py-4 w-full bg-custom-color-white-100 outline-none ${styles}`} >
      <option className='w-full' value="" >select</option>
        {items.map(item => (
            <option className='w-full' key={item.paymentTerms} value={item.paymentTerms}>{item.title}</option>
    ))}
      </select>
      </div>
  )
}

export default Select