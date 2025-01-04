import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Expenses.css';

const Elist = () => {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

return (
<div className="card">
    <div className="card-header"><h3>EXPENSE SUMMARY</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="fromDate">From Date*</label>
                    <DatePicker selected={fromDate} onChange={date => setFromDate(date)} dateFormat="dd/MM/yyyy" placeholderText="dd-mm-yy"/>
                    {/* <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon"  id="fromDate" onClick={() => document.getElementById('fromDate').click()} /> */}
                </div>
                <div className="col-md-6">
                    <label htmlFor="toDate">To Date*</label>
                    <DatePicker selected={toDate} onChange={date => setToDate(date)} dateFormat="dd/MM/yyyy" placeholderText="dd-mm-yy"/>
                    {/* <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" id="toDate" onClick={() => document.getElementById('toDate').click()} /> */}
                </div>
            </div>
        </div>
    </div>
    <div className="save-button-container">
        <button className="save-button">Search</button>
    </div>
    <div className="designation-list">
        <h3>EXPENSES LIST</h3>
        <table>
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>EXPENSE TYPE</th>
                    <th>EXPENSE DATE</th>
                    <th>EXPENSE AMOUNT</th>
                    <th>EXPENSE ACCOUNT</th>
                    <th>ACTIONS</th>
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

export default Elist;