import React, { useState } from 'react';
import './Salesend.css';

const Salesend = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [cashierName, setCashierName] = useState('');

return (
<div className="card">
  <div className="card-header">
    <h3>SALES END REPORT</h3>
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
      <label htmlFor="cashierName">Party Name</label>
        <div className="row">
          <select id="cashierName" value={cashierName} onChange={(e) => setCashierName(e.target.value)} className="custom-select">
            <option value="">--Select Party Name--</option>
            <option value="UPI">Vijay Kirana Store</option>
          </select>
        </div>
      </div>
    </div>
  <div className="search-button"><button>Search</button></div><br/>
  <div class="row">
    <div class="col-md-6">SALES END REPORTS LIST</div>
    <div class="col-md-6 button-container">
      <button>excel</button>
      <button>csv</button>
      <button>PRINT</button>
    </div>
  </div><br/><br/>
  <div className="table-container">
      <table className="report-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>VOUCHER DATE</th>
            <th>PARTY NAME</th>
            <th>PRODUCT NAME</th>
            <th>TOTAL TAXABLE AMOUNT</th>
            <th>COST AMOUNT</th>
            <th>SGST AMOUNT</th>
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
export default Salesend;