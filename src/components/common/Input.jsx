import React from 'react'

function Input({label, name, type, value, style, onChange, readOnly}) {
  return (
    <div className={` flex flex-col w-full gap-3 my-3`}>
      <label className='text-md' htmlFor={name}>{ label}</label>
      <input readOnly={readOnly}  className={`${style}  px-3 lg:px-7 py-3 outline outline-custom-ligth-200 outline-[0.3px] text-base`} type={type} value={value} name={name} id={name} onChange={onChange}/>
  </div>
  )
}

export default Input