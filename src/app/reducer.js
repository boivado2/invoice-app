import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from './invoices';
import uiReducer from './ui';


export default combineReducers({
  invoices: invoicesReducer,
  ui : uiReducer
})