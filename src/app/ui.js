import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {
    invoiceForm: false,
    dropDownList: false,
    selectedDropItems: [],
    theme: "ligth",
    modal: false,
  },
  reducers: {
    enableInvoiceForm: (ui, action) => { 
      ui.invoiceForm = true
    },
    disableInvoiceForm: (ui, action) => { 
      ui.invoiceForm = false
    },

    showDropDownList: (ui, action) => {
      ui.dropDownList = true
     },
    hideDropDownList: (ui, action) => {
      ui.dropDownList = false
    },
    toggleLigthMode: (ui, action) => { 
      ui.theme = 'ligth'
    },
    toggleDarkMode: (ui, action) => {
      ui.theme = 'dark'
    },
    
    selectDropDownList: (ui, action) => {
      ui.selectedDropItems = action.payload
    },

    showModal: (ui, action) => {
      ui.modal = true
     },
    hideModal: (ui, action) => {
      ui.modal = false
    },

  }
})



export const {enableInvoiceForm, disableInvoiceForm, showDropDownList, hideDropDownList, toggleLigthMode, toggleDarkMode, selectDropDownList, showModal, hideModal } = uiSlice.actions
export default uiSlice.reducer

// Action creators
export const setEnableInvoiceForm = () => enableInvoiceForm()
export const setDisableInvoiceForm = () => disableInvoiceForm()
export const setShowDropDownList = () => showDropDownList()
export const setHideDropDownList = () => hideDropDownList()
export const setToggleLightMode = () => toggleLigthMode()
export const setToggleDarkMode = () => toggleDarkMode()
export const dropDownSelected = (item) => selectDropDownList(item)
export const setShowModal = () => showModal()
export const setHideModal = () => hideModal()








