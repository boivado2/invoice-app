import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/logo.svg'
import moonSvg from '../assets/icon-moon.svg'
import sunSvg from '../assets/icon-sun.svg'
import avatar from '../assets/image-avatar.jpg'
import { darkModeDisable, darkModeEnable } from './../app/ui';

function Navbar() {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.ui.theme)
  const invoiceForm = useSelector(state => state.ui.invoiceForm)

  const handleDarkModeEnable = () => { 
    dispatch(darkModeEnable())
  }
  
  const handleDarkModeDisable = () => {
    dispatch(darkModeDisable())
  }



  return (
    <nav className={` ${invoiceForm ? 'w-full sticky lg:w-28' : "lg:w-28 sticky"} bg-custom-dark-blue-200  h-20 lg:h-screen  flex lg:flex-col justify-between lg:rounded-tr-xl lg:rounded-br-xl  left-0 top-0 z-50`
} >
      <div className='h-full lg:h-24 lg:w-full w-20 bg-custom-dark-purple rounded-br-2xl rounded-tr-2xl flex  lg:flex-col items-center justify-center'>
      <img className=' w-6 lg:w-14 lg:h-14 h-6' src={Logo} alt="" />
      </div>
      <aside className='flex lg:flex-col gap-6 '>
        {
          !theme
            ?
          <img  onClick={handleDarkModeEnable } className='w-6 h-6 self-center cursor-pointer' src={moonSvg} alt="" /> :
            <img onClick={handleDarkModeDisable} className='w-6 h-6 self-center cursor-pointer' src={sunSvg} alt="" />
        }
       
        <div  className=' px-4 lg:py-4  border-l-2 lg:border-l-0 lg:border-t-2 h-full border-custom-dark-blue-100 flex  items-center lg:justify-center'>
          <img className='w-10 h-10 rounded-[100%]' src={avatar} alt="" />
        </div>
      </aside>
    </nav>
  )
}

export default Navbar