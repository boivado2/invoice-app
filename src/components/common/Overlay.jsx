import React from 'react'


function Overlay({onClick, invoiceForm}) {

  return (
    <div onClick={onClick} className={`${invoiceForm ? 'absolute': " invisible"} top-0 left-0 h-full w-full z-30  overlay overflow-hidden `}></div>
    )
}

export default Overlay