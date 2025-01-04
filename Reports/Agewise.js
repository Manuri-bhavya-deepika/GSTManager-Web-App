import React, { useState } from 'react';
import './Agewise.css';

const Agewise = () => {
  const [fromDate, setFromDate] = useState('');

  const [age, setAge] = useState('');
  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === '') {
      setAge(value);
    }
  };

return (
<div className="card">
  <div className="card-header"><h3>AGE-WISE ANALYSIS</h3></div>
  <div className="card-body">
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="fromDate">Select Date</label>
          <input type="date" id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </div>
        <div className="col-md-5">
          <label htmlFor="toDate">Age</label>
          <input type="text"  value={age} placeholder="Age" onChange={handleAgeChange}/>
        </div>
      </div>
    </div>
    <div className="search-button"><button>Search</button></div>
    <div class="row">
      <div class="col-md-6">AGE-WISE REPORTS LIST</div>
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
</div>
  );
};

export default Agewise;