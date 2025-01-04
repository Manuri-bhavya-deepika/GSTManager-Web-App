import React  from 'react';
import './Salesummary.css';

const Salesummary = () => {
return (
<div className="card">
    <div className="card-header"><h3>SALES SUMMARY</h3></div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="fromDate">From Date*</label><br/>
                    <input type="date"  placeholder='dd-mm-yyyy'/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="toDate">To Date*</label><br/>
                    <input type="date" placeholder='dd-mm-yyyy'/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="paymentMode">Payment Mode*</label>
                    <select id="paymentMode" className="form-control">
                        <option value="">--Select payment Mode--</option>
                        <option value="upi">UPI</option>
                        <option value="cash">Cash</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="search-button"><button>Search</button></div><br/>
        <div class="row">
            <div class="col-md-6">SALES SUMMARY LIST</div>
        </div>
        <div className="table-container">
      <table className="report-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>PARTY NAME</th>
            <th>VOUCHER DATE</th>
            <th>VOUCHER NO</th>
            <th>TOTAL DISCOUNT</th>
            <th>QTY</th>
            <th>FREE QTY</th>
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

export default Salesummary;