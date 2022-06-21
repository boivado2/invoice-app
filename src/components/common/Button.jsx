import React from 'react'

function Button({icon, iconAlt, children, type = "submit",  styles, onClick}) {
  return (
    <button className={` ${styles} outline-none border-none  px-4 py-2 flex text-sm items-center gap-2 `} type={type} onClick={onClick} >
      {icon &&
        <span className=' bg-custom-ligth-100 h-6 w-6 rounded-full z-10 flex items-center justify-center'>
          <img className='' src={icon} alt={iconAlt} />
        </span>
      }
    {children}
    </button>
  )
}

export default Button