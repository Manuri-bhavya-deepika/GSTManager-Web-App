import React, { useState } from 'react';
import './Salesmanwise.css';

const Salesmanwise = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [cashierName, setCashierName] = useState('');

return (
<div className="card">
  <div className="card-header">
    <h3>SALESMAN-WISE REPORTS</h3>
  </div>
  <div className="card-body">
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="fromDate">From Date</label>
          <input type="date" id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="toDate">To Date</label>
          <input type="date" id="toDate" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </div>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="cashierName">Salesman Name</label>
      <div className="row">
        <select id="cashierName" value={cashierName} onChange={(e) => setCashierName(e.target.value)} className="custom-select">
          <option value="">--Select Salesman--</option>
          <option value="UPI">Maha</option>
        </select>
      </div>
    </div>
  </div>
  <div className="search-button"><button>Search</button></div><br/>
  <div class="row">
    <div class="col-md-6">SALESMAN-WISE REPORTS LIST</div>
    <div class="col-md-6 button-container">
      <button>excel</button>
      <button>csv</button>
      <button>PRINT</button>
    </div>
  </div><br/>
  <div className="table-container">
      <table className="report-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>VOUCHER DATE</th>
            <th>BILL NO</th>
            <th>SALESMAN NAME</th>
            <th>GST</th>
            <th>TOTAL TAXABLE AMOUNT</th>
            <th>CGST AMOUNT</th>
          </tr>
        </thead>
        <tbody>
              {/* Table data goes here */}
        </tbody>
      </table>
    </div>
  </div>
  );
};
export default Salesmanwise;