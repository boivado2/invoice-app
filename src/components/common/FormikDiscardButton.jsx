import React from 'react'

import Button from './Button';
import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';

function FormikDiscardButton({ title, disableForm }) {
  
  const { resetForm } = useFormikContext()
  const dispatch = useDispatch()
  
  const handleClick = () => {
    if (disableForm) {
      dispatch(disableForm())
    }
    resetForm()
  }
  return (
    <Button type='submit'  styles={`bg-custom-dark-blue-200 dark:bg-custom-ligth-300 rounded-full text-custom-ligth-200 dark:text-custom-dark-blue-200`}  onClick={handleClick} >
      {title}
    </Button>

  )
}

export default FormikDiscardButton