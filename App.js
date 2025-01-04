// import React from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import './App.css';
// import Navbar from './Navbar/Navbar';
// import Login from './Login/Login';

// import Dashboard from './Dashboard/Dashboard';

// import Qlist from './Quotations/Qlist';
// import Qadd from './Quotations/Qadd';

// import POS from './Sales/POS';
// import Salesummary from './Sales/Salesummary';

// import Purchaseinvoice from './Purchase/Purchaseinvoice';
// import Purchasesummary from './Purchase/Purchasesummary';

// import Cashierwise from './Reports/Cashierwise';
// import Paymentmode from './Reports/Paymentmode';
// import HSNcode from './Reports/HSNcode';
// import GSTwise from './Reports/GSTwise';
// import Salesmanwise from './Reports/Salesmanwise';
// import Branchwise from './Reports/Branchwise';
// import Salesend from './Reports/Salesend';
// import Partgst from './Reports/Partgst';
// import Stock from './Reports/Stock';
// import Agewise from './Reports/Agewise';
// import Expiredprod from './Reports/Expiredprod';
// import Purchasewise from './Reports/Purchasewise';
// import Colorwise from './Reports/Colorwise';
// import Brandwise from './Reports/Brandwise';
// import Sizewise from './Reports/Sizewise';

// import Plist from './Products/Plist';
// import Padd from './Products/Padd';

// import Ilist from './Inventory/Ilist';
// import Transferinventory from './Inventory/Transferinventory';

// import Dlist from './Division/Dlist';
// import Dadd from './Division/Dadd';

// import Clist from './Category/Clist';
// import Cadd from './Category/Cadd';

// import Ulist from './UOM/Ulist';
// import Uadd from './UOM/Uadd';

// import Tlist from './Tax/Tlist';
// import Tadd from './Tax/Tadd';

// import Blist from './Brand/Blist';
// import Badd from './Brand/Badd';

// import Colist from './Color/Colist';
// import Coadd from './Color/Coadd';

// import Sizelist from './Size/Sizelist';
// import Sizeadd from './Size/Sizeadd';

// import Supplist from './Supplier/Supplist';
// import Suppadd from './Supplier/Suppadd';

// import Paymentlist from './Payments/Paymentlist';
// import Paymentadd from './Payments/Paymentadd';

// import Expenses from './Expense/Expenses';
// import Etype from './Expense/Etype';
// import Elist from './Expense/Elist';


// import Rlist from './Receipt/Rlist';
// import Radd from './Receipt/Radd';

// import Mycompany from './Myaccount/Mycompany/Mycompany';
// import WM from './Myaccount/WM/WM';
// import Designation from './Myaccount/Designation/Designation';
// import Pmode from './Myaccount/Pmode/Pmode';
// import Employee from './Myaccount/Employee/Employee';
// import SP from './Myaccount/SP/SP';
// import SPL from './Myaccount/SPL/SPL';
// import PC from './Myaccount/PC/PC';
// import Billnote from './Myaccount/Billnote/Billnote';

// function App() {
//     return (
//        <Router>
//         <Navbar />
//         <Routes>
//         <Route path="/Login" element={<Login />} />

//           <Route path="/Dashboard" element={<Dashboard />} />

//           <Route path="/Qlist" element={<Qlist />} />
//           <Route path="/Qadd" element={<Qadd />} />

//           <Route path="/POS" element={<POS />} />
//           <Route path="/Salesummary" element={<Salesummary />} />

//           <Route path="/Purchaseinvoice" element={<Purchaseinvoice />} />
//           <Route path="/Purchasesummary" element={<Purchasesummary />} />

//           <Route path="/Cashierwise" element={<Cashierwise />} />
//           <Route path="/Paymentmode" element={<Paymentmode />} />
//           <Route path="/HSNcode" element={<HSNcode />} />
//           <Route path="/GSTwise" element={<GSTwise />} />
//           <Route path="/Salesmanwise" element={<Salesmanwise />} />
//           <Route path="/Branchwise" element={<Branchwise />} />
//           <Route path="/Salesend" element={<Salesend />} />
//           <Route path="/Partgst" element={<Partgst />} />
//           <Route path="/Stock" element={<Stock />} />
//           <Route path="/Agewise" element={<Agewise />} />
//           <Route path="/Expiredprod" element={<Expiredprod />} />
//           <Route path="/Purchasewise" element={<Purchasewise />} />
//           <Route path="/Colorwise" element={<Colorwise />} />
//           <Route path="/Brandwise" element={<Brandwise />} />
//           <Route path="/Sizewise" element={<Sizewise />} />

//           <Route path="/Plist" element={<Plist />} />
//           <Route path="/Padd" element={<Padd />} />

//           <Route path="/Ilist" element={<Ilist />} />
//           <Route path="/Transferinventory" element={<Transferinventory />} />

//           <Route path="/Dlist" element={<Dlist />} />
//           <Route path="/Dadd" element={<Dadd />} />

//           <Route path="/Clist" element={<Clist />} />
//           <Route path="/Cadd" element={<Cadd />} />

//           <Route path="/Ulist" element={<Ulist />} />
//           <Route path="/Uadd" element={<Uadd />} />

//           <Route path="/Tlist" element={<Tlist />} />
//           <Route path="/Tadd" element={<Tadd />} />

//           <Route path="/Blist" element={<Blist />} />
//           <Route path="/Badd" element={<Badd />} />

//           <Route path="/Colist" element={<Colist />} />
//           <Route path="/Coadd" element={<Coadd />} />

//           <Route path="/Sizelist" element={<Sizelist />} />
//           <Route path="/Sizeadd" element={<Sizeadd />} />

//           <Route path="/Supplist" element={<Supplist />} />
//           <Route path="/Suppadd" element={<Suppadd />} />

//           <Route path="/Paymentlist" element={<Paymentlist />} />
//           <Route path="/Paymentadd" element={<Paymentadd />} />

//           <Route path="/Expenses" element={<Expenses />} />
//           <Route path="/Etype" element={<Etype />} />
//           <Route path="/Elist" element={<Elist />} />

//           <Route path="/Rlist" element={<Rlist />} />
//           <Route path="/Radd" element={<Radd />} />

//           <Route path="/Mycompany" element={<Mycompany />} />
//           <Route path="/WM" element={<WM />} />
//           <Route path="/Designation" element={<Designation />} />
//           <Route path="/Pmode" element={<Pmode />} />
//           <Route path="/Employee" element={<Employee />} />
//           <Route path="/SP" element={<SP />} />
//           <Route path="/Mycompany" element={<Mycompany />} />
//           <Route path="/WM" element={<WM />} />
//           <Route path="/SPL" element={<SPL />} />
//           <Route path="/PC" element={<PC />} />
//           <Route path="/Billnote" element={<Billnote />} />

//         </Routes>
//     </Router>
//   );
// }

// export default App; 














import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';

import Dashboard from './Dashboard/Dashboard';

import Qlist from './Quotations/Qlist';
import Qadd from './Quotations/Qadd';

import POS from './Sales/POS';
import Salesummary from './Sales/Salesummary';

import Purchaseinvoice from './Purchase/Purchaseinvoice';
import Purchasesummary from './Purchase/Purchasesummary';

import Cashierwise from './Reports/Cashierwise';
import Paymentmode from './Reports/Paymentmode';
import HSNcode from './Reports/HSNcode';
import GSTwise from './Reports/GSTwise';
import Salesmanwise from './Reports/Salesmanwise';
import Branchwise from './Reports/Branchwise';
import Salesend from './Reports/Salesend';
import Partgst from './Reports/Partgst';
import Stock from './Reports/Stock';
import Agewise from './Reports/Agewise';
import Expiredprod from './Reports/Expiredprod';
import Purchasewise from './Reports/Purchasewise';
import Colorwise from './Reports/Colorwise';
import Brandwise from './Reports/Brandwise';
import Sizewise from './Reports/Sizewise';

import Plist from './Products/Plist';
import Padd from './Products/Padd';

import Ilist from './Inventory/Ilist';
import Transferinventory from './Inventory/Transferinventory';

import Dlist from './Division/Dlist';
import Dadd from './Division/Dadd';

import Clist from './Category/Clist';
import Cadd from './Category/Cadd';

import Ulist from './UOM/Ulist';
import Uadd from './UOM/Uadd';

import Tlist from './Tax/Tlist';
import Tadd from './Tax/Tadd';

import Blist from './Brand/Blist';
import Badd from './Brand/Badd';

import Colist from './Color/Colist';
import Coadd from './Color/Coadd';

import Sizelist from './Size/Sizelist';
import Sizeadd from './Size/Sizeadd';

import Supplist from './Supplier/Supplist';
import Suppadd from './Supplier/Suppadd';

import Paymentlist from './Payments/Paymentlist';
import Paymentadd from './Payments/Paymentadd';

import Expenses from './Expense/Expenses';
import Etype from './Expense/Etype';
import Elist from './Expense/Elist';


import Rlist from './Receipt/Rlist';
import Radd from './Receipt/Radd';

import Mycompany from './Myaccount/Mycompany/Mycompany';
import WM from './Myaccount/WM/WM';
import Designation from './Myaccount/Designation/Designation';
import Pmode from './Myaccount/Pmode/Pmode';
import Employee from './Myaccount/Employee/Employee';
import SP from './Myaccount/SP/SP';
import SPL from './Myaccount/SPL/SPL';
import PC from './Myaccount/PC/PC';
import Billnote from './Myaccount/Billnote/Billnote';

function App() {
    return (
       <Router>
        <Navbar />
        <Routes>
        <Route path="/Login" element={<Login />} />

          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="/Qlist" element={<Qlist />} />
          <Route path="/Qadd" element={<Qadd />} />

          <Route path="/POS" element={<POS />} />
          <Route path="/Salesummary" element={<Salesummary />} />

          <Route path="/Purchaseinvoice" element={<Purchaseinvoice />} />
          <Route path="/Purchasesummary" element={<Purchasesummary />} />

          <Route path="/Cashierwise" element={<Cashierwise />} />
          <Route path="/Paymentmode" element={<Paymentmode />} />
          <Route path="/HSNcode" element={<HSNcode />} />
          <Route path="/GSTwise" element={<GSTwise />} />
          <Route path="/Salesmanwise" element={<Salesmanwise />} />
          <Route path="/Branchwise" element={<Branchwise />} />
          <Route path="/Salesend" element={<Salesend />} />
          <Route path="/Partgst" element={<Partgst />} />
          <Route path="/Stock" element={<Stock />} />
          <Route path="/Agewise" element={<Agewise />} />
          <Route path="/Expiredprod" element={<Expiredprod />} />
          <Route path="/Purchasewise" element={<Purchasewise />} />
          <Route path="/Colorwise" element={<Colorwise />} />
          <Route path="/Brandwise" element={<Brandwise />} />
          <Route path="/Sizewise" element={<Sizewise />} />

          <Route path="/Plist" element={<Plist />} />
          <Route path="/Padd" element={<Padd />} />

          <Route path="/Ilist" element={<Ilist />} />
          <Route path="/Transferinventory" element={<Transferinventory />} />

          <Route path="/Dlist" element={<Dlist />} />
          <Route path="/Dadd" element={<Dadd />} />

          <Route path="/Clist" element={<Clist />} />
          <Route path="/Cadd" element={<Cadd />} />

          <Route path="/Ulist" element={<Ulist />} />
          <Route path="/Uadd" element={<Uadd />} />

          <Route path="/Tlist" element={<Tlist />} />
          <Route path="/Tadd" element={<Tadd />} />

          <Route path="/Blist" element={<Blist />} />
          <Route path="/Badd" element={<Badd />} />

          <Route path="/Colist" element={<Colist />} />
          <Route path="/Coadd" element={<Coadd />} />

          <Route path="/Sizelist" element={<Sizelist />} />
          <Route path="/Sizeadd" element={<Sizeadd />} />

          <Route path="/Supplist" element={<Supplist />} />
          <Route path="/Suppadd" element={<Suppadd />} />

          <Route path="/Paymentlist" element={<Paymentlist />} />
          <Route path="/Paymentadd" element={<Paymentadd />} />

          <Route path="/Expenses" element={<Expenses />} />
          <Route path="/Etype" element={<Etype />} />
          <Route path="/Elist" element={<Elist />} />

          <Route path="/Rlist" element={<Rlist />} />
          <Route path="/Radd" element={<Radd />} />

          <Route path="/Mycompany" element={<Mycompany />} />
          <Route path="/WM" element={<WM />} />
          <Route path="/Designation" element={<Designation />} />
          <Route path="/Pmode" element={<Pmode />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/SP" element={<SP />} />
          <Route path="/Mycompany" element={<Mycompany />} />
          <Route path="/WM" element={<WM />} />
          <Route path="/SPL" element={<SPL />} />
          <Route path="/PC" element={<PC />} />
          <Route path="/Billnote" element={<Billnote />} />
        </Routes>
    </Router>
  );
}

export default App; 