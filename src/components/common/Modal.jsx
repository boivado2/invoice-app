import React from 'react'
import Button from './Button'

function Modal({heading, desc, button_one, button_two }) {
  return (
    <div className='absolute m-auto top-1/2 left-1/2  h-56 w-96 bg-custom-ligth-200 flex flex-col z-[100] rounded-2xl p-5'>
      <div>
        <h2 className='text-lg lg:text-xl'>{ heading }</h2>
        <p className='text-md lg:text-lg'>{desc}</p>
      </div>
      <div className='flex justify-end'>
        <Button title={button_one} styles="bg-custom-ligth-200"/>
        <Button title={button_two} styles="bg-custom-ligth-red-100"/>

      </div>
    </div>
  )
}

export default Modal