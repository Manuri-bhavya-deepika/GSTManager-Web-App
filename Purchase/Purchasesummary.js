import React, { useState } from 'react';
import './Purchasesummary.css';

const Purchasesummary = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

return (
<div className="card">
  <div className="card-header"><h3>PURCHASE SUMMARY</h3></div>
  <div className="card-body">
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="fromDate">From Date:</label><br/>
          <input type="date" id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="toDate">To Date:</label><br/>
          <input type="date" id="toDate" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </div>
      </div>
    </div>
    <div className="search-button"><button>Search</button></div><br/>
    <div className="table-container">
      <table className="report-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>SUPPLIER NAME</th>
            <th>VOUCHER DATE</th>
            <th>PRODUCT NAME</th>
            <th>VENDOR INVOICE NO</th>
            <th>TOTAL DISCOUNT</th>
            <th>QTY</th>
          </tr>
        </thead>
        <tbody>
              {/* Table data goes here */}
        </tbody>
      </table>
    </div>
  </div>
</div>
  );
};

export default Purchasesummary;