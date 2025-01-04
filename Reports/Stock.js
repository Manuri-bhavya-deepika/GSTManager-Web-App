import React, { useState } from 'react';
import './Stock.css';

const Stock = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

return (
<div className="card">
  <div className="card-header"><h3>STOCK REPORTS</h3></div>
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
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="counterNumber">Product Name</label>
          <select>
            <option>--Select Product--</option>
            <option>Key Chains</option>
            <option>Mi</option>
            <option>Samsung</option>
            <option>iphone</option>
          </select>
        </div>
        <div className="col-md-6">
          <label>Category Name</label>
          <select>
            <option>--Select Category Name--</option>
            <option>Stationary</option>
            <option>Electronics</option>
          </select>
        </div>
      </div>
    </div>
    <div className="search-button"><button>Detail</button><button>Summary</button></div><br/><br/>
    <div class="row">
      <div class="col-md-6">STOCK-WISE REPORTS LIST</div>
      <div class="col-md-6 button-container">
        <button>excel</button>
        <button>csv</button>
        <button>A4</button>
        <button>Thermal</button>
      </div>
    </div><br/><br/>
    <div className="table-container">
      <table className="report-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>VOUCHER DATE</th>
            <th>PRODUCT NAME</th>
            <th>CATEGORY NAME</th>
            <th>HSN CODE</th>
            <th>PRODUCT CODE</th>
            <th>GST</th>
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

export default Stock;