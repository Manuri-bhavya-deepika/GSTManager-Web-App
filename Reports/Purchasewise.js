import React, { useState } from 'react';
import './Purchasewise.css';

const Purchasewise = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

return (
<div className="card">
    <div className="card-header"><h3>PURCHASE-WISE REPORTS</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="fromDate">From Date</label><br/>
                    <input type="date" id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="toDate">To Date</label><br/>
                    <input type="date" id="toDate" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </div>
            </div>
        </div>
        <div className="form-group">
        <label htmlFor="counterNumber">SELECT PRODUCT</label>
            <div className="custom-select">
            <select>
            <option value="">--Select Product--</option>
            <option value="UPI">Key Chains</option>
            <option value="UPI">Mi</option>
            <option value="UPI">Samsung</option>
            <option value="UPI">iphone</option>
          </select>
            </div>
        </div>
    </div>
    <div className="search-button"><button>Search</button></div>
    <div className="row">
          <div className="col-md-6">PURCHASE-WISE REPORTS LIST</div>
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
                <th>VENDOR/SUPPLIER NAME</th>
                <th>PRODUCT NAME</th>
                <th>PURCHASE RATE</th>
                <th>GST</th>
                <th>TOTAL TAXABLE AMOUNT</th>
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

export default Purchasewise;