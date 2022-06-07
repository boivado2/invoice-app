import React from 'react'
import Logo from '../assets/logo.svg'
import moonSvg from '../assets/icon-moon.svg'
import avatar from '../assets/image-avatar.jpg'
function Navbar() {
  return (
    <header className='bg-custom-ligth-blue h-20 lg:h-screen lg:w-32 flex lg:flex-col justify-between lg:rounded-tr-xl lg:rounded-br-xl'>
      <div className='h-full lg:h-24 lg:w-full w-14 bg-custom-dark-purple rounded-br-2xl rounded-tr-2xl flex  lg:flex-col items-center justify-center'>
      <img className=' w-6 lg:w-14 lg:h-14 h-6' src={Logo} alt="" />
      </div>
      <aside className='flex lg:flex-col gap-2 items-center'>
        <img className='w-6 h-6' src={moonSvg} alt="" />
        <div className=' px-4 lg:py-4  border-l-2 lg:border-l-0 lg:border-t-2 h-full border-white flex  items-center'>
          <img className='w-10 h-10 rounded-[100%]' src={avatar} alt="" />
        </div>
      </aside>
    </header>
  )
}

export default Navbar