import React from 'react'

import Button from './Button';
import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';
import { initialFormValues } from '../util/validationSchema';

function FormikDiscardButton({ title, disableForm }) {
  
  const { resetForm, setFormikState } = useFormikContext()
  const dispatch = useDispatch()
  
  const handleClick = () => {
    if (disableForm) {
      dispatch(disableForm())
    }
    resetForm()
  }
  return (
    <Button type='submit'  styles={`bg-custom-dark-blue-200 rounded-full`}  onClick={handleClick} >
      {title}
    </Button>

  )
}

export default FormikDiscardButton