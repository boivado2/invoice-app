// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'


// import Button from './common/Button'
// import Input from './common/Input';

// import { setDisableInvoiceForm } from '../app/ui';
// import Select from './common/Select';
// import { addInvoice, getSingleInvoice, updateInvoice } from '../app/invoices';
// import { initialFormValues, schemaObject } from './util/validationSchema';
// import Formik from './common/Formik';
// import ItemsFieldArray from './common/ItemsFieldArray';
// import FormikSaveButton from './common/FormikSaveButton';
// import FormikDiscardButton from './common/FormikDiscardButton';
// import FormikDraftButton from './common/FormikDraftButton';




// const paymentTermsList = [{ title: "Net 1 day", paymentTerms: 1 }, { title: "Net 7 days", paymentTerms: 7 }, { title: "Net 14 days", paymentTerms: 14 }, { title: "Net 30 days", paymentTerms: 30 }]

// const mapToModelView = (data) => ({
//   clientStreet: data?.clientAddress.street,
//   clientPostCode: data?.clientAddress.postCode,
//   clientCity: data?.clientAddress.city,
//   clientCountry: data?.clientAddress.country,

//   senderStreet: data?.senderAddress.street,
//   senderPostCode: data?.senderAddress.postCode,
//   senderCity: data?.senderAddress.city,
//   senderCountry: data?.senderAddress.country,

//   id: data?.id,
//   clientName: data?.clientName,
//   clientEmail: data?.clientEmail,
//   paymentDue: data?.paymentDue,
//   createdAt: data?.createdAt,
//   paymentTerms: data?.paymentTerms,
//   description: data?.description,
//   status:  data?.status,
//   total: data?.total,
//   items: data?.items,
    
// })



// function InvoiceForm({visible}) {

//   const dispatch = useDispatch()
//   const invoice = useSelector(getSingleInvoice())

//   const selectedInvoice = mapToModelView(invoice)

//   const handleSubmit = (values, { resetForm }) => {
    
//     if (selectedInvoice.id) {
//       // return updateInvoice(values)
//      return console.log(true)
//     }

//     console.log(false)
//     // dispatch(addInvoice(values))
//     // resetForm()
//   }


//   if(!visible) return null

//   return (
//    <div></div>
//       )
// }

// export default InvoiceForm

