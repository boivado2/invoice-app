import React from 'react'

function ErrorMessage({visible, error, style }) {
  
  if (!visible && !error) return null

  return (
    <p className={style}>{error }</p>
  )
}

export default ErrorMessage