import { createSelector, createSlice } from '@reduxjs/toolkit'
import generateRandomId from '../components/util/generateRandomId'



const invoiceSlice = createSlice({
  initialState: {
    lists: [],
    invoiceId: null,
    selectedInvoice: null,
    isDraft: false
  },
  name: "invoices",
  reducers: {
    invoiceReceived: (invoices, action) => {
     invoices.lists = action.payload
    },
    invoiceAdded: (invoices, action) => {
      invoices.lists.push(action.payload)
    },
    invoiceUpdated: (invoices, action) => {
      const index = invoices.lists.findIndex((i) => i.id === action.payload.id)
      invoices.lists[index] = action.payload
    },

    invoiceDraftSaved: (invoices, action) => {
      invoices.lists.push(action.payload)
    },

    paymentStatusUpdated: (invoices, action) => {
      const index = invoices.lists.findIndex((i) => i.id === action.payload)
      if (invoices.lists[index].status === 'draft') return
      invoices.lists[index].status = "paid"
    },

    invoiceDeleted: (invoices, action) => {
    invoices.lists =  invoices.lists.filter( i => i.id !== action.payload)
    },

    SelectedinvoiceId: (invoices, action) => {
      invoices.invoiceId = action.payload
    },

    invoiceIdCleared: (invoices, action) => {
      invoices.invoiceId = ""
    },
    selectedInvoiceAdded: (invoices, action) => {
      invoices.selectedInvoice = action.payload
    },

    selectedInvoiceRemoved: (invoices, action) => {
      invoices.selectedInvoice = {}
      
    }
  }
})


// action creators
export const { invoiceReceived, invoiceAdded, SelectedinvoiceId, paymentStatusUpdated, invoiceDeleted, selectedInvoiceAdded, selectedInvoiceRemoved,invoiceIdCleared, invoiceUpdated, invoiceDraftSaved } = invoiceSlice.actions

// 
export const loadInvoice = (data) => invoiceReceived(data)

export const addInvoice = (data) => (dispatch) => {
  let invoice = {
    ...data,
    id: generateRandomId(),
    status: "pending"
  }
  invoice.total = invoice.items.reduce((pre, cur) => pre + cur.total, 0) 
  const newDate = new Date(invoice.createdAt)
  const DueDate = newDate.setDate(newDate.getDate() + parseInt(invoice.paymentTerms))
  invoice = { ...invoice, paymentDue: new Date(DueDate).toLocaleDateString() }
  console.log(invoice)
  dispatch(invoiceAdded(invoice))
}

export const updateInvoice = (data) => (dispatch) => {
 let invoice = {...data}

  invoice.total = invoice.items.reduce((pre, cur) => pre + cur.total, 0) 
  const newDate = new Date(invoice.createdAt)
  const DueDate = newDate.setDate(newDate.getDate() + parseInt(invoice.paymentTerms))
  invoice = {...invoice, paymentDue : new Date(DueDate).toLocaleDateString()}
  if (invoice.status === "draft") {
    invoice.status = 'pending'
  }
  dispatch(invoiceUpdated(invoice))
} 

export const saveDraftInvoice = (data) => (dispatch) => {
  let invoice = {
    ...data,
    status: "draft",
    id: generateRandomId()
  }

  if (invoice.createdAt !== "" && invoice.paymentTerms !== "") {
    const newDate = new Date(invoice.createdAt)
    const DueDate = newDate.setDate(newDate.getDate() + parseInt(invoice.paymentTerms))
    invoice = {...invoice, paymentDue : new Date(DueDate).toLocaleDateString()}
  }

  dispatch(invoiceDraftSaved(invoice))
}
export const setSelectedInvoiceId = (invoiceId) => SelectedinvoiceId(invoiceId)
export const updatePaymentStatus = (id) => paymentStatusUpdated(id)
export const deleteInvoice = (id) => invoiceDeleted(id)
export const addSelectedInvoice = (invoice) => selectedInvoiceAdded(invoice)
export const clearInvoiceId = () => invoiceIdCleared()
export const removeSelectedInvoice = () => selectedInvoiceRemoved()

export default invoiceSlice.reducer



// selectors

export const getSingleInvoice = () => createSelector(
  state => state.invoices,
  (invoices) => invoices.lists.find((i) => i.id === invoices.invoiceId)
)

export const  getFilterByStatus = (selectedStatus) => createSelector(
  state => state.invoices,
  invoices => !selectedStatus.length ? invoices.lists : invoices.lists.filter(invoice => selectedStatus.includes(invoice.status) )
)
