import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Radd.css';

const Radd = () => {
  const handlePaymentAmountChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
};

const [paymentDate, setPaymentDate] = useState(null);
    const handlePaymentDateChange = (date) => {
        setPaymentDate(date);
    };

    const handleChequeNoChange = (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
  };


return (
<div className="card">
  <div className="card-header"><h3>ADD RECEIPT</h3></div>
  <div className="card-body">
    <div className="form-group">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="">Customer Name</label>
          <select id="customerName">
            <option value="">--Select Name--</option>
            <option value="vijayKiranaStore">Vijay Kirana Store</option>
          </select>
        </div>
        <div className="col-md-5">
          <label htmlFor="">Cash Or Bank*</label>
          <select id="customerName">
            <option value="">--Select cash/bank--</option>
            <option value="vijayKiranaStore"> Cash </option>
            <option value="vijayKiranaStore">Bank</option>
          </select>
        </div>
      </div>
    </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="">Payment Amount*</label>
              <input type="text" placeholder="Payment Amount" onChange={handlePaymentAmountChange}/>
            </div>
            <div className="col-md-5">
              <label htmlFor="">Payment Date</label>
              <div className="date-input-container">
                <DatePicker selected={paymentDate} onChange={handlePaymentDateChange} dateFormat="dd-MM-yyyy" placeholderText="24-04-2024"/>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="">Payment Mode*</label>
              <select id="customerName">
                <option value="">--Select Payment Mode--</option>
                <option value="vijayKiranaStore">UPI</option>
                <option value="vijayKiranaStore">CASH</option>
              </select>
            </div>
            <div className="col-md-5">
              <label htmlFor="">Cheque.No</label>
              <input type="text" placeholder="Cheque.No" onChange={handleChequeNoChange} />
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

export default Radd;