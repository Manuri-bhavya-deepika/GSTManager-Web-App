import React, { useState }from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Paymentadd.css';

const Paymentadd = () => {
  const [paymentDate, setPaymentDate] = useState(null);

  const validatePaymentAmount = (event) => {
    event.target.value = event.target.value.replace(/[^0-9.]/g, '');
  };

  const validateChequeNumber = (event) => {
    event.target.value = event.target.value.replace(/[^\d]/g, '');
  };

return (
<div className="card">
  <div className="card-header"><h3>ADD PAYMENTS</h3></div>
  <div className="card-body">
    <div className="form-group">
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="">Customer Name*</label>
          <input type="text"  placeholder='Name'/>
        </div>
        <div className="col-md-4">
          <label htmlFor="">Cash Or Bank*</label>
          <select id="cashOrBank" name="cashOrBank">
            <option value="">--Select cash/bank--</option>
            <option value="cash">Cash</option>
            <option value="bank">Bank</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="">Supplier Name*</label>
          <select id="supplierName" name="supplierName">
            <option value="">--Select Supplier Name--</option>
            <option value="textiles">Textiles</option>
            <option value="bhavani">Bhavani</option>
          </select>
        </div>
      </div>
    </div>
        <div className="form-group">
          <div className="row">
          <div className="col-md-4">
              <label htmlFor="">Payment Amount*</label>
              <input type="text" placeholder="Amount" onInput={validatePaymentAmount} />
            </div>
            <div className="col-md-4">
              <label htmlFor="counterNumber">Payment Date*</label>
              <DatePicker
                selected={paymentDate}
                onChange={date => setPaymentDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="dd-mm-yy"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Payment Mode*</label>
              <select id="supplierName" name="supplierName">
                <option value="">--Select PaymentMode--</option>
                <option value="textiles">UPI</option>
                <option value="bhavani">CASH</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="">Cheque.No</label>
              <input type="text" placeholder="Number" onInput={validateChequeNumber} />
            </div>
          </div>
        </div>
        <div className="save-button-container">
            <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Paymentadd;