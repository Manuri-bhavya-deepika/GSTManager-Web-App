import React from 'react';
import './Qlist.css';

const Qlist = () => {
  return (
    <div>
    <div className="card">
      <div className="card-header">
        <h3>QUOTATIONS LIST</h3>
      </div>
      <div className="card-body">
        <div className="row no-gutters">
          <div className="col-md-3">
            <input type="text" placeholder="Search by Party Name"/>
          </div>
          <div className="col-md-3">
            <input type="text" placeholder="Search by Voucher Date"/>
          </div>
          <div className="col-md-3">
            <input type="text" placeholder="Search by Voucher Name"/>
          </div>
        </div>
        <br/><br/>
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
  </div>
  );
};

export default Qlist;