import React, { useState } from 'react';
import './Expiredprod.css';

const Expiredprod = () => {
  const [fromDate, setFromDate] = useState('');

return (
<div className="card">
    <div className="card-header"><h3>EXPIRED PRODUCTS REPORTS</h3></div>
    <div className="card-body">
        <div className="form-group">
            <label htmlFor="fromDate">Expiry Date</label>
            <div className="row">
                <input type="date" id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            </div>
        </div>
    </div>
    <div className="search-button"><button>Search</button></div>
    <div className="row">
        <div className="col-md-6">EXPIRED PRODUCTS REPORTS LIST</div>
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
                <th>PRODUCT NAME</th>
                <th>QTY</th>
                <th>FREE QTY</th>
                <th>GST</th>
                <th>PURCHASE RATE</th>
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

export default Expiredprod;