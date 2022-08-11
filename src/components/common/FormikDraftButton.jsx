import React from 'react'

import Button from './Button';
import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';
import { saveDraftInvoice } from '../../app/invoices';

function FormikDraftButton({ title, disableForm }) {
  
  const { resetForm, values } = useFormikContext()
  const dispatch = useDispatch()
  
  const handleClick = () => {
      dispatch(saveDraftInvoice(values))
    if (disableForm) {
      dispatch(disableForm())
    }
    resetForm()
  }
  return (
    <Button type='submit'  styles={`bg-custom-dark-blue-400 dark:bg-custom-dark-blue-200 rounded-full text-custom-ligth-200`}  onClick={handleClick} >
      {title || 'Save as Draft'}
    </Button>

  )
}

export default FormikDraftButton