import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Cashierwise.css';

const Cashierwise = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [counterNumber, setCounterNumber] = useState('');
  const [cashierName, setCashierName] = useState('');

  const validateCounterNumberInput = (input) => {
    const regex = /^[0-9]*$/; 
    if (regex.test(input)) {
      return input;
    } else {
      return counterNumber; 
    }
  };

return (
<div className="card">
  <div className="card-header"><h3>CASHIER-WISE REPORTS</h3></div>
  <div className="card-body">
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="fromDate">From Date:</label>
          <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} dateFormat="dd-MM-yyyy" placeholderText="dd-mm-yyyy" className="form-control"/>
        </div>
        <div className="col-md-5">
          <label htmlFor="toDate">To Date:</label>
          <DatePicker selected={toDate} onChange={(date) => setToDate(date)} dateFormat="dd-MM-yyyy" placeholderText="dd-mm-yyyy" className="form-control"/>
        </div>
      </div>
    </div>
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="counterNumber">Counter No</label>
          <input type="text" id="counterNumber" placeholder="Counter No" value={counterNumber} onChange={(e) => setCounterNumber(validateCounterNumberInput(e.target.value))} />
        </div>
        <div className="col-md-5">
          <label htmlFor="cashierName">Cashier Name:</label>
          <select id="cashierName" value={cashierName} onChange={(e) => setCashierName(e.target.value)}>
            <option value="">--Select Cashier--</option>
            <option value="Kiran">Kiran</option>
          </select>
        </div>
      </div>
    </div>
    <div className="search-button"><button>Search</button></div><br/>
    <div class="row">
      <div class="col-md-6">CASHIER-WISE REPORTS LIST</div>
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
            <th>COUNTER NO</th>
            <th>CASHIER NAME</th>
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

export default Cashierwise;