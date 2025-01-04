import React, { useState } from 'react';
import './Branchwise.css';

const Branchwise = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [cashierName, setCashierName] = useState('');

return (
<div className="card">
  <div className="card-header"><h3>BRANCH-WISE REPORTS</h3></div>
  <div className="card-body">
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="fromDate">From Date:</label>
          <input type="date" id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="toDate">To Date:</label>
          <input type="date" id="toDate" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </div>
      </div>
    </div>
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="">From Branch Name</label>
          <div className="row">
            <select  value={cashierName} onChange={(e) => setCashierName(e.target.value)} className="custom-select">
              <option>--Select from Branch name--</option>
              <option>Rajahmundry branch</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
        <label htmlFor="">To Branch Name</label>
          <div className="row">
            <select  value={cashierName} onChange={(e) => setCashierName(e.target.value)} className="custom-select">
              <option>--Select to Branch name--</option>
              <option>rajahmundry branch</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
        <label htmlFor="">from Product Name</label>
          <div className="row">
            <select  className="custom-select">
              <option>--Select from Product Name--</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
        <label htmlFor="">To Product Name</label>
          <div className="row">
            <select  className="custom-select">
              <option>--Select to Product Name--</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div className="search-button"><button>Search</button></div><br/>
    <div class="row">
      <div class="col-md-6">VIEW BRANCH-WISE LIST</div>
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
            <th>FROM BRANCH NAME</th>
            <th>TO BRANCH NAME</th>
            <th>PRODUCT NAME</th>
            <th>QUANTITY</th>
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

export default Branchwise;