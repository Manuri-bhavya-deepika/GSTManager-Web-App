import React, { useState } from 'react';
import './Brandwise.css';

const Brandwise = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

return (
<div className="card">
  <div className="card-header"><h3>BRAND-WISE REPORTS</h3></div>
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
          <label>Select product</label>
          <input type="text"/>
        </div>
        <div className="col-md-6">
          <label>Brand Name</label>
          <select>
            <option>--Select Brand Name--</option>
            <option >US POLO</option>
            <option >Oneplus</option>
          </select>
        </div>
      </div>
    </div>
    <div className="search-button"><button>Search</button></div>
    <div className="row">
          <div className="col-md-6">BRAND-WISE REPORTS LIST</div>
          <div className="col-md-6 button-container">
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
                <th>BILL NO</th>
                <th>BRAND NAME</th>
                <th>PRODUCT NAME</th>
                <th>DISCOUNT</th>
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

export default Brandwise;