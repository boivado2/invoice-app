import React from 'react'

function Modal({title, desc, children }) {
  return (
    <div className='fixed mx-5 transition-all  max-w-lg max-h-[260px] h-full flex flex-col z-50 rounded-xl px-6 py-8 self-center dark:text-custom-ligth-100 text-custom-dark-blue-400 dark:bg-custom-dark-blue-100 bg-custom-ligth-100 gap-5'>
      <div>
        <h2 className='text-2xl'>{ title }</h2>
        <p className='text-md lg:text-lg'>{desc}</p>
      </div>
      <div className='flex justify-end'>
         {children}
      </div>
    </div>
  )
}

export default Modal