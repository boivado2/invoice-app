import React from 'react'

import Button from './Button';
import { useFormikContext } from 'formik';

function FormikSaveButton({title}) {
  const {handleSubmit} = useFormikContext()
  return (
    <Button type='submit' styles="bg-custom-dark-purple dark:bg-custom-ligth-purple rounded-full text-custom-ligth-200" onClick={handleSubmit} >
     {title}
    </Button>
  )
}

export default FormikSaveButton