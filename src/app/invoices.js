import { createSelector, createSlice } from '@reduxjs/toolkit'


const invoiceSlice = createSlice({
  initialState: {
    lists: []
  },
  name: "invoices",
  reducers: {
    invoiceReceived: (invoices, action) => {
     invoices.lists = action.payload
    },
    bugAdded: (invoices, action) => {
      console.log(action.payload)
      invoices.lists.push(action.payload)
    }
  }
})


// action creators
export const { invoiceReceived, bugAdded } = invoiceSlice.actions

// 
export const loadBugs = (data) => invoiceReceived(data)
export const addBug = (data) => bugAdded(data)

export default invoiceSlice.reducer



// selectors

export const  getFilterByStatus = (selectedStatus) => createSelector(
  state => state.invoices,
  invoices => !selectedStatus.length ? invoices.lists : invoices.lists.filter(invoice => selectedStatus.includes(invoice.status) )
)
