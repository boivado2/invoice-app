import React from 'react'
import { useSelector } from 'react-redux'


function Overlay({ onClick }) {
  const overlay = useSelector(state => state.ui.overlay)


  return (
    <div onClick={onClick} className={`${overlay ? 'fixed block': " hidden"} top-0 left-0 h-full w-screen z-[30]  overlay overflow-hidden transition-all`}></div>
    )
}

export default Overlay