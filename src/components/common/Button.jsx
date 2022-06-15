import React from 'react'

function Button({icon, bTitle, title, styles, onClick}) {
  return (
    <div className={` ${styles} outline-none border-none  px-4 py-2 flex text-sm items-center gap-2 `} role="button" onClick={onClick} >
      {icon &&
        <div className=' bg-custom-ligth-100 h-6 w-6 rounded-full z-10 flex items-center justify-center'>
          <img className='' src={icon} alt="" />
        </div>
      }
      <div>
      <span className=' hidden md:block '>{ bTitle }</span>
      <span className='md:hidden'>{ title}</span>
      </div>
    </div>
  )
}

export default Button