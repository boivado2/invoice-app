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

    setCurrentInvoice: (invoices, action) => {
      invoices.invoice = action.payload
    }
  }
})


// action creators
export const { invoiceReceived, bugAdded, setCurrentInvoice } = invoiceSlice.actions

// 
export const loadBugs = (data) => invoiceReceived(data)
export const addBug = (data) => bugAdded(data)
export const currentInvoiceSet = (invoice) => setCurrentInvoice(invoice)

export default invoiceSlice.reducer



// selectors

export const  getFilterByStatus = (selectedStatus) => createSelector(
  state => state.invoices,
  invoices => !selectedStatus.length ? invoices.lists : invoices.lists.filter(invoice => selectedStatus.includes(invoice.status) )
)
