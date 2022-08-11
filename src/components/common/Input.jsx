import React from 'react'
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';

function Input({ label, name, type, style, readOnly, value, error, touch, index }) {
  
  const { errors, setFieldTouched, touched, setFieldValue, values } = useFormikContext()


  return (
    <div className={` flex flex-col w-full gap-3 my-3`}>
      <div className='flex justify-between'>

        <label className={`text-md  ${error || errors[name] ? ' text-custom-ligth-red-100' : "dark:text-custom-ligth-200 text-custom-dark-blue-300"}`} htmlFor={name}>{label}</label>
        
        <ErrorMessage style={`hidden md:block text-custom-ligth-red-100`} visible={touched[name] || touch} error={errors[name] || error} />
        
      </div>
      <input
       readOnly={readOnly} 
       className={`${style} dark:bg-custom-dark-blue-100 bg-custom-ligth-100 dark:text-custom-ligth-200  px-3 lg:px-7 py-3 outline  outline-[0.3px] focus:dark:outline-custom-dark-purple focus:outline-custom-dark-purple dark:outline-custom-dark-blue-300  text-base ${error || errors[name] ? ' dark:outline-custom-ligth-red-100 outline-custom-ligth-red-100' :  "outline-custom-ligth-200"}`}
        type={type} 
        value={value} 
        name={name}
        id={name}
        onChange={(e) => {
          if (name === `items.${index}.quantity`) {
            let total = e.target.value * values.items[index].price
            setFieldValue(`items.${index}.total`, total)
          }
          setFieldValue(name, e.target.value)
        }
        } onBlur={() => setFieldTouched(name)} />
      
      <ErrorMessage style={`md:hidden text-custom-ligth-red-100`} visible={touched[name] || touch} error={errors[name]|| error} />
      
  </div>
  )
}

export default Input