import React from 'react'

import Button from './Button';
import { useFormikContext } from 'formik';

function FormikSaveButton() {
  const {handleSubmit} = useFormikContext()
  return (
    <Button type='submit' styles="bg-custom-dark-purple rounded-full" onClick={handleSubmit} >
      Save & send
    </Button>
  )
}

export default FormikSaveButton