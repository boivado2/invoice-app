import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { getFilterByStatus } from './app/invoices';
import Home from './components/Home';
import InvoiceDetail from './components/InvoiceDetail';
import Navbar from './components/Navbar';





function App() {

  const invoiceForm = useSelector(state => state.ui.invoiceForm)
  const theme = useSelector(state => state.ui.theme)
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [theme])

  return (
    <div className={` ${invoiceForm ? 'fixed ': ''} flex flex-1 flex-col lg:flex-row dark:bg-custom-dark-blue-300 bg-custom-ligth-300 w-full h-full min-h-screen font-spartan`} >
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/'>
            <Route  index element={<Home />} />
            <Route path=':id' element={<InvoiceDetail />} />
          </Route>
        </Routes>
    </Router>
</div>
  );
}

export default App;
