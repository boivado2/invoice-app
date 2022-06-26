import React from 'react'
import Button from './Button'

function Modal({title, desc, children }) {
  return (
    <div className='fixed mx-5 transition-all  max-w-lg max-h-[180px] h-full bg-custom-ligth-200 flex flex-col z-50 rounded-2xl p-5 self-center'>
      <div>
        <h2 className='text-lg lg:text-xl'>{ title }</h2>
        <p className='text-md lg:text-lg'>{desc}</p>
      </div>
      <div className='flex justify-end'>
         {children}
      </div>
    </div>
  )
}

export default Modal