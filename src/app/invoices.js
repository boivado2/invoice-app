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
      invoices.lists[index].status = "paid"
    },

    invoiceDeleted: (invoices, action) => {
    invoices.lists =  invoices.lists.filter( i => i.id !== action.payload)
    },

    SelectedinvoiceId: (invoices, action) => {
      invoices.invoice = action.payload

    }
  }
})


// action creators
export const { invoiceReceived, bugAdded, SelectedinvoiceId, paymentStatusUpdated, invoiceDeleted } = invoiceSlice.actions

// 
export const loadBugs = (data) => invoiceReceived(data)
export const addBug = (data) => bugAdded(data)
export const setSelectedInvoiceId = (invoice) => SelectedinvoiceId(invoice)
export const updatePaymentStatus = (id) => paymentStatusUpdated(id)
export const deleteInvoice = (id) => invoiceDeleted(id)

export default invoiceSlice.reducer



// selectors

export const getSingleInvoice = () => createSelector(
  state => state.invoices,
  (invoices) => invoices.lists.find((i) => i.id === invoices.invoice)
)

export const  getFilterByStatus = (selectedStatus) => createSelector(
  state => state.invoices,
  invoices => !selectedStatus.length ? invoices.lists : invoices.lists.filter(invoice => selectedStatus.includes(invoice.status) )
)
