import * as Yup from 'yup'

export const initialFormValues = {
    
  clientAddress: {
    street: "",
    city: '',
    postCode: '',
    country: ''
  },

    
    senderAddress: {
      street: "",
      city: '',
      postCode: '',
      country: ''
    },

  id:"",
  clientName: "",
  clientEmail: "",
  paymentDue: '',
  createdAt:"",
  paymentTerms: '',
  description: "",
  status: "",
  total: "",
  items: [ ]
    
}

export const schemaObject = Yup.object().shape(
  {
 
    clientAddress: Yup.object().shape({
      street: Yup.string().required("required!").label('Street'),
      postCode: Yup.string().required("required!").label("PostCode"),    
      city: Yup.string().required("required!"),
      country: Yup.string().required("required!"),
    }),

    senderAddress: Yup.object().shape({
      street: Yup.string().required("required!").label('Street'),
      postCode: Yup.string().required("required!").label("PostCode"),    
      city: Yup.string().required("required!"),
      country: Yup.string().required("required!"),
    }),
    


    id: Yup.string(),
    clientName: Yup.string().required("Can't be empty").label("Name"),
    clientEmail: Yup.string().email("can't be empty").required().label("Email"),
    paymentDue: Yup.date(),
    paymentTerms: Yup.string().required("can't be empty"),
    description: Yup.string().required("can't be empty"),
    status: Yup.string(),
    total: Yup.string(),
    createdAt: Yup.date().required('required !'),
    items: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required(),
        price: Yup.number().required(),
        quantity: Yup.number().required(),
        total: Yup.number()
      })
    ).required("- All fields must be added /n - All fields must be added ").min(1, '- An item must be added')

  }
)



export const paymentTermsList = [{ title: "Net 1 day", paymentTerms: 1 }, { title: "Net 7 days", paymentTerms: 7 }, { title: "Net 14 days", paymentTerms: 14 }, { title: "Net 30 days", paymentTerms: 30 }]
