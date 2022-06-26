import { createSelector, createSlice } from '@reduxjs/toolkit'


const invoiceSlice = createSlice({
  initialState: {
    lists: [],
    invoice: null
  },
  name: "invoices",
  reducers: {
    invoiceReceived: (invoices, action) => {
     invoices.lists = action.payload
    },
    bugAdded: (invoices, action) => {
      console.log(action.payload)
      invoices.lists.push(action.payload)
    },

    paymentStatusUpdated: (invoices, action) => {
      const index = invoices.lists.findIndex((i) => i.id === action.payload)
      if (invoices.lists[index].status === 'draft') return
      console.log(action.payload)
      invoices.lists[index].status = "paid"
      if (invoices.invoice.id === action.payload) {
        invoices.invoice.status = "paid"
      }
    },

    invoiceDeleted: (invoices, action) => {
      console.log("deleted", action.payload)

    },

    setCurrentInvoice: (invoices, action) => {
      invoices.invoice = action.payload
    }
  }
})


// action creators
export const { invoiceReceived, bugAdded, setCurrentInvoice, paymentStatusUpdated, invoiceDeleted } = invoiceSlice.actions

// 
export const loadBugs = (data) => invoiceReceived(data)
export const addBug = (data) => bugAdded(data)
export const currentInvoiceSet = (invoice) => setCurrentInvoice(invoice)
export const updatePaymentStatus = (id) => paymentStatusUpdated(id)
export const deleteInvoice = (id) => invoiceDeleted(id)

export default invoiceSlice.reducer



// selectors

export const  getFilterByStatus = (selectedStatus) => createSelector(
  state => state.invoices,
  invoices => !selectedStatus.length ? invoices.lists : invoices.lists.filter(invoice => selectedStatus.includes(invoice.status) )
)
