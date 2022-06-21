import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {
    invoiceForm: false,
    dropDownList: false,
    selectedDropItems: [],
    theme: JSON.parse(localStorage.getItem("theme")) ,
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
    enableDarkMode: (ui, action) => {
      ui.theme = true
    },
    disableDarkMode: (ui, action) => {
      ui.theme = false
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



export const {enableInvoiceForm, disableInvoiceForm, showDropDownList, hideDropDownList, enableDarkMode, disableDarkMode, selectDropDownList, showModal, hideModal } = uiSlice.actions
export default uiSlice.reducer

// Action creators
export const setEnableInvoiceForm = () => enableInvoiceForm()
export const setDisableInvoiceForm = () => disableInvoiceForm()
export const setShowDropDownList = () => showDropDownList()
export const setHideDropDownList = () => hideDropDownList()
export const darkModeEnable = () => (dispatch) => {
  localStorage.setItem("theme", true)
  dispatch( enableDarkMode())
}
export const darkModeDisable = () => (dispatch) => {
  localStorage.setItem("theme", false)
  dispatch(disableDarkMode())
}
export const dropDownSelected = (item) => selectDropDownList(item)
export const setShowModal = () => showModal()
export const setHideModal = () => hideModal()








